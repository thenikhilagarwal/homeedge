import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }
  sliderImg = [
    {
     id: 1, src : '../../../assets/images/slider/1.jpg'
    },
    {
      id: 2, src : '../../../assets/images/slider/1.jpg'
    },
    {
      id: 3, src : '../../../assets/images/slider/1.jpg'
    }
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  catImg1 = '../../../assets/images/img-1.jpg';
  catImg2 = '../../../assets/images/img-2.jpg';
  catImg3 = '../../../assets/images/img-3.jpg';
  prodItem = [
    {
      src: '../../../assets/images/pro-1.jpg',
      off: '40% OFF',
      title: 'Aelinia Solid Wood King Size Storage Be',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-2.jpg',
      off: '40% OFF',
      title: 'Bayne Four Seater Dining Set',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-3.jpg',
      off: '40% OFF',
      title: 'Epsilon Coffee Table',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-4.jpg',
      off: '40% OFF',
      title: 'Abbey Sheesham Wood Front Drawer Queen Size Bed',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-5.jpg',
      off: '40% OFF',
      title: 'Arizona Study Table',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-6.jpg',
      off: '40% OFF',
      title: 'Weave TV Unit',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-7.jpg',
      off: '40% OFF',
      title: 'Cambay TV unit',
      price: '8,999.00',
      offPrice: '14,999.00'
    },
    {
      src: '../../../assets/images/pro-8.jpg',
      off: '40% OFF',
      title: 'Canvas metal study table',
      price: '8,999.00',
      offPrice: '14,999.00'
    }
  ];
  testimonialImg = [
    {
     id: 1,
     src : '../../../assets/images/slider/1.jpg',
     clientSay: 'The dining table is exactly what I was looking for. I love the wood grains, design and finish on the table. The best part of my experience is that a guy from delivery team noticed a slight fading on the table and sort out the issue immediately.',
     clientName: 'Savithri Subramanian',
     clientLocation: 'Mumbai'
    },
    {
      id: 2,
      src : '../../../assets/images/slider/1.jpg',
      clientSay: 'The dining table is exactly what I was looking for. I love the wood grains, design and finish on the table. The best part of my experience is that a guy from delivery team noticed a slight fading on the table and sort out the issue immediately.',
      clientName: 'Savithri Subramanian',
      clientLocation: 'Mumbai'
    },
    {
      id: 3,
      src : '../../../assets/images/slider/1.jpg',
      clientSay: 'The dining table is exactly what I was looking for. I love the wood grains, design and finish on the table. The best part of my experience is that a guy from delivery team noticed a slight fading on the table and sort out the issue immediately.',
      clientName: 'Savithri Subramanian',
      clientLocation: 'Mumbai'
    }
  ];
  testimonialOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 20,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };
  ngOnInit(): void {
  }
}
