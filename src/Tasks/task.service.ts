import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    getTask(){
        return ['task', 'task2', 'task3']
    }
}