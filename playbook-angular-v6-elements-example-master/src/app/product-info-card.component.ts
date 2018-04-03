import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "./services/data.service";
import Cat from "./models/Cat";

@Component({
    selector: 'product-info-card',
    templateUrl: './product-info-card.component.html',
    styleUrls: ['./product-info-card.component.css']
})
export class ProductInfoCardComponent implements OnInit {
    @Input() product: Product;
    @Output() buy = new EventEmitter();
    cats: Cat[] = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.getCats().subscribe((data) => {
            this.cats = data;
        });
    }
}

export interface Product {
    name: string;
    description: string;
}
