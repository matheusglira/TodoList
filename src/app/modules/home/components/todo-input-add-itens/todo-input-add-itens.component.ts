import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor() {}

  ngOnInit(): void {
  }

  submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList= "";
    }else{
      window.alert("Digite algo para adicionar!");
    }

  }
}
