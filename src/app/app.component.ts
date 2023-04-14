import { Component } from '@angular/core';
import { carouselImage } from './components/conteudo/carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja-livros';
  images : carouselImage[] = [
    {
      imageSrc: '/../../../../assets/img/01.png',
      imageAlt: '1'
    },
    {
      imageSrc: '/../../../../assets/img/02.png',
      imageAlt: '2'
    },
    {
      imageSrc: '/../../../../assets/img/03.png',
      imageAlt: '3'
    },
    {
      imageSrc: '/../../../../assets/img/04.png',
      imageAlt: '4'
    },
    {
      imageSrc: '/../../../../assets/img/05.png',
      imageAlt: '5'
    },
    {
      imageSrc: '/../../../../assets/img/06.png',
      imageAlt: '6'
    },
    {
      imageSrc: '/../../../../assets/img/07.png',
      imageAlt: '7'
    },
    {
      imageSrc: '/../../../../assets/img/08.png',
      imageAlt: '8'
    },
    {
      imageSrc: '/../../../../assets/img/09.png',
      imageAlt: '9'
    }
  ]
}
