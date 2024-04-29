import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  private spinner$ = new BehaviorSubject(false);

  spinnerValue$ = this.spinner$.asObservable();

  updateSpinner(value: boolean) {
    this.spinner$.next(value);
  }

  async PresentToast(message: string, color?: string, icon?: string) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'toast-text',
      icon: icon,
      color: color,
      duration: 3000,
    });
    toast.present();
  }
}
