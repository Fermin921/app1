import { Controller, Get, Req, Res,Post, Body, Query, Param} from "@nestjs/common";
import { TaskService } from "./task.service";
import { Request,Response } from "express";
@Controller({})
export class TaskController {

    //Para poder utilizar la funcion del service
    // taskService: TaskService
    // constructor(taskService: TaskService){
    //     this.taskService = taskService;
    // }

    //Otra manera de realizar para utilizar la funcion del service mas simplificada
    constructor(private taskService:TaskService){}
    //Utilizar la sintaxis de express para las respuestas
    // @Get('/response')
    // index(@Req() request:Request, @Res() response:Response){
    //     response.status(200).json({
    //         message:'Respuesta'
    //     });
    // }

    @Get('/task')
    getAllTaskss(){
        return this.taskService.getTasks(); //regresa la funcion que recibimos del service
    }

    // @Get("/task") //Asi se crea una nueva ruta
    // getAllTask() { //Funcion que ejecuta cuando se llama la ruta
    //     return 'Apoco si tilin'
    // }

    //Manera de implementar el decorador post y ademas el preparar para recibir informacion atraves del body de la peticion
    @Post()
    createTask(@Body() task:any){
        return this.taskService.createTask(task); 
    }
    //De esta manera dejamos definido tambien el poder recibir el valor para algun filtrado que se haya agregado dentro de la peticion
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.taskService.getTasks();
    }
    //Manera de implementar el decorador de param, que sera recibido dentro de la peticion asignandole el nombre de id
    //de tipo string y hace uso del service a la funcion obtener tarea y se parsea el parametro a entero ya que la funcion es lo que espera.
    @Get()
    getTask(@Param('id') id:string){
        return this.taskService.getTask(parseInt(id));
    }
}
