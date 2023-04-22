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
  catalogoIndex : number[] = [0,1,2,3,4,5,6,7];

  foward() : void {
    for(let i = 0; i <= this.catalogoIndex.length-1; i++){
      const isLastSlide = this.catalogoIndex[i] === this.catalogo.length - 1;
      const newIndex = isLastSlide ? 0 : this.catalogoIndex[i]+1;
      this.catalogoIndex[i] = newIndex;
    }
    console.log(this.catalogoIndex);
  }

  back() : void {
    for(let i=0; i <= this.catalogoIndex.length-1; i++){
      const isFirstSlide = this.catalogoIndex[i] === 0;
      const newIndex = isFirstSlide ? this.catalogo.length-1 : this.catalogoIndex[i]-1;
      this.catalogoIndex[i] = newIndex;
    }
    console.log(this.catalogoIndex)
  }

  goToSlide(slideIndex : number) : void {
    this.getCurrentSlideUrl(slideIndex)
  }

  getCurrentSlideUrl(ind : number) : string {
    console.log(this.catalogo[ind].imageSrc);
    return this.catalogo[ind].imageSrc
  }

}
