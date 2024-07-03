import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class personaService {
  readonly API_URL = 'http://localhost:8080';
  
  constructor(private httpClient: HttpClient) { }

  getAllPersonas() {
    return this.httpClient.get(`${this.API_URL}/all-personas`)
  }
  addPersona(persona : any) {
    return this.httpClient.post(`${this.API_URL}/add-persona`, persona)
  }
  editPersona(persona : any){
    return this.httpClient.put(`${this.API_URL}/edit-persona`, persona)
  }
  deletePersona(idpersona : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-persona/${idpersona}`)
  }

}