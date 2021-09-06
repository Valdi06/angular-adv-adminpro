import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.linkTheme?.setAttribute('href',url);
  }

  changeTheme(theme: string){

    // Se cambio a la parte de arriba para hacerla una propiedad
    // Se recomienda saltar al DOM la menor cantidad de veces posible
    // Si se hace desde esta funcion, salta cada vez que se hace click, usandolo como propiedad solo salta una vez
    // const linkTheme = document.querySelector('#theme');
    
    const url = `./assets/css/colors/${ theme }.css`
    
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    links.forEach( elem =>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }

    });

  }
}
