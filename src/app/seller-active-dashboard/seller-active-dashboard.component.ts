import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-seller-active-dashboard',
  templateUrl: './seller-active-dashboard.component.html',
  styleUrls: ['./seller-active-dashboard.component.css']
})
export class SellerActiveDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  closeSidebar() {
    $(".page-wrapper").removeClass("toggled");
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }

  submenuToggle(){
    // console.log($(this));
    if($(this).parent().hasClass("active")){ 
      // alert('hello');
      // $(".sidebar-dropdown").removeClass("active");
      // $(this).parent().removeClass("active");
    }else{
      $('this').parent().addClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      // $(".sidebar-dropdown").removeClass("active");
      // $(".sidebar-dropdown > a").next(".sidebar-submenu").slideUp(200);
      
      
    }
  }
  
}



