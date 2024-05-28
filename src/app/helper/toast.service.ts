import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  private spinnerSubject = new BehaviorSubject<boolean>(false);

  spinnerValue$: Observable<boolean> = this.spinnerSubject.asObservable();

  toggleSpinner(value: boolean): void {
    console.log('Spinner Toggled:', value);
    this.spinnerSubject.next(value);
  }

  async PresentToast(message: string, color?: string, icon?: string) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'toast-text',
      icon: icon,
      color: color,
      duration: 5000,
    });
    toast.present();
  }
}
