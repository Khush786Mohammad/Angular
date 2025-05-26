import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModules } from "../shared/shared.modules";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent, TaskComponent, NewTaskComponent],
exports: [TasksComponent],
    imports: [SharedModules, CommonModule, FormsModule]
})

export class TasksModule {

}