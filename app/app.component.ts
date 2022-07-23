import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  new:string=""
  items: any =[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData()
    }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/').forEach((data)=>{
      this.items=data;
      let current = this.items
      this.items=current.reverse()
    })
  }


  deleteItem(id:number){
    let currentdata=[]
    for (let item of this.items){
      if (item.id==id){continue}
      currentdata.push(item)
      }
      this.items=currentdata
  }
  addItem(){
    let current=this.items
    let obj = {'userId':0,'id':this.items[0].id+1,'title':this.new,completed:false}
    current.unshift(obj)
    this.items =current

  }
}

