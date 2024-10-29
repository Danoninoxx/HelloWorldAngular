import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required:true})
  text:string = "Ejemplo";
  @Input()
  color:string = 'success';

  @Output()
  presionar = new EventEmitter<any>();

  emitirEvento(){
    this.presionar.emit({dato:3,frase:"hola"});
  }
}
