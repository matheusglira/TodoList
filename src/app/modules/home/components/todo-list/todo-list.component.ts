import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  taskList: Array<TaskList> = [
    {checked: true, task: "teste"}
  ];

  constructor(){}

  ngOnInit(): void {
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
}
