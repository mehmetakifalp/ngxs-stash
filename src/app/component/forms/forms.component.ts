import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { AddUser } from 'src/app/action/forms.action';
import { FormsState } from 'src/app/state/forms.state';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  userForm: FormGroup;

  // @Select(FormsState)


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
