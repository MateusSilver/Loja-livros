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

  foward() : void {
    const isLastSlide = this.selectedIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.selectedIndex+1;
    this.selectedIndex = newIndex;
  }

  back() : void {
    const isFirstSlide = this.selectedIndex === 0;
    const newIndex = isFirstSlide ? this.images.length-1 : this.selectedIndex-1;
    this.selectedIndex = newIndex;
  }

  goToSlide(slideIndex : number) : void {
    this.selectedIndex = slideIndex;
  }

  getCurrentSlideUrl() : string {
    console.log(this.images[this.selectedIndex].imageSrc);
    return `url('${this.images[this.selectedIndex].imageSrc}')`
  }

}
