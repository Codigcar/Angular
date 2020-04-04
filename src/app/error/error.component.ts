import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'ERROR!! ... Mesagge por defecto ante cualquier error ocurrido'

  constructor() { }

  ngOnInit(): void {
  }

}
