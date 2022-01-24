import {
  Component,
  HostListener,
  TemplateRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatepickerModalComponent } from './datepicker-modal/datepicker-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  modalRef: BsModalRef;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    window.addEventListener('scroll', this.hideDialog, true);
  }

  hideDialog(): void {
    const d = document.querySelector('bs-datepicker-container');
    if (d) {
      d.remove();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openComponentModal() {
    this.bsModalRef = this.modalService.show(DatepickerModalComponent);
  }
}
