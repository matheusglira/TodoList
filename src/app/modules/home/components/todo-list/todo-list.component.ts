import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false})
  }

  public deletarItem(event: number){
    if(window.confirm("Tem certeza que deseja apagar essa tarefa?")){
      this.taskList.splice(event, 1);
    }

  }

  public deletarTudo(){
    if(window.confirm("Tem certeza que deseja deletar todas as tarefas?")){
      this.taskList = [];
    }
  }

  public validationInput(event:string, index: number){
    if(!event.length){
      const confirm = window.confirm("Tarefa vazia, deseja deletar?");

      if(confirm){
        this.deletarItem(index);
      }
    }
  }

}
