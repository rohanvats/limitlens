import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent  implements OnInit {

  @Input() filterType: any;

  styleForm = new FormGroup({
    style: new FormControl(null, [Validators.required])
  })

  formatForm = new FormGroup({
    imageType: new FormControl('',[Validators.required]),
    ratio: new FormControl('',[Validators.required])
  })

  selectedValue = '';
  styling: any = [];
  radioOptions:any = [];
  purposeOptions:any = [];

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.getStyleData();
    this.getFormatRatioData();
    this.getFormatPurposeData();
  }

  getStyleData(){
    this.dataService.getStylingData().subscribe(data => {
      this.styling = data;
    })
  }

  getFormatRatioData(){
    this.dataService.getRadioOptions().subscribe(data => {
      this.radioOptions = data;
    })
  }

  getFormatPurposeData(){
    this.dataService.getPurposeData().subscribe(data => {
      this.purposeOptions = data;
    })
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSaveFormat(){
    this.modalCtrl.dismiss(this.formatForm.value, 'confirmFormat');
  } 
  
  onSaveStyling(){
    console.log(this.styleForm.value)
    this.modalCtrl.dismiss(this.styleForm.value, 'confirmStyle')
  }

}
