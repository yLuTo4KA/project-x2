import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';

interface LabeledPrice {
    label: string,
    amount: number,
}
interface Message {
    message_id: number,
    date: number,
    chat: {id: number, type: string},
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
@Injectable({
    providedIn: 'root',
})


export class PaymentService {
    private apiUrl = "https://api.telegram.org/bot5655959098:AAE1sXjgPON7tGhQGetT9UiDeI6FQccAInI" // + <token>/method

    constructor(private http: HttpClient) { }

    sendInvoice(userData: InvoiceData): Observable<any> {
       return this.http.post<Message>(this.apiUrl + "/createInvoiceLink", userData).pipe(
            tap(response => {
                if(response) {
                    console.log("Payment success!!");
                }
            }),
            finalize(() => { console.log("Payment finallize"); }),
            catchError((error: HttpErrorResponse) => { 
                console.log("Payment closed!");
                return throwError(() => error) 
            }),
        )
    }
}
