import { Component, OnInit } from '@angular/core';

export class listObj{
  constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date
  )
  {

  }
}

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.css']
})
export class ListarTodosComponent implements OnInit {

  ListObj =[
    new listObj(1,'alumno 1',false,new Date()),
    new listObj(2,'alumno 2',false,new Date()),
    new listObj(3,'alumno 3',false,new Date())

   /* {id : 1, description : 'alumno 1'},
    {id : 2, description : 'alumno 2'},
    {id : 3, description : 'alumno 3'}*/
  ]
/*
  obj = {
    id : 1,
    description : 'Alumno de la upc'
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
