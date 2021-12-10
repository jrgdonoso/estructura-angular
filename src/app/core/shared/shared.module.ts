import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { NotFoundComponent } from './components/not-found.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        MatTabsModule
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        NotFoundComponent,
        RouterModule,
        MatTabsModule
    ],
    providers: []
})

export class SharedModule{
    constructor(){}
}