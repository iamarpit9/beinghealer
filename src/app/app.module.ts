import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from "./data.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { LinkService } from "./link.service";
import { PaginationComponent } from './common/pagination/pagination.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from "ngx-google-analytics";
import {StorageService} from "./service/storage.service";

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {CacheControlInterceptor} from "./cache-control.interceptor";
import { AboutUsComponent } from './about-us/about-us.component';
import { RefundComponent } from './refund/refund.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PaginationComponent, AboutUsComponent, RefundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      passThruUnknownUrl: true
    }),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxGoogleAnalyticsModule.forRoot('G-4GPSWTMQXK'),
    NgxGoogleAnalyticsRouterModule, // https://github.com/maxandriani/ngx-google-analytics
    InfiniteScrollModule
  ],
  providers: [LinkService,  StorageService, { provide: HTTP_INTERCEPTORS, useClass: CacheControlInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
