import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})

export class GalleryPage implements OnInit {

  liked=false;

  galleryData:any = []

  constructor(
    private navCtrl: NavController,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.getGalleryData()
  }

  getGalleryData(){
    this.dataService.getGalleryData().subscribe(data => {
      this.galleryData = data;
    })
  }

  go(item:any){
    console.log('go');
    this.navCtrl.navigateForward(['/tabs/gallery/image-details'],{
      queryParams: item,
    })
  }

  toggleLike(){
    console.log(this.liked);
    this.liked = !this.liked;
  }

  toImageDetails(event: any){
    console.log('item: ',event, typeof(event));
    this.navCtrl.navigateForward(['/tabs/gallery/image-details'],{
      queryParams: event,
    })
  }

}
