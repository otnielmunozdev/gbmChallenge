import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IPC } from 'src/app/classes/ipc.class';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-table-ipc',
  templateUrl: './table-ipc.component.html',
  styleUrls: ['./table-ipc.component.css']
})
export class TableIPCComponent implements OnInit {

  ipcData: IPC[] = [];
  loader: boolean = true;
  dtOptions: DataTables.Settings = {};

  constructor(private ipcService: IpcService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true,
      info: true,
      paging: true,
    };

    this.getICP();
  }

  getICP() {
    this.ipcService.getIpc().subscribe(ipc => {
      this.ipcData = ipc;
    }, (error) => {
      this.loader = false;
      console.error("Error getIPC", error);
    }, () => {
      this.loader = false;
    });
  }


}
