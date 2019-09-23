import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroupName = "form";
  formControls = {
    "userName": "",
    "password": ""
  };

  constructor() { }

  ngOnInit() {
  }
  updateName(form: FormGroup) {
    console.log(form.value);
  }
}
