import { Component, OnInit } from '@angular/core';
import { IPC } from 'src/app/models/ipc.model';
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
    this.ipcService.getIpc().subscribe({
      next: (ipc) => {
        this.ipcData = ipc;
      },
      error: (error) => {
        this.loader = false;
        console.error("Error getIPC", error);
      },
      complete: () => {
        this.loader = false;
      }
    });
  }


}
