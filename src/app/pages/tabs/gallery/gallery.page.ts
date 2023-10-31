import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})

export class GalleryPage implements OnInit {

  liked=false;

  images = [
    {
      id: 1,
      name: 'First image',
      image: 'https://picsum.photos/300/300?random=1'
    },
    {
      id: 2,
      name: 'Second image',
      image: 'https://picsum.photos/300/300?random=2'
    },
    {
      id: 3,
      name: 'Third image',
      image: 'https://picsum.photos/300/300?random=3'
    },
    {
      id: 4,
      name: 'Fourth image',
      image: 'https://picsum.photos/300/300?random=4'
    },
    {
      id: 5,
      name: 'Fifth image',
      image: 'https://picsum.photos/300/300?random=6'
    },
    {
      id: 6,
      name: 'Sixth image',
      image: 'https://picsum.photos/300/300?random=7'
    },
    {
      id: 7,
      name: 'Seventh image',
      image: 'https://picsum.photos/300/300?random=8'
    },
    {
      id: 8,
      name: 'Eighth image',
      image: 'https://picsum.photos/300/300?random=9'
    },
    {
      id: 9,
      name: 'Ninth image',
      image: 'https://picsum.photos/300/300?random=10'
    },
    {
      id: 10,
      name: 'Tenth image',
      image: 'https://picsum.photos/300/300?random=11'
    },
    {
      id: 11,
      name: 'Eleventh image',
      image: 'https://picsum.photos/300/300?random=12'
    },
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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


}
