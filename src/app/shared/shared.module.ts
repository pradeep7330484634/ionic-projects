import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthFormComponent } from './lib/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    AuthFormComponent
  ]
})
export class SharedModule { }
