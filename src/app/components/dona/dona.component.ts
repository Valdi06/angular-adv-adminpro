import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = "Sin titulo";

  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100], //conjunto datos 1
  ];

  // Para cambiar los colores, se agrega una linea por cada conjunto de datos
  @Input('colores') colors: Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059'] } //linea colores datos 1
  ];

}
