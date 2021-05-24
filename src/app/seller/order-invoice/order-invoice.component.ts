import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.css']
})
export class OrderInvoiceComponent implements OnInit {
  
  orderId: string;
  invoiceDetails: any = {};
  constructor(
    private router: ActivatedRoute,
    private sellerService: SellerService
  ) { }

  ngOnInit(): void {
    this.orderId = this.router.snapshot.url[1].path;
    this.getInvoiceDetails();
    $(document).ready(function() {
      $('.downloadPDF').on('click', function () {
      });
    });
  }

  getInvoiceDetails() {
    this.sellerService.getInvoiceDetails(this.orderId).subscribe((resp: any) => {
      if (resp.code === 200) {
        this.invoiceDetails = resp['data'];
      }
    })
  }

  totalCalculate(quantity, orderPrice) {
    return quantity * orderPrice;
  }
}
