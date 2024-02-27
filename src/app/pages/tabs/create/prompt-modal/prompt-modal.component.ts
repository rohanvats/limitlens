import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.scss'],
})
export class PromptModalComponent {
  userPrompt: string;
  disableSave = true;

  constructor(private modalCtrl: ModalController) {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSavePrompt() {
    this.modalCtrl.dismiss(this.userPrompt, 'confirm');
  }
}
