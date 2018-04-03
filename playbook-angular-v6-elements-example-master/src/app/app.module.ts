import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ProductInfoCardComponent} from './product-info-card.component';
import {DataService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        ProductInfoCardComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
