import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteLogo = '../../../assets/images/logo.webp';
  userIcon = '../../../assets/images/icons/user.svg';
  wishlistIcon = '../../../assets/images/icons/heart.svg';
  cartIcon = '../../../assets/images/icons/cart.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
