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

  catalogo : carouselImage[] = [
    {
      imageSrc: '../../../../assets/catalogo/01.png',
      imageAlt: 'Mas vendidos'
    },
    {
      imageSrc: '../../../../assets/catalogo/02.png',
      imageAlt: 'Lançamentos'
    },
    {
      imageSrc: '../../../../assets/catalogo/03.png',
      imageAlt: 'Pré-venda'
    },
    {
      imageSrc: '../../../../assets/catalogo/04.png',
      imageAlt: 'Todos os livros'
    },
    {
      imageSrc: '../../../../assets/catalogo/05.png',
      imageAlt: 'Magicae'
    },
    {
      imageSrc: '../../../../assets/catalogo/06.png',
      imageAlt: 'Macabra'
    },
    {
      imageSrc: '../../../../assets/catalogo/07.png',
      imageAlt: 'Crime scene'
    },
    {
      imageSrc: '../../../../assets/catalogo/08.png',
      imageAlt: 'medo clássico'
    },
    {
      imageSrc: '../../../../assets/catalogo/09.png',
      imageAlt: 'nacionais'
    },
    {
      imageSrc: '../../../../assets/catalogo/10.png',
      imageAlt: 'darklove'
    },
    {
      imageSrc: '../../../../assets/catalogo/11.png',
      imageAlt: 'quadrinhos'
    },
    {
      imageSrc: '../../../../assets/catalogo/12.png',
      imageAlt: 'darkside'
    },
    {
      imageSrc: '../../../../assets/catalogo/13.png',
      imageAlt: 'caveirinha'
    },
    {
      imageSrc: '../../../../assets/catalogo/14.png',
      imageAlt: 'cinebook'
    },
    {
      imageSrc: '../../../../assets/catalogo/15.png',
      imageAlt: 'dark fantasy'
    },
    {
      imageSrc: '../../../../assets/catalogo/16.png',
      imageAlt: 'crânio'
    },
    
  ]
}
