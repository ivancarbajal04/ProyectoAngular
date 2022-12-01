import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = 'http://localhost:3001'
  items:Item[] = [{
    id: 0,
    title: 'manzana',
    price: 10.5, 
    quantity: 4,
    completed: false
  },
  {
    id: 1,
    title: 'pan',
    price: 3.5, 
    quantity: 8,
    completed: true
  },
  {
    id: 2,
    title: 'pera',
    price: 150, 
    quantity: 2,
    completed: false
  }];
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    // return this.items
    return this.http.get<Item[]>(this.url)
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
