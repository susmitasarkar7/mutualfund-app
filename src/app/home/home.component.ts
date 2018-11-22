import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isCollasped : boolean = true;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;  
  }
  
  onSignup(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const pan = form.value.pan;
    const password = form.value.password;
    const confirmpassword = form.value.confirmpassword;
    const bankname = form.value.bankname;
    const bankacno = form.value.backacno;  
  }

  // toggleCollape() {
  //   this.isCollasped = !this.isCollasped;
  // }

  openModal(id: string) {
    this.modalService.open(id);
}

  closeModal(id: string) {
    this.modalService.close(id);
}
}
