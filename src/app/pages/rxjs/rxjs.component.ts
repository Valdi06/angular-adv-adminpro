import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() { 


    // obs$.pipe(
    // this.retornaObservable().pipe(
    //   retry(1) //vuelve a intentar correr el codigo, donde se quedo, no se reinicializan variables a menos que este dentro del obs
    //   //si no se especifica cuantas veces lo debe intentar, lo va a hacer infinitamente
    // ).subscribe(
    //   valor => console.log('Subs:', valor), //next
    //   error => console.warn('Error:', error), //error
    //   () => console.info('Obs terminado') //complete
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

  }

  //Cuando se utiliza, termina el obs cuando cambia de pagina, con el unsubscribe
  // Se recomienda utilizar con obs que siempre estan emitiendo valores
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{

    // const intervalo$ = interval(1000)
    return interval(100)
            .pipe(
              // El orden en que se acomodan los operadores, influye en la salida de los datos
              map( valor => valor + 1),//el map me permite modificar el valor que regresa el obs
              filter(valor => (valor % 2 ===0) ? true : false ), //filtra los datos, permite determinar si se quiere emitir un valor o no de manera condicional
              take(10), //el take me permite decir cuantas veces quiero ejecutar el intervalo
            );

    // return intervalo$;
  }

  retornaObservable(): Observable<number>{
    let i = -1;
    // Opcional: Si hace referencia a un observable que se quiere almacenar
    // se le coloca el simbolo de dollar
    // const obs$ = new Observable<number>( observer =>{
    return new Observable<number>( observer =>{
      
      
      const intervalo = setInterval( () =>{

        i++;
        observer.next(i);

        if(i ===4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2){
          observer.error('i llego al valor de 2');
        }

      },1000)

    });

    // return obs$;
  }


}
