import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive.form.component.html',
  styleUrls: ['./reactive.form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  invoiceForm: FormGroup;

  constructor( private fb: FormBuilder){

  }

  ngOnInit(){
    this.invoiceForm = this.fb.group({
      items: this.fb.array([this.initRows()])
    })
  }

  initRows(){
    return this.fb.group({
      name: ['']
    })
  }


  newRow(){
    const control = <FormArray>this.invoiceForm.controls['items'];
    control.push(this.initRows())
  }

  deleteRow(){

  }

}
