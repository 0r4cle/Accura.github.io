import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged,
    map,
    Observable,
    Subject,
    takeUntil,
} from 'rxjs';

import { amosMediaWatcherService } from '@amos/services/media-watcher';
import { NotesDetailsComponent } from 'app/modules/admin/dashboards/notes/notes/details/details.component';
import { NotesLabelsComponent } from 'app/modules/admin/dashboards/notes/notes/labels/labels.component';
import { NotesService } from 'app/modules/admin/dashboards/notes/notes/notes.service';
import {
    Label,
    Note,
} from 'app/modules/admin/dashboards/notes/notes/notes.types';
import { cloneDeep } from 'lodash-es';
import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector: 'notes-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent implements OnInit, OnDestroy {
    labels$: Observable<Label[]>;
    notes$: Observable<Note[]>;
    user: User;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    filter$: BehaviorSubject<string> = new BehaviorSubject('archived');
    searchQuery$: BehaviorSubject<string> = new BehaviorSubject(null);
    masonryColumns: number = 4;
    note: Note;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _amosMediaWatcherService: amosMediaWatcherService,
        private _matDialog: MatDialog,
        private _notesService: NotesService,
        private _userService: UserService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the filter status
     */
    get filterStatus(): string {
        return this.filter$.value;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this.user = user;
            });
        // Request the data from the server
        this._notesService.getLabels().subscribe();
        this._notesService.getNotes().subscribe();

        // Get labels
        this.labels$ = this._notesService.labels$;

        // Get notes
        this.notes$ = combineLatest([
            this._notesService.notes$,
            this.filter$,
            this.searchQuery$,
        ]).pipe(
            distinctUntilChanged(),
            map(([notes, filter, searchQuery]) => {
                if (!notes || !notes.length) {
                    return;
                }

                // Store the filtered notes
                let filteredNotes = notes;

                // Filter by query
                if (searchQuery) {
                    searchQuery = searchQuery.trim().toLowerCase();
                    filteredNotes = filteredNotes.filter(
                        (note) =>
                            note.title.toLowerCase().includes(searchQuery) ||
                            note.content.toLowerCase().includes(searchQuery)
                    );
                }

                // Show all
                if (filter === 'notes') {
                    // Do nothing
                }

                // Show archive
                const isArchive = filter === 'archived';
                filteredNotes = filteredNotes.filter(
                    (note) => note.archived === isArchive
                );

                // Filter by label
                if (filter.startsWith('label:')) {
                    const labelId = filter.split(':')[1];
                    filteredNotes = filteredNotes.filter((note) => {
                        const isArchive = filter === 'archived';
                        const hasLabel = note.labels
                            ? note.labels.some((item) => item.id === labelId)
                            : false;
                        return (
                            (isArchive && note.archived && hasLabel) ||
                            (!isArchive && !note.archived && hasLabel)
                        );
                    });
                }

                return filteredNotes;
            })
        );

        // Subscribe to media changes
        this._amosMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode and drawerOpened if the given breakpoint is active
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Set the masonry columns
                //
                // This if block structured in a way so that only the
                // biggest matching alias will be used to set the column
                // count.
                if (matchingAliases.includes('xl')) {
                    this.masonryColumns = 5;
                } else if (matchingAliases.includes('lg')) {
                    this.masonryColumns = 4;
                } else if (matchingAliases.includes('md')) {
                    this.masonryColumns = 3;
                } else if (matchingAliases.includes('sm')) {
                    this.masonryColumns = 2;
                } else {
                    this.masonryColumns = 1;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add a new note
     */
    addNewNote(): void {
        this._matDialog.open(NotesDetailsComponent, {
            autoFocus: false,

            data: {
                note: {},
            },
        });
    }

    /**
     * Open the edit labels dialog
     */
    openEditLabelsDialog(): void {
        this._matDialog.open(NotesLabelsComponent, { autoFocus: false });
    }

    /**
     * Open the note dialog
     */
    openNoteDialog(note: Note): void {
        this._matDialog.open(NotesDetailsComponent, {
            autoFocus: false,
            data: {
                note: cloneDeep(note),
            },
        });
    }

    /**
     * Filter by archived
     */
    filterByArchived(): void {
        this.filter$.next('archived');
    }

    /**
     * Filter by label
     *
     * @param labelId
     */
    filterByLabel(labelId: string): void {
        const filterValue = `label:${labelId}`;
        this.filter$.next(filterValue);
    }

    /**
     * Filter by query
     *
     * @param query
     */
    filterByQuery(query: string): void {
        this.searchQuery$.next(query);
    }

    /**
     * Reset filter
     */
    resetFilter(): void {
        this.filter$.next('notes');
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
