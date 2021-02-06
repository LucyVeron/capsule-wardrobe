import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public colors = ['cool', 'neutral', 'warm'];
  public selectedColor: string;
  public styles = [
    {name: 'CHIC', credit: 'Photo by Gilbert Anthony from Pexels', path: '../assets/images/chic.jpg'},
    {name: 'STREET', credit: 'Photo by RODNAE Productions from Pexels', path: '../assets/images/street.jpg'},
    {name: 'VINTAGE', credit: 'Photo by Labskiii from Pexels', path: '../assets/images/vintage.jpg'}
  ];
  public selectedStyle: string;
  public colorFormGroup: FormGroup;

  constructor() {}

}