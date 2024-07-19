import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';

interface LabeledPrice {
  label: string,
  amount: number,
}
interface InvoiceData {
  chat_id: number | string,
  message_thread_id?: number,
  title: string,
  description: string,
  payload: string,
  provider_token?: string,
  currency: string,
  prices: Array<LabeledPrice>,
  max_tip_amount?: number,
  suggested_tip_amounts?: Array<number>,
  start_parameter?: string,
}
@Component({
  selector: 'app-ranking-top',
  templateUrl: './ranking-top.component.html',
  styleUrls: ['./ranking-top.component.scss']
})


export class RankingTopComponent implements OnInit {
  

  paymentData: InvoiceData = {
    chat_id: '1231',
    title: 'buy 100 stars',
    description: 'buy 100',
    payload: 'load',
    currency: 'XTR',
    prices: [{label: "one", amount: 100}]
  }
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }


  pay(paymentData: InvoiceData) {
    this.paymentService.sendInvoice(paymentData).subscribe(response => {console.log(response)});
  }

}
