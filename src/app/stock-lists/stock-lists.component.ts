import { Component, OnInit } from '@angular/core';
import { UserTokenService } from '../Services/user-token.service';

@Component({
  selector: 'app-stock-lists',
  templateUrl: './stock-lists.component.html',
  styleUrls: ['./stock-lists.component.css']
})
export class StockListsComponent implements OnInit {
  foo ="";
  token:any;
  stockData:any;
  constructor(private userToken:UserTokenService) { }

  ngOnInit(): void {
    this.userToken.getUserToken().subscribe(
      (data:any)=>{
        this.token = data.token;
        console.log(data);
      }
    )
  }
  fetchStock(){
    this.userToken.getSearchString(this.foo,this.token).subscribe(
      data=>{
        this.stockData = data;
        console.log(data);
      }
    )
    console.log(this.foo);
  }
  searchData(event:any){
    this.foo = event.target.value;
  }

}
