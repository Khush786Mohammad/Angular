import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

function logginInterceptor(req: HttpRequest<unknown>,next: HttpHandlerFn){
    // const req2 = req.clone({
    //     headers: req.headers.set('Authorization','Bearer abc')
    // });
    // return next(req2);
    console.log("Outgoing Request");
    console.log(req);
    return next(req);
}

bootstrapApplication(AppComponent,{
    providers:[provideHttpClient(
        withInterceptors([logginInterceptor])
    )]
}).catch((err) => console.error(err));
