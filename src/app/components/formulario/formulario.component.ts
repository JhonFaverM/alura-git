import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public form: FormGroup
  public user: AbstractControl
  public sub = false

  constructor(
    private formBuilder: FormBuilder ) { 
      this.form = this.formBuilder.group({ 
        user: ['',Validators.required ]
      })
      this.user = this.form.controls['user']
    }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls
  }

  validacion() {
    this.sub = true
    if ( this.form.invalid)
      return
      console.log("formulario validado")
  }
}
