import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-datepicker-modal',
  templateUrl: './datepicker-modal.component.html',
  styleUrls: ['./datepicker-modal.component.css'],
})
export class DatepickerModalComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker: BsDatepickerDirective;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  @HostListener('window:scroll') onScrollEvent() {
    this.datepicker.hide();
  }
}
