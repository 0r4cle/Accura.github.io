import {
    IsActiveMatchOptions,
    Params,
    QueryParamsHandling,
} from '@angular/router';

export interface amosNavigationItem {
    id?: string;
    title?: string;
    subtitle?: string;
    type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
    hidden?: (item: amosNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    fragment?: string;
    preserveFragment?: boolean;
    queryParams?: Params | null;
    queryParamsHandling?: QueryParamsHandling | null;
    externalLink?: boolean;
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: amosNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: amosNavigationItem[];
    meta?: any;
}

export type amosVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type amosVerticalNavigationMode = 'over' | 'side';

export type amosVerticalNavigationPosition = 'left' | 'right';
