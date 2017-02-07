import { Injectable } from '@angular/core';
import { Header } from './header';
import { HEADERS } from './mock-headers';
@Injectable()
export class HeaderService {
  getHeaders(): Promise<Header[]> {
    return Promise.resolve(HEADERS);
  }
  getHeader(): Promise<Header> {
    return Promise.resolve(HEADERS[0]);
  }  
}