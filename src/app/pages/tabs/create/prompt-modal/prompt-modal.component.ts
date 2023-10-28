import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.scss'],
})
export class PromptModalComponent  implements OnInit {

  @ViewChild('prompt') prompt: any;
  @Input() createPrompt: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log( this.createPrompt);
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave(){
    this.modalCtrl.dismiss(this.prompt.value, 'confirm');
  }


}
