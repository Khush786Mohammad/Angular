import { Component, Input, input, computed } from "@angular/core";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css' 
})

export class UserComponent{
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;

    get ImagePath(){
        console.log("ImagePath");
        return '../../assets/users/'+this.avatar;
    }
    
    // avatar = input.required<string>();
    // name = input.required<string>();
    // ImagePath = computed(()=>{
    //     console.log("ImagePath")
    //     return '../../assets/users/'+this.avatar() ;
    // })

    onSelectUser(){
        this.name = "khush";
        console.log("clicked");
    }
}