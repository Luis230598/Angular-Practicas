import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/interface/Usuario';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formulario = this.formBuilder.group({
    name: '',
    email: '',
    asunto:'',
    direccion:'',
  });

  nombre:string = "";
  email:string = "";
  asunto:string= "";
  direcion:string = "";


  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre = this.formulario.get('name')?.value
  }
}
