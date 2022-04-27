import { Component, OnInit } from '@angular/core';
import { IPC } from 'src/app/classes/ipc.class';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-table-ipc',
  templateUrl: './table-ipc.component.html',
  styleUrls: ['./table-ipc.component.css']
})
export class TableIPCComponent implements OnInit {

  ipcData:IPC[] = [];
  loader: boolean = true;

  constructor(private ipcService: IpcService) { }

  ngOnInit(): void {
    this.ipcService.getIpc().subscribe( ipc => {
      this.ipcData = ipc;
    },(error)=>{
      console.error("Error getIPC", error);
    },()=>{
      this.loader = false;
    });
  }

}
