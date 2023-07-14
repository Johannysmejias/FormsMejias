import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnosForm : FormGroup;
  alumnos: any [] =[];

  nombreControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
    ]);

  apellidoControl = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    
  ]);

  emailConfirmaControl = new FormControl('',[
    Validators.required,
    Validators.email,
    this.MustMatch('_', '_')
  ]
  );

  constructor(){
    
    this.alumnosForm = new FormGroup({
      nombre:this.nombreControl,
      apellido:this.apellidoControl,
      email:this.emailControl,
      emailConfirma:this.emailConfirmaControl,
    }
    )

  }
  
  get f() { return this.alumnosForm.controls; }


  onsubmmit(): void{
    if (this.alumnosForm.valid) {
      this.alumnos.push(this.alumnosForm.value);
      this.alumnosForm.reset();
    } else {
      this.alumnosForm.markAllAsTouched()
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control =this.emailConfirmaControl ;
        const matchingControl = this.emailControl;

        if (!control || !matchingControl) {
          console.log(control?.value+"      "+matchingControl?.value);
          return null;
        }

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          return null;
        }
        
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
        return null;
    }
}
}
