import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  public confirmAlertDelete(recordType: string) {
    return Swal.fire({
      title: `Are you sure to delete this ${recordType}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#22BAA0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }

  public notifyAlert(title: string, icon: SweetAlertIcon) {
    return Swal.fire(
      '',
      title,
      icon
    )
  }
}
