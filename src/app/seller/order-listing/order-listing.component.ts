import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent implements OnInit {

  orders: any = [];

  orderStatuses = [
    {text: 'Pending', value: 'P'},
    {text: 'Dispatched', value: 'D'},
    {text: 'Delivered', value: 'DL'},
    {text: 'Refunded', value: 'RF'},
    {text: 'Cancelled', value: 'C'},
    {text: 'Returned', value: 'RT'}
  ];

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    let reqBody = {
      skip:"0",
      limit: "100"
    };
    this.sellerService.getOrder(reqBody).subscribe(data => {
      this.orders = data['data'];
      this.setOrderStaus();
    }, error => {
      console.log(error);
    })
  }

  updateStatus(id, event) {
    let reqBody = {
      orderId: id,
      status: event.target.value
    }
    this.sellerService.updateStatus(reqBody).subscribe(data => {
     this.getOrder();

    }, error => {
      console.log(error);
    })
  }

  setOrderStaus() {
    this.orders.forEach(item => {
      switch(item.orderStatus ) {
        case 'P' :
          item['status'] = "Pending";
          break;
        case 'D' :
          item['status'] = "Dispatched";
          break;
          case 'RF' :
          item['status'] = "Refunded";
          break;
          case 'RT' :
          item['status'] = "Returned";
          break;
          case 'DL' :
          item['status'] = "Delivered";
          break;
      }
      
    })
  }

}
