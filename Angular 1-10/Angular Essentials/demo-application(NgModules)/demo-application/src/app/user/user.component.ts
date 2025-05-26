import { Component, Input, Output, EventEmitter } from "@angular/core";

type User = {
    id: string;
    avatar: string;
    name: string;
}

@Component({
    selector: 'app-user',
    standalone: false,
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

    // @Input({required: true}) id!: string;
    // @Input({required: true}) avatar!: string;
    // @Input({required: true}) name!: string;
    @Input({required: true}) user !: User;
    @Input({required: true}) selected !: boolean;

    @Output() select = new EventEmitter<string>();

    // select = output<string>();
 
    get ImagePath(){
        console.log("ImagePath");
        return '../../assets/users/'+this.user.avatar;
    }
    
    onSelectUser(){
        this.select.emit(this.user.id);
    }
}