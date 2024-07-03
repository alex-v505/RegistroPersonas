import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }