import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-masonry-gallery',
  templateUrl: './masonry-gallery.component.html',
  styleUrls: ['./masonry-gallery.component.scss'],
})
export class MasonryGalleryComponent  implements OnInit {

  @Input() data: any;
  @Output() imageDetail = new EventEmitter<any>;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}

  sendItem(item: any){    
    this.imageDetail.emit(item)
  }

}
