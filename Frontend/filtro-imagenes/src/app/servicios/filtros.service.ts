import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
private baseUrl: string = 'http://192.168.1.12:8000/Aplicacion/'
  constructor(private http: HttpClient) { }


  processImage(imageFile: File, filterName: string): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('filter', filterName);

    return this.http.post<any>(this.baseUrl, formData);
  }


  // getSmoothFilter(): Observable<any>{
  //   return this.http.get<any>(`${this.baseUrl}/?filter=smooth`)
  // }
}
