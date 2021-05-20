import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  isSellerVerified: boolean = false;
  userName: string;
  showSubMenu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let userData =JSON.parse(localStorage.getItem('user'));
    this.userName = userData.name;
    this.isSellerVerified = userData.isVerified;
  }

  closeSidebar() {
    $(".page-wrapper").removeClass("toggled");
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigateByUrl('/auth/login');
  }

}
