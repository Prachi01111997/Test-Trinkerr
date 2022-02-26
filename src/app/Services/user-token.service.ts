import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: 'applicat'
}
@Injectable({
  providedIn: 'root'
})
export class UserTokenService {
 BaseUrl = "http://3.109.141.224:5000/"
  constructor(private http:HttpClient) { }

  getUserToken(){
   return this.http.get(this.BaseUrl + 'api/user-access-token');
  }

  getSearchString(searchString:any,token:any){
    let headers = new HttpHeaders();
    headers = headers.set('user-access-token',token);
    return this.http.get(this.BaseUrl + 'api/data?search_string='+searchString,{headers});
  }
}
