import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    private task = [];
    getTasks(){
        return ['task', 'task2', 'task3']
    }

    
    createTask(task:any){
        this.task.push(task);
        return task;
    }

    //La funcion que espera el parametro de id que viene dentro de la peticion y para buscarlo dentro de un arreglo de task
    getTask(id:number){
        return this.task.find(task => task.id === id);
    }
}