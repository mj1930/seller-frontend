import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.css']
})
export class OrderListingComponent implements OnInit {

  orderStatus: string = "";
  searchTerm: string = '';
  selectedStatus: string = '';
  searchId: string = '';
  orderId: string = '';
  orders: any = [];
  sellerName: any = '';

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
    this.sellerName = JSON.parse(localStorage.getItem('user')).name;
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

  getProductTotal(order) {
    let total = 0;
    order.products.forEach(pr => {
      if (order.mode === 'website')
        total += parseInt(pr.orderPrice) * pr.quantity
      else
        total += pr.price * parseInt(pr.quantity)
    });
    return total;
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
        case 'C' :
        item['status'] = "Cancelled";
          break;
      }
    })
  }

  sortData(event) {
    let obj = {
      key: event.target.value ? event.target.value.split('-')[0] : "null",
      sortBy: event.target.value ? (event.target.value.split('-')[1] === 'asc' ? "1" : "-1") : 0 ,
      skip: 0,
      limit: 100000
    };
    this.sellerService.getSortOrders(obj).subscribe((res: any) => {
      if (res.code === 200) {
        this.orders = res.data;
        this.setOrderStaus();
      }
    });
  }

  sortByStatus(event?) {
    if (!event.target.value) {
      this.getOrder();
      return;
    }
    switch(event.target.value) {
      case 'Pending' :
        event.target.value = "P";
        break;
      case 'Dispatched' :
        event.target.value = "D";
        break;
      case 'Refunded' :
      event.target.value = "RF";
      break;
      case 'Returned' :
      event.target.value = "RT";
      break;
      case 'Delivered' :
        event.target.value = "DL";
      break;
      case 'Cancelled' :
        event.target.value = "C";
      break;
    }
    this.selectedStatus = event.target.value;
    let obj = {
      skip:0,
      limit: 10,
      search: this.searchTerm,
      status: event.target.value
    };
    this.sellerService.getOrdersByStatus(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orders = resp['data'];
        this.setOrderStaus();
      }
    })
  }

  searchOrder() {
    if (!this.searchTerm) {
      this.getOrder();
      return;
    }
    let obj = {
      skip: 0,
      limit: 10,
      status: this.selectedStatus,
      search: this.searchTerm
    };
    this.sellerService.searchProducts(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orders = resp['data'];
        this.setOrderStaus();
      }
    });
  }

  searchOrderById() {
    if (!this.searchId) {
      this.getOrder();
      return;
    }
    let obj = {
      skip: 0,
      limit: 10,
      status: this.selectedStatus,
      orderId: this.searchId,
      search: this.searchTerm ? this.searchTerm : ''
    };
    this.sellerService.searchProductsById(obj).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.orders = resp['data'];
        this.setOrderStaus();
      }
    });
  }

}
