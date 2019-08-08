import{ Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
    
})
export class FrutaComponent{
    public nombre_componente='Componente de fruta';
    public listado_frutas = 'Naranjas, Manzanas, Pera y Limon';
    public nombre:string = 'Nibeth';
    public edad: number = 25;
    public mayorDeEdad: boolean= false;
    public trabajo: Array<any> = ['Carpintero', 'Ingeniera','Docente'];
    comodin:any = 'Cualquier cosa '

constructor(){
    this.nombre = 'Nibeth Mena';
    this.edad = 25;
    this.mayorDeEdad= false;
    this.comodin= "SI";
    
}
ngOnInit(){
    this.cambiarNombre();
    //alert(this.nombre);
    //Variables y alcance
    var uno = 8;
    var dos =15;
    if (uno === 8){
        let uno = 3;
        var dos = 88;
        console.log ('DENTRO DEL IF:' + uno + " "+ dos);
    }
    console.log ('FUERA DEL IF:' + uno + " "+ dos);
}
cambiarNombre(){
    this.nombre='Nibecita';
}
}