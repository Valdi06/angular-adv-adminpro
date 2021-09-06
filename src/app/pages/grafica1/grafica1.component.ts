import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2: string[] = ['Ventas', 'Inventario', 'Pedidos'];
  public data1 = [
    [350, 450, 100], //conjunto datos 1
    [100, 20, 52], //conjunto datos 1
  ];

  public data2 = [
    [400, 150, 30], //conjunto datos 1
  ];

  public colores4 = [
    { backgroundColor: ['#8E44AD','#C0392B','#00FF12'] } //linea colores datos 1
  ];
}
