import { Component, Input, Output, input, computed, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css' 
})

export class UserComponent{
    // avatar = input.required<string>();
    // name = input.required<string>();
    // ImagePath = computed(()=>{
    //     console.log("ImagePath")
    //     return '../../assets/users/'+this.avatar() ;
    // })
    @Input({required: true}) id!: string;
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;

    @Output() select = new EventEmitter();
 
    get ImagePath(){
        console.log("ImagePath");
        return '../../assets/users/'+this.avatar;
    }
    

    onSelectUser(){
        // this.name = "khush";
        // console.log("clicked");

        this.select.emit(this.id);
    }
}