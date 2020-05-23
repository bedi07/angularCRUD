import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [CommonModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatDatepickerModule],
    exports: [CommonModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatDatepickerModule]
})

 export class MaterialModule {}