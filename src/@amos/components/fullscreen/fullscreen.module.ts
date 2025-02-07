import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { amosFullscreenComponent } from '@amos/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [amosFullscreenComponent],
    imports: [MatButtonModule, MatIconModule, MatTooltipModule, CommonModule],
    exports: [amosFullscreenComponent],
})
export class amosFullscreenModule {}
