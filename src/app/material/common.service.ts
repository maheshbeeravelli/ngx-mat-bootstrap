import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { BasicDialogData } from '../globals/global.interface';
import { Observable, Subject } from 'rxjs';
import { InfoDialogComponent } from '../ui/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private loadingSubject: Subject<{ status: boolean; message: string }> = new Subject();
  public loadingState$: Observable<{
    status: boolean;
    message: string;
  }> = this.loadingSubject.asObservable();
  constructor(public dialog: MatDialog) {}
  openInfoDialog(data: BasicDialogData): Observable<any> {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      // width: '250px',
      data
    });
    return dialogRef.afterClosed();
  }
  setLoading(status: boolean, message: string = '') {
    this.loadingSubject.next({ status, message });
  }
}
