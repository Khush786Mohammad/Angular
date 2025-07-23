import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContentComponent } from "./content/content.component";
import { CartComponent } from "./content/cart/cart.component";
import { MainContentComponent } from "./content/main-content/main-content.component";
import { SideMenuComponent } from "./content/side-menu/side-menu.component";

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: ContentComponent, title: "Nike. Just Do It.",
        children: [
            { path: '', outlet: 'sidebar', component: SideMenuComponent },
            { path: '', outlet: 'main', component: MainContentComponent },
        ]
     }, 
    { path: 'cart', component: CartComponent, title: "Cart. Nike Store" }, 
    { path: '**', component: NotFoundComponent}
];