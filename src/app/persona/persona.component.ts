import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from '../shared/Model/persona';
import { personaService } from '../shared/Service/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonasComponent implements OnInit {
  errorMessage: string = '';
  listPersonas : any; 
  form : boolean = false;
   persona!: Persona;
   closeResult! : string;

  constructor(private personaService : personaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPersonas();;

    this.persona = {
      id_persona : null,
      cedula : null,
      nombre : null,
      fechaNacimiento : null,
      edad : null
    }
  }

  getAllPersonas(){
    this.personaService.getAllPersonas().subscribe(res => this.listPersonas = res)
  }

  addPersona(persona: Persona) {
    this.personaService.addPersona(persona).subscribe(
      (response) => {
        // Manejar respuesta exitosa
        this.getAllPersonas(); // Recargar la lista de personas
        this.errorMessage = '';
        this.modalService.dismissAll();
      },
      (error) => {
        this.errorMessage = error.error;
      }
    );
  }
  editPersona(persona: Persona) {
    this.personaService.editPersona(persona).subscribe(
      (response) => {
        // Manejar respuesta exitosa
        this.getAllPersonas(); // Recargar la lista de personas
        this.errorMessage = '';
        this.modalService.dismissAll();
      },
      (error) => {
        this.errorMessage = error.error;
      }
    );
  }
  deletePersona(idPersona : any){
    this.personaService.deletePersona(idPersona).subscribe(() => this.getAllPersonas())
  }
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
  cancel(){
    this.form = false;
  }
}