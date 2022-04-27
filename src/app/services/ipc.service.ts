import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPC } from '../classes/ipc.class';


@Injectable({
  providedIn: 'root'
})
export class IpcService {

  url = "https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e";

  constructor(private http: HttpClient) { }


  getIpc(): Observable<IPC[]> {
    return this.http.get<IPC[]>(this.url);
  }
}
