import { map } from 'rxjs/operators';
import { Store } from './../../todo.store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;
  
  constructor(private taskService: TasksService, private store: Store) {}
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {  
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado))
    );
    this.subscription = this.taskService.getTodoList$.subscribe();   
  }  

  onToggle(event: any) {
    this.taskService.toggle(event);
  }
}
