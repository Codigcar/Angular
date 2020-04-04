import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name= ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //obtener el valor de la ruta
   this.name = this.route.snapshot.params['name']
    
  }

}
