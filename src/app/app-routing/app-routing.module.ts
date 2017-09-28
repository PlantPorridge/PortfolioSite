import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCvComponent } from "../components/full-cv/full-cv.component";
import { HomeComponent } from "../components/home/home.component";
import { ProjectsComponent } from '../components/projects/projects.component';
import { FormatPipeDemoComponent } from '../components/projects/demos/format-pipe-demo/format-pipe-demo.component';

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
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'projects/formatpipedemo',
        component: FormatPipeDemoComponent,
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