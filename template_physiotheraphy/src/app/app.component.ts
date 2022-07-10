import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
  AfterViewChecked,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Location } from '@angular/common';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'doccur';
  url:any;
  loadFooter = false;
  show: boolean = true;
  hideFooter: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public Router: Router,
    location: Location,
    public commonServic: CommonServiceService
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url == '/login' ||
          event.url == '/forgot-password' ||
          event.url == '/Register' ||
          event.url == '/login-page' ||
          event.url == '/doctor-register' 
        ) {
          document.body.classList.add('account-page');
          document.body.classList.remove('mat-typography');
          if (event.url == '/login') {
            this.Router.navigateByUrl('/login');
          }
        } else {
          document.body.classList.remove('account-page');
          document.body.classList.add('mat-typography');
        }
        if (event.url == '/map-grid') {
          this.hideFooter = true;
        }
        if (event.url == '/map-list') {
          this.hideFooter = true;
        }
        
        if (event.url == '/map-grid' || event.url == '/map-list') {
          document.body.classList.add('map-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('map-page');
          document.body.classList.add('mat-typography');
        }
        if (event.url == '/video-call' || event.url == '/voice-call') {
          document.body.classList.add('call-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('call-page');
          document.body.classList.add('mat-typography');
        }
        if (event.url == '/doctor/message' || event.url == '/patients/chat') {
          document.body.classList.add('chat-page');
          document.body.classList.remove('mat-typography');
        } else {
          document.body.classList.remove('chat-page');
          document.body.classList.add('mat-typography');
        }
      }
    });
    this.url = location.path();
    this.show = this.url.includes('admin') ? false : true;
    this.commonServic.message.subscribe((res) => {
      if (res === 'admin') {
        this.show = false;
        this.hideFooter = true;
      } else if (res === 'main') {
        this.show = true;
        this.hideFooter = false;
      } else if (res === 'chat') {
        this.show = true;
        this.hideFooter = true;
      } else {
        this.show = true;
        this.hideFooter = false;
      }
    });
  }

  ngOnInit() {
    setTimeout(() => (this.loadFooter = true), 2000);
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
