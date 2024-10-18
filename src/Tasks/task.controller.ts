import { Controller, Get} from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})
export class TaskController {

    //Para poder utilizar la funcion del service
    // taskService: TaskService
    // constructor(taskService: TaskService){
    //     this.taskService = taskService;
    // }

    //Otra manera de realizar para utilizar la funcion del service mas simplificada
    constructor(private taskService:TaskService){}

    @Get('/task')
    getAllTasks(){
        return this.taskService.getTask(); //regresa la funcion que recibimos del service
    }

    // @Get("/task") //Asi se crea una nueva ruta
    // getAllTask() { //Funcion que ejecuta cuando se llama la ruta
    //     return 'Apoco si tilin'
    // }
}
