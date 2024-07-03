import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './persona/persona.component';


const routes: Routes =[
  { path: 'home',  component: PersonasComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }