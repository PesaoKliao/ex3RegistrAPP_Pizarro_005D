import { Component, OnInit } from '@angular/core';
import { GetDatoService } from '../../services/get-dato.service';

@Component({
  selector: 'app-qr-generado',
  templateUrl: './qr-generado.page.html',
  styleUrls: ['./qr-generado.page.scss'],
})
export class QrGeneradoPage implements OnInit {

  public getNumeroClase() {
    return GetDatoService.numero;
  };

  public getCodigoClase() {
    return GetDatoService.codigo;
  };

  public getSala() {
    return GetDatoService.sala;
  };

  constructor() { }

  ngOnInit() {
  }

}
