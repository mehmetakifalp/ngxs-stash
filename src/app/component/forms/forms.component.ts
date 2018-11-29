import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/action/forms.action';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      line: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required]
    })
  }



  onSubmit(){
    this.store.dispatch(new AddUser()).subscribe((res) => {
      this.userForm.reset();
    })
  }

}
