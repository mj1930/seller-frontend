import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VerificationService } from "../services/verification/verification.service";
@Component({
  selector: 'app-seller-active-dashboard',
  templateUrl: './seller-active-dashboard.component.html',
  styleUrls: ['./seller-active-dashboard.component.css']
})
export class SellerActiveDashboardComponent implements OnInit {

  showSubMenu = false;
  userName = '';

  constructor(private verificationService: VerificationService) { }

  ngOnInit(): void {
this.userName = JSON.parse(localStorage.getItem('user')).name;

  }

  sendVerificationEmail() {
    let reqBody = {
      email: JSON.parse(localStorage.getItem('user')).email
    } 
    this.verificationService.sendVerificationEmail(reqBody).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
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



