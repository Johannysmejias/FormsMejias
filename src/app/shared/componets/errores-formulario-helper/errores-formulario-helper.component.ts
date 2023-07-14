import { Component,Input} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-errores-formulario-helper',
  templateUrl: './errores-formulario-helper.component.html',
  styleUrls: ['./errores-formulario-helper.component.css']
})
export class ErroresFormularioHelperComponent {
  @Input()
  formErrors: ValidationErrors | null = null;
}
