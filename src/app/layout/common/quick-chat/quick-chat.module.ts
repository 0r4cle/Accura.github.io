import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { amosDrawerModule } from '@amos/components/drawer';
import { amosScrollbarModule } from '@amos/directives/scrollbar';
import { SharedModule } from 'app/shared/shared.module';
import { QuickChatComponent } from 'app/layout/common/quick-chat/quick-chat.component';

@NgModule({
    declarations: [QuickChatComponent],
    imports: [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        amosDrawerModule,
        amosScrollbarModule,
        SharedModule,
    ],
    exports: [QuickChatComponent],
})
export class QuickChatModule {}
