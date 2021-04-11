import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  userName: string;
  showSubMenu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  closeSidebar() {
    $(".page-wrapper").removeClass("toggled");
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }

  logout() {
    sessionStorage.setItem('token', '');
    this.router.navigateByUrl('/auth/login');
  }

}
