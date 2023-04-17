import { Component, Input } from '@angular/core';
import { carouselImage } from '../carousel/carousel.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  @Input() catalogo : carouselImage[] = [

  ]

  selectedIndex : number = 0;

  foward() : void {
    const isLastSlide = this.selectedIndex === this.catalogo.length - 1;
    const newIndex = isLastSlide ? 0 : this.selectedIndex+1;
    this.selectedIndex = newIndex;
  }

  back() : void {
    const isFirstSlide = this.selectedIndex === 0;
    const newIndex = isFirstSlide ? this.catalogo.length-1 : this.selectedIndex-1;
    this.selectedIndex = newIndex;
  }

  goToSlide(slideIndex : number) : void {
    this.selectedIndex = slideIndex;
  }

  getCurrentSlideUrl() : string {
    console.log(this.catalogo[this.selectedIndex].imageSrc);
    return this.catalogo[this.selectedIndex].imageSrc
  }

}
