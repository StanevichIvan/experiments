import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import Cat from "../models/Cat";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
    apiUrl = 'http://localhost:3000/';
    constructor(private http: HttpClient) {
        console.log('DataService');
    }

    getCats(): Observable<Cat[]> {
     return this.http.get(this.apiUrl)
         .map((data: any[]) => {
             return data.map((cat)=> new Cat(cat));
         });
    }
}
