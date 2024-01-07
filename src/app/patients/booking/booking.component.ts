import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from './../../common-service.service';
import { MailService } from '../../mail.service';
import { ToastrService } from 'ngx-toastr';
declare const $: any;
declare var moment: any;
declare var daterangepicker: any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit, OnDestroy {
  private scriptElement: HTMLScriptElement | null = null;
  doctorId: any;
  doctorDetails: any;
  userDetails: any;
  public daterange: any = {};

  name: string = '';
  email: string = '';
  usercomment: string = '';

  private startDate: string = '';
  private endDate: string = '';

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  getCurrentDayName() {
    return moment().format('dddd');
  }

  getCurrentDateString() {
    return moment().format('DD MMM YYYY');
  }

  public selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
    alert(value);
  }

  constructor(
    private route: ActivatedRoute,
    public commonService: CommonServiceService,
    public mailService: MailService,
    private toastr: ToastrService,
    private renderer: Renderer2
  ) {}

  ngOnDestroy(): void {
    if (this.scriptElement) {
      this.scriptElement.remove();
    }
  }

  ngOnInit(): void {
    this.scriptElement = this.renderer.createElement(
      'script'
    ) as HTMLScriptElement;
    this.scriptElement.src =
      'https://assets.calendly.com/assets/external/widget.js';
    this.scriptElement.async = true;
    this.renderer.appendChild(document.body, this.scriptElement);

    if ($('.bookingrange').length > 0) {
      let start = moment();
      let end = moment().add(6, 'days');

      this.startDate = start.format('YYYY-MM-DD');
      this.endDate = end.format('YYYY-MM-DD');

      function booking_range(start: any, end: any) {
        $('.bookingrange span').html(
          start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
        );
      }

      $('.bookingrange').daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Tomorrow: [moment().add(1, 'days'), moment().add(1, 'days')],
            'Next 7 Days': [moment(), moment().add(6, 'days')],
            'Next 30 Days': [moment(), moment().add(29, 'days')],
            'This Month': [moment(), moment().endOf('month')],
            'Next Month': [
              moment().add(1, 'month').startOf('month'),
              moment().add(1, 'month').endOf('month'),
            ],
          },
        },
        booking_range
      );

      booking_range(start, end);

      $('.bookingrange').on('apply.daterangepicker', (e: any, picker: any) => {
        this.startDate = picker.startDate.format('YYYY-MM-DD');
        this.endDate = picker.endDate.format('YYYY-MM-DD');
      });
    }

    if (this.route.snapshot.queryParams['id']) {
      this.doctorId = this.route.snapshot.queryParams['id'];
    } else {
      this.doctorId = 1;
    }
    this.getDoctorsDetails();
    this.patientDetails();
  }

  getDoctorsDetails() {
    this.commonService.getDoctorDetails(this.doctorId).subscribe((res) => {
      this.doctorDetails = res;
    });
  }

  patientDetails() {
    let userId;
    userId = localStorage.getItem('id');
    if (!userId) {
      userId = 1;
    }
    this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
      this.userDetails = res;
    });
  }

  sendMessage() {
    if (
      this.name === '' ||
      this.email === '' ||
      this.startDate === '' ||
      this.endDate === ''
    ) {
      this.toastr.error('', 'Please enter mandatory field');
    } else {
      let request =
        'share the available time slots for Healer ' +
        this.doctorDetails.doctor_name +
        ' between dates ' +
        this.startDate +
        ' and ' +
        this.endDate;
      let params = {
        name: this.name,
        message:
          'Please ' + request + '. User optionally wrote: ' + this.usercomment,
        email: this.email,
      };
      this.mailService.send(params).then(
        (response) => {
          this.toastr.success(
            'We have received your request to ' +
              request +
              ' We will get back to you soon'
          );
          this.name = '';
          this.email = '';
          this.usercomment = '';
        },
        (err) => {
          this.toastr.error(
            'There was a problem in sending request to ' + request
          );
        }
      );
    }
  }
}
