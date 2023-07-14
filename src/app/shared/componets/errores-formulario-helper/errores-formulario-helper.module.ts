import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroresFormularioHelperComponent} from './errores-formulario-helper.component';



@NgModule({
  declarations: [
    ErroresFormularioHelperComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErroresFormularioHelperComponent
  ]
})
export class ErroresFormularioHelperModule { }