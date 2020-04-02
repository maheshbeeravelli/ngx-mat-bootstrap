import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { SnackbarService } from './snackbar.service';
// import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatMenuModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSortModule,
  MatSnackBarModule,
  // DateAdapter,
  // MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  // NativeDateAdapter,
  MatSlideToggleModule,
  MatProgressBarModule
} from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
// import { Platform } from '@angular/cdk/platform';
// import { OrderArrayOfObjectPipe } from '../pipes/order-array-of-object.pipe';
// import { TitleCasePipe } from '../title-case.pipe';
// import { TableComponent } from '../ui/table/table.component';
// import { NgReduxFormModule } from '@angular-redux/form';
import { PageLoadingBarComponent } from './page-loading-bar/page-loading-bar.component';
const DateFormat = {
  parse: {
    dateInput: 'MM/DD/YYYY'
    //dateInput: 'input'
  },
  display: {
    dateInput: 'MM/DD/YYYY', //'DD-MMM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
const MAT_MODULES = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressButtonsModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule,
  MatSnackBarModule
];
const GENERIC_COMPONENTS = [PageLoadingBarComponent];
// export class CustomDateAdapter extends NativeDateAdapter {
//   parse(value: any): Date | null {
//     if (typeof value === 'string' && value.indexOf('/') > -1) {
//       const str = value.split('/');

//       const year = Number(str[2]);
//       const month = Number(str[1]) - 1;
//       const date = Number(str[0]);

//       return new Date(year, month, date);
//     }

//     const timestamp = typeof value === 'number' ? value : Date.parse(value);
//     return isNaN(timestamp) ? null : new Date(timestamp);
//   }

//   // retirar quando for feito o merge da data por mmalerba
//   format(date: Date, displayFormat: Object): string {
//     date = new Date(
//       Date.UTC(
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate(),
//         date.getHours(),
//         date.getMinutes(),
//         date.getSeconds(),
//         date.getMilliseconds()
//       )
//     );
//     displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' });

//     const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
//     return dtf.format(date).replace(/[\u200e\u200f]/g, '');
//   }
// }
@NgModule({
  declarations: GENERIC_COMPONENTS,
  imports: [CommonModule, ...MAT_MODULES],
  exports: [...MAT_MODULES, ...GENERIC_COMPONENTS],
  providers: [
    MatDatepickerModule,
    SnackbarService,
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE]
    //   // useClass: CustomDateAdapter,
    //   // deps: [MAT_DATE_LOCALE, Platform]
    // },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat }
  ]
})
export class MaterialModule {}
