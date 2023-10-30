import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  image = '';
  userPrompt = '';
  filterOptions:any = [
    {name: 'format', value: 'format'},
    {name: 'styling', value: 'styling'}
  ]

  promptForm = new FormGroup({
    image: new FormControl(''),
    prompt: new FormControl(''),
    filters: new FormControl('')
  })

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.image = 'https://picsum.photos/300/300?random=1';
    this.userPrompt = 'Example : This photos as Indiana Jones';
  }

  openPromptModal(){
    this.modalCtrl.create({
      component: PromptModalComponent,
      componentProps: { createPrompt : this.userPrompt}
      })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(data => {
      console.log(data);
      if(data.role === 'confirm'){
        if(data.data === ''){
          this.userPrompt = 'Example : This photos as Indiana Jones'
          return
        }
        this.userPrompt = data.data;
      }
    })
    
    
  }
  
  getfilter(item: any){
    if(item === 'styling'){

    }
  }

  openFilterModal(filterType: string){
    this.modalCtrl.create({
      component: FilterModalComponent,
      componentProps: {
        filterType
      }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(result =>{
      if(result.role === 'confirmStyle'){
        console.log(result); 
        
        this.filterOptions.map((el:any) => {
          if(el.value === 'styling'){
            el.styleImage = result.data.style.styleImage;
            return el.name = result.data.style.name;
          }
        })
      }

      if(result.role === 'confirmFormat'){
        console.log('res: ',result);
        
        this.filterOptions.map((el:any) => {
          if(el.value === 'format'){
            el.iconName = result.data.imageType.iconName;
            return el.name = result.data.ratio.name; 
          }
        })
      }
    })
  }

  onSavePrompt(){
    console.log({
      image: 'dummy',
      prompt: this.userPrompt,
      filters: this.filterOptions
    });
  }

}
