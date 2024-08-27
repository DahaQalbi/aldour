import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string, color: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      duration: duration,
      position: 'bottom', // You can change this to 'top' or 'middle' if needed
    });
    toast.present();
  }

  async showError(message: string) {
    this.presentToast(message, 'danger');
  }

  async showSuccess(message: string) {
    this.presentToast(message, 'success');
  }

  async showInfo(message: string) {
    this.presentToast(message, 'primary'); // or 'medium' for informational
  }

  async showWarning(message: string) {
    this.presentToast(message, 'warning');
  }
}
