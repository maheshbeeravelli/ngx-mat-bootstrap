import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackbar: MatSnackBar) {}
  success(message: string, actionText: string = '', config?: Object) {
    this._snackbar.open(message, actionText, {
      duration: 3 * 1000,
      ...config
    });
  }
  info(message: string, actionText: string = '', config?: Object) {
    this._snackbar.open(message, actionText, {
      duration: 3 * 1000,
      panelClass: ['info-snackbar'],
      ...config
    });
  }
  error(message: string, actionText: string = '', config?: Object) {
    this._snackbar.open(message, actionText, {
      duration: 5 * 1000,
      panelClass: ['error-snackbar'],
      ...config
    });
  }
}
