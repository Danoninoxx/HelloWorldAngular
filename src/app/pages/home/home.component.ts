import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { task } from '../../model/task';
import { timestamp } from 'rxjs';
import { CreateTaskComponent } from '../../components/create-task/create-task.component';
import { LocalDBService } from '../../services/local-db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  db = inject(LocalDBService);

  todo:task[]=[];

  ngOnInit(){
    this.todo = this.db.load();
  }

  addTask(newTask:task){
    this.todo.push(newTask);
    this.db.save(this.todo);
  }

  removeTask(id:number|undefined){
    if(!id) return; // validación opcional
    if(!confirm("¿Deseas borrar esta tarea?")) return;
    this.todo=this.todo.filter(t=>t.id!=id);
    this.db.save(this.todo);
  }

  editTask(id: number | undefined, updatedTask: { title?: string, description?: string }) {
    if (!id) return;
    // Busca la tarea con el ID dado
    const taskIndex = this.todo.findIndex(t => t.id === id);
    if (taskIndex === -1) return;
    this.todo[taskIndex] = {
        ...this.todo[taskIndex], // Mantiene los datos actuales
        ...updatedTask         // Sobrescribe los datos actualizados
    };
    this.db.save(this.todo);
  }

  inputEdit(taskId: number | undefined) {
    const userInput = prompt("Introduce el nuevo título de la tarea:");
    if (userInput) {
        this.editTask(taskId, { title: userInput });
    }
  }
}
