import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textOriginal : string = "I am from app-component."

  convertText(textConverted : string){
    this.textOriginal = this.textOriginal == textConverted ? this.textOriginal : textConverted
  }
}
