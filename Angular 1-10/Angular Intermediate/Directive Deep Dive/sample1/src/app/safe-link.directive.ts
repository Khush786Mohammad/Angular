import { Directive, ElementRef, input, inject} from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective{
    queryParam = input('my-app', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log("SafeLinkDirective is active");
    }

    onConfirmLeavePage(e: MouseEvent){
        const wantsToLeave = window.confirm("Are you sure you want to leave this page?");
        if(wantsToLeave){

            // const address = (e.target as HTMLAnchorElement).href ;
            // (e.target as HTMLAnchorElement).href = address + '?from='+this.queryParam();
            // return ;

            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from='+this.queryParam();
        }
        else{
            e.preventDefault();
        }
    }
}