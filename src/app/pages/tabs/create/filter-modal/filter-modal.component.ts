import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent  implements OnInit {

  @Input() filterType: any;
  // @ViewChild('stylingValue') stylingValue:any;


  styleForm = new FormGroup({
    style: new FormControl(null, [Validators.required])
  })

  formatForm = new FormGroup({
    imageType: new FormControl('',[Validators.required]),
    ratio: new FormControl('',[Validators.required])
  })

  selectedValue = '';

  styling = [
    {name: 'HYPER REALISTIC'},
    {name: 'DYNAMIC COMPOSITION'},
    {name: 'RETRO ILLUSTRATION'},
    {name: 'VINTAGE LOOK'},
    {name: 'CARTOON'},
    {name: 'AVANTGARDE FASHION'},
    {name: 'ALBUM COVER'},
    {name: 'POLITICAL PROPAGANDA'},
    {name: 'HORROR'},
    {name: 'DYSTOPIAN'},
    {name: 'STOCK PHOTO'},
    {name: 'ART'},
    {name: 'VIDEO GAME'},
    {name: 'AIRBRUSH ART'},
    {name: 'MOVIE'}
  ]


  purposeOptions=[
    {name:'screen image', value: 'screen image', iconName: 'image'},
    {name:'printable image', value: 'printable image', iconName: 'print'}
  ]

  ratioOptions = [
    {name: 'portrait', value: 'portrait', image: '../../../../../assets/icon/Portrait.png'},
    {name: 'square', value: 'square', image: '../../../../../assets/icon/Square.png'},
    {name: 'landscape', value: 'landscape', image: '../../../../../assets/icon/Landscape.png'}
  ]


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  selectStyle(style: any){
    console.log('style: ',style);
    
  }

  onSaveFormat(){
    console.log(this.formatForm.value);
    this.modalCtrl.dismiss(this.formatForm.value, 'confirmFormat');
  } 

  onSaveStyling(){
    console.log(this.styleForm.value)
    this.modalCtrl.dismiss(this.styleForm.value, 'confirmStyle')
  }

}
