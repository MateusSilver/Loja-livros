import { Component, Input } from '@angular/core';

export interface carouselImage{
  imageSrc : string;
  imageAlt : string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images : carouselImage[] = [

  ]

  selectedIndex : number = 0;

  getCurrentSlideUrl() : string {
    console.log(this.images[this.selectedIndex].imageSrc);
    return `url('${this.images[this.selectedIndex].imageSrc}')`
  }

}
