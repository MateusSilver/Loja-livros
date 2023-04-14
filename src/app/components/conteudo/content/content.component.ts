import { Component, Input } from '@angular/core';
import { carouselImage } from '../carousel/carousel.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() images : carouselImage[] = [];
}
