import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data = [
    {"category": "Living Room", "vendor": "Flexsteel"},
    {"category": "Living Room", "vendor": "Klaussner"},
    {"category": "Living Room", "vendor": "Flexsteel"},
    {"category": "Living Room", "vendor": "Craftmaster"},
    {"category": "Living Room", "vendor": "Craftmaster"}
  ];
  datos = {
    "category": "chavalon", "vendor": "asdasdas"
  }
  filtrar() {
    let listaVendor: any[] = [];
    let listaCategory: any[] = [];
    const vendors = this.data.map(d => {
     listaVendor.push(d.vendor);
     listaCategory.push(d.category);
    });
    const dataFiltrada = this.data.filter((d: any) => d.vendo == null);
    console.log(dataFiltrada);
    //console.log(listaVendor);
    //console.log(listaCategory);
  }
}
