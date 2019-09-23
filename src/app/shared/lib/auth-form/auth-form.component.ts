import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input("fg") formGroupName: FormGroup;
  @Input("fc") formControls: any;
  @Output("message") message = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let controls;
    this.formGroupName = this.fb.group({
      userName: [""],
      password: [""]
    });
  }
  
  sendToParent() {
    this.message.emit(this.formGroupName);
  }

}
