import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModules } from "./shared/shared.modules";
import { TasksModule } from "./tasks/tasks.modules";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModules, TasksModule]
})

export class AppModules{

}