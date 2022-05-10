import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPC } from '../models/ipc.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(private http: HttpClient) { }

  getIpc(): Observable<IPC[]> {
    return this.http.get<IPC[]>(`${environment.urlAPI}/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e`);
  }
  
}
