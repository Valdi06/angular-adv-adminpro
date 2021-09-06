import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  // public linkTheme = document.querySelector('#theme');
  // public links!: NodeListOf<Element>;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    // this.checkCurrentTheme();
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){

    // El linkTheme se cambio a la parte de arriba para hacerla una propiedad
    // Se recomienda saltar al DOM la menor cantidad de veces posible
    // Si se hace desde esta funcion, salta cada vez que se hace click, usandolo como propiedad solo salta una vez
    // const linkTheme = document.querySelector('#theme');
    
    // Se refactorizo y se movio a settings.services
  //   const url = `./assets/css/colors/${ theme }.css`
    
  //   this.linkTheme?.setAttribute('href',url);
  //   localStorage.setItem('theme', url);

    this.settingsService.changeTheme(theme);

    // this.checkCurrentTheme();
  }

  // Se refactorizo y se movio a settings.services
  // checkCurrentTheme(){

  //   this.links.forEach( elem =>{
  //     elem.classList.remove('working');
  //     const btnTheme = elem.getAttribute('data-theme');
  //     const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`
  //     const currentTheme = this.linkTheme?.getAttribute('href');

  //     if(btnThemeUrl === currentTheme){
  //       elem.classList.add('working');
  //     }

  //   });

  // }

}
