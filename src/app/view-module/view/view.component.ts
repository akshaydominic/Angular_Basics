import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Username:string = "";
  response:any;

  constructor(private http:HttpClient) {
   

   }

  ngOnInit(): void {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.Username).subscribe((response)=>
    { 
      this.response = response;
      console.log(response);
    }) 
  }

}
