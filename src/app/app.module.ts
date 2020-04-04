import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//router
import { RouterModule, Routes} from '@angular/router';
//
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListarTodosComponent } from './listar-todos/listar-todos.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes=[
  //rutas
  {path:'', component:LoginComponent}, //ruta por defecto de inicio
  {path:'login',component:LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent},
  {path: 'list',component:ListarTodosComponent},
  {path:'**', component:ErrorComponent} // ruta para errores
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ListarTodosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) //esta linea se aumenta Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
