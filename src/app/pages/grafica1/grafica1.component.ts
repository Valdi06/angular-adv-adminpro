import { Component } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100], //conjunto datos 1
  ];

  // Para cambiar los colores, se agrega una linea por cada conjunto de datos
  public colors: Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059'] } //linea colores datos 1
  ];

}
