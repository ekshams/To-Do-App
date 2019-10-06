import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  items: string[] = []
  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
    this.items.push("new item")
  }
  onKeyDown(event){
    if(event.key == "Enter"){
      this.items.push(event.target.value)
      event.target.value = ""      
    }
  }

  removeItem(index){
    this.items.splice(index, 1);
  }

}
