import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
Mensaje: string = ''
  constructor( private http: HttpClient) { 
    
  }

  showTitle() {
    const el = document.querySelector('#heroText');
    el?.classList.remove('hideText', 'opacity-0');
  }

  GuardarDatos($event:any){
    $event.preventDefault()
    const scriptURL = 'https://script.google.com/macros/s/AKfycby4plEFs-34L-P02yUIP3hch9oRhOw5fNZZkhqldH-WK6pH4winrfCUhEnCcJy0qPrU/exec'
    const form = document.forms[0];
 
    const datos = new FormData(form)


  this.http
  .post(scriptURL, datos)
  .subscribe({
    next: (response) =>  (this.Mensaje= 'Mensaje Entregado Correctamente!',form.reset()),
    error: (error) => (this.Mensaje= 'Error al Entregar Mensaje!',form.reset()),
  });

   return false
    }


  ngOnInit(): void {
    setTimeout(this.showTitle, 200);
  }


  
   
  



}
