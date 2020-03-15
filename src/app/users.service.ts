import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  app_url = 'http://10.2.39.217:5000/application';
  register_Url = 'http               ://10.2.39.217:5000:5000/register';

  constructor(private http: HttpClient) { }


    public PostApplication(application) 
    {
      return this.http.post<any>(this.app_url, application, {});
    }

    public registerUser(user)
    {
      return this.http.post<any>(this.register_Url, user, {});
    }
  }
