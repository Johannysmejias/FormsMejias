import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErroresFormularioHelperModule } from '../shared/componets/errores-formulario-helper/errores-formulario-helper.module';


@NgModule({
    declarations: [
        AlumnosComponent
    ],
    exports: [
        AlumnosComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ErroresFormularioHelperModule
    ]
})
export class AlumnosModule { }
