import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  resultado = "Esperando que se ingrese datos...."
  urlImage="https://images7.memedroid.com/images/UPLOADED496/61ef2e4eb3cf3.jpeg"
  mostraMensaje = false;
  formIMC= {
    talla: null,
    peso: null
  }
  pacienteList: Paciente = []
  calcularImc():void{
    let tallam= Number(this.formIMC.talla) / 100
    let valorImc= Number(this.formIMC.peso) / (tallam * tallam)
    var diagnostico=""
    if(valorImc <= 18.5){
      diagnostico="peso inferior"
    }
    else if(valorImc <=24.9){
      diagnostico="peso normal"
    }
    else if(valorImc <=29.9){
      diagnostico = "sobrepeso"
    }
    else if(valorImc <=34.9){
      diagnostico = "obesidad"
    }
    else{
      diagnostico = "obesidad extrema"
    }
    this.resultado= "Su imc es:" +valorImc.toFixed(2).toString()+","+diagnostico
    this.pacienteList.push({
      id: this.pacienteList.length +1,
      valor: valorImc.toFixed(2).toString(),
      diagnostico:diagnostico
    })
    //console.log(this.pacienteList);
    this.mostraMensaje = true;
  }

}
type Paciente = Array<{id: number, valor:string, diagnostico:string}>
