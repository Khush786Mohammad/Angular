import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({alias: 'appAuth'});
  private templateRef = inject(TemplateRef);
  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef
  ) { 

    effect(()=>{
      if(this.authService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else{
        console.log("Do not show element");
        this.viewContainerRef.clear();
      }
    })
  }

}
