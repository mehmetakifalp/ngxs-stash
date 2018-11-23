import { State, Action, StateContext } from "@ngxs/store";
import { UserForm } from "../model/forms.model";
import { HttpClient } from "selenium-webdriver/http";
import { AddUser } from "../action/forms.action";


export class UserFormStateModel{
  users: UserForm[];
  userForm: any;
}
@State<UserFormStateModel>({
  name: "users",
  defaults: {
    users: [{
        line: 1,
        name: "First Username",
        surname: "First Surname",
        age: 18
    }],
    userForm: {
      model: undefined,
      dirty:false,
      status: '',
      errors: {}
    }
  }
})
export class FormsState{
  constructor(private http: HttpClient){

  }


  @Action(AddUser)
  add({getState, patchState}: StateContext<UserFormStateModel>, {payload}: AddUser){
    const state = getState();
    console.log(payload);
  }


}
