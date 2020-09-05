import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'carousal1';
  images = [
    'https://images.alphacoders.com/101/thumb-1920-101213.jpg',
    'https://images5.alphacoders.com/435/thumb-1920-435961.jpg',
    'https://images5.alphacoders.com/508/508273.jpeg',
    'https://cdn.wallpapersafari.com/85/93/xsY0Mj.jpg',
    'https://i.pinimg.com/originals/80/fb/7a/80fb7a02599c9692a7261eda4d3c2029.jpg'
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  };

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
