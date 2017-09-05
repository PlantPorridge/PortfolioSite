import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCvComponentComponent } from "../components/full-cv-component/full-cv-component.component";

const routes: Routes = [
    {
        path: '',
        component: FullCvComponentComponent,
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