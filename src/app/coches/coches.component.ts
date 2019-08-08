import {Component} from '@angular/core'
import {Coche} from './coche';
import { FormsValidationService } from '../forms-validation.service';

@Component({

    selector: 'coches',
    templateUrl: './coches.component.html'

})

export class CochesComponent{
    public coche: Coche;
    public coches: Array <Coche>;

    constructor(private validationService: FormsValidationService){
        this.coche= new Coche("",0,"");
        this.coches=[
            new Coche("Seat Panda", 120,"Rojo"),
            new Coche("Toyota", 210, "Verde")
        ];
    }

    onSubmit(){
        console.log(this.coche);
    }

    validateCaballaje() {

        console.log(this.coche.caballaje);
        return this.validationService.validateNumber(this.coche.caballaje);
    }
}