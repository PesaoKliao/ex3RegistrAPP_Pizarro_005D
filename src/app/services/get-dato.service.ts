import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDatoService {
  public static numero: string;
  public static codigo: string;
  public static sala: string;
  public static correo: string;
  public static nombre: string;
  public static email: string;
  constructor() { }
}
