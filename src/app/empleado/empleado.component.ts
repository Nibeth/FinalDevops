import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Componente Empleados: ';
    public empleado:Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo:boolean;
    public color: string;
    public color_seleccionado:string;


    constructor(){
        this.empleado= new Empleado('Nibeth Mena', 28, 'Ingeniera', true);
        this.trabajadores =[
            new Empleado('Juan', 30, 'Programador',false),
            new Empleado('Pepe', 25, 'QA',true)
        ];
        this.trabajador_externo= false;
        this. color = 'red';
        this.color_seleccionado= '#ccc';
    }
    ngOnInit(){
       
        console.log(this.trabajadores);
    }

    cambiarExterno(valor: boolean){
        this.trabajador_externo = valor;
    }
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}