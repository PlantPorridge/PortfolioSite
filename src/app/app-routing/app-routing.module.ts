import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCvComponent } from "../components/full-cv/full-cv.component";
import { HomeComponent } from "../components/home/home.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'cv',
        component: FullCvComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }