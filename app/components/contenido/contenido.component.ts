import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interface/test';




@Component({
  selector: 'contenido-com',
  templateUrl:'./contenido.component.html',
  styleUrls: ['./contenido.component.css']
})



export class contenidoComponent{
  formulario = this.nuevoFormualario.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:''
  });



  usuarios:User[]=[];
  constructor(private nuevoFormualario:FormBuilder){
  }


  CHILLSAVE(){
          let nuevoUser : User = {
              nombre :this.formulario.get('nombre')?.value,
              apellido:this.formulario.get('apellido')?.value,
              email:this.formulario.get('email')?.value,
              telefono:this.formulario.get('telefono')?.value, 
          }
      

          this.usuarios.push(nuevoUser);

          console.log(this.usuarios);
          this.limpiarForm();
  }


  limpiarForm(){
          this.formulario.reset()
      }

}