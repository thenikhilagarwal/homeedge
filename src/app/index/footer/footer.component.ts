import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  instaPort = [
    {src : '../../../assets/images/insta-1.jpg'},
    {src : '../../../assets/images/insta-2.jpg'},
    {src : '../../../assets/images/insta-3.jpg'},
    {src : '../../../assets/images/insta-4.jpg'},
    {src : '../../../assets/images/insta-1.jpg'},
    {src : '../../../assets/images/insta-2.jpg'},
    {src : '../../../assets/images/insta-3.jpg'},
    {src : '../../../assets/images/insta-4.jpg'}
  ];
  animo: number = new Date().getFullYear();
  ngOnInit(): void {
  }

}
