import { Component } from '@angular/core';

@Component({
  selector: 'app-crono',
  standalone: true,
  imports: [],
  templateUrl: './crono.component.html',
  styleUrl: './crono.component.css'
})
export class CronoComponent {
  cont:number = 0;
  isPaused:boolean = true;

  // Se ejecuta al inicio del componente
  ngOnInit(){

  }

  constructor(){
    setInterval(
      ()=>{
        if(!this.isPaused){
          this.cont++
        }
      },
      1000
    )
  }

  play():void{
    this.isPaused=false;
  }
  pause():void{
    this.isPaused=true;
  }
  reset():void{
    this.pause();
    this.cont=0;
  }
}
