import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VerificationService } from "../verification.service";
import { SellerService } from '../seller.service';
import * as moment from 'moment';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-seller-active-dashboard',
  templateUrl: './seller-active-dashboard.component.html',
  styleUrls: ['./seller-active-dashboard.component.css']
})
export class SellerActiveDashboardComponent implements OnInit {

  showSubMenu = false;
  userName = '';
  mailVerified = false;
  sales = "Today's sale";
  orders = "Today's orders";
  totalAmnt = 0;
  totalOrders = 0;
  orderData = [];
  constructor(
    private verificationService: VerificationService,
    private sellerService: SellerService
  ) { }

  ngOnInit(): void {
    this.mailVerified = localStorage.getItem('verified') ? Boolean(localStorage.getItem('verified')) : false;
    this.sellerService.getUserDetails().subscribe((data: any) => {
      this.getTodaysData();
      this.getMonthData();
      this.mailVerified = data['data'].isEmailVerified;
      this.userName = data['data'].name;
    });

  }

  sentMail = false;
  sendVerificationEmail() {
    let reqBody = {
      email: JSON.parse(localStorage.getItem('user')).email
    };
    this.sentMail = true;
    this.verificationService.sendVerificationEmail(reqBody).subscribe(data => {
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

  submenuToggle() {
    // console.log($(this));
    if ($(this).parent().hasClass("active")) {
      // alert('hello');
      // $(".sidebar-dropdown").removeClass("active");
      // $(this).parent().removeClass("active");
    } else {
      $('this').parent().addClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      // $(".sidebar-dropdown").removeClass("active");
      // $(".sidebar-dropdown > a").next(".sidebar-submenu").slideUp(200);


    }
  }

  getTodaysData() {
    let obj = {
      startDate: moment().startOf('day'),
      endDate: moment().endOf('day')
    }
    this.sellerService.getDataByDate(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orderData = resp.data;
        if (this.orderData?.length) {
          this.calculateTotal();
        }
      }
    })
  }

  calculateTotal() {
    this.totalAmnt = 0;
    this.totalOrders = 0;
    this.orderData.forEach((data: any) => {
      this.totalAmnt += parseInt(data.totalAmnt);
      this.totalOrders += data.products.length
    })
  }

  getWeekData() {
    let obj = {
      startDate: moment().startOf('week'),
      endDate: moment().endOf('week')
    }
    this.sellerService.getDataByDate(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orderData = resp.data;
        this.sales = "Week's Sales";
        this.orders = "Week's Orders";
        if (this.orderData?.length) {
          this.calculateTotal();
          this.createChart();
          this.createChartOrders();
        }
      }
    })
  }

  getMonthData() {
    let obj = {
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    this.sellerService.getDataByDate(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orderData = resp.data;
        this.sales = "Monthly Sales";
        this.orders = "Monthly Orders";
        if (this.orderData?.length) {
          this.calculateTotal();
          this.createChart();
          this.createChartOrders();
        }
      }
    })
  }

  createChart() {
    var ctx = document.getElementById("saleChart") as HTMLCanvasElement;
    let dates = [];
    let orders = [];
    this.orderData.forEach(data => {
      let date = moment(data.createdAt).format("DD/MM/YYYY");
      if (dates.includes(date)) {
        let index = dates.indexOf(date);
        orders[index] += parseInt(data.totalAmnt);
      } else {
        dates.push(date);
        orders.push(parseInt(data.totalAmnt));
      }
    });
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: '# of Sales',
          data: orders,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createChartOrders() {
    var ctx = document.getElementById("orderChart") as HTMLCanvasElement;
    let dates = [];
    let orders = [];
    this.orderData.forEach(data => {
      let date = moment(data.createdAt).format("DD/MM/YYYY");
      if (dates.includes(date)) {
        let index = dates.indexOf(date);
        orders[index] += data.products.length;
      } else {
        dates.push(date);
        orders.push(data.products.length)
      }
    });
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: '# of Orders',
          data: orders,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }
}



