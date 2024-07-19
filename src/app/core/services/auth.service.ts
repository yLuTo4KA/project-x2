import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TelegramService } from './telegram.service';
import { webAppInitData } from '../models/webAppInitData.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  telegramService = inject(TelegramService);
  
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.getToken());

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  token$: Observable<string | null> = this.tokenSubject.asObservable();

  tokenMock: string  = "jJJFSn238dsjfJNSJKDnsfuNJDNSKDNjdfsjkdnmm";
  
  constructor(private http: HttpClient) {
  }

  getInitData(): webAppInitData {
    return this.telegramService.initData();
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggin(): boolean {
    return !!this.getToken();
  }
  
  auth(): void { // Observable
    const userData: any = this.getInitData();
    console.log(userData);
    if(userData && userData.trim() !== "") {
        // return this.http.post<any>("http", {}).pipe()
        this.setToken(this.tokenMock);
    }
    
  }

}
