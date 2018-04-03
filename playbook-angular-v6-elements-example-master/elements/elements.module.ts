import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProductInfoCardComponent} from '../src/app/product-info-card.component';
import {DataService} from "../src/app/services/data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [ProductInfoCardComponent],
    entryComponents: [ProductInfoCardComponent],
    providers: [DataService]
})
export class ElementsModule {
    ngDoBootstrap() {
    }
}
