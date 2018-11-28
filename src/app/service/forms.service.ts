import { Injectable } from "@angular/core";
import { AppModule } from "../app.module";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: AppModule,
})
export class FormsService{

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient){

  }

  submit(){
    this.http.post(this.apiUrl + 'endpoint', {});
  }
}
