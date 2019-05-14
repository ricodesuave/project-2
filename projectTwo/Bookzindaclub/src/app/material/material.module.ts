import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule,
  MatInputModule, MatRadioModule,
  MatListModule,} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [CommonModule, MatNativeDateModule, MatDatepickerModule,
    MatIconModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, FormsModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatListModule,
    MatRadioModule, MatTabsModule],

    exports: [MatNativeDateModule, FormsModule,
      MatDatepickerModule, MatIconModule,
      MatButtonModule, MatCheckboxModule,
      MatToolbarModule, MatCardModule,
      MatFormFieldModule, MatInputModule,
      MatListModule, MatRadioModule, MatTabsModule],
})
export class MaterialModule { }
