import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username==='Carlos' && this.password === 'Castilla'){
      this.invalidLogin = false
      
      // redireccionando a la pag 'welcome'
      this.router.navigate(['welcome',this.username]) //welcone/user
      
    }
    else{
      this.invalidLogin = true
    }
  }

}
