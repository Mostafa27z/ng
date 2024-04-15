import { AbstractControl, ValidationErrors } from "@angular/forms";

export class tex
{
  static nospace(control:AbstractControl):ValidationErrors | null{
    if((control.value as string).indexOf(' ') == -1){
      return null;
    }
    else{
      return {nospace : true};
    }
  }
}
