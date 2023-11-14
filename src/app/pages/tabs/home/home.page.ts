import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  globalData:any = []

  constructor(private dataService:DataService) {}

  ngOnInit(){
    this.getGlobalFeedData();
  }

  getGlobalFeedData(){
    this.dataService.getGlobalFeedData().subscribe(data => {
      this.globalData = data;
    })
  }

}
