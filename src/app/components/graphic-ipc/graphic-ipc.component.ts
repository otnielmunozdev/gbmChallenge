import { Component, OnInit } from '@angular/core';
import { Graph } from 'src/app/classes/graph.class';
import { IPC } from 'src/app/classes/ipc.class';
import { IpcService } from 'src/app/services/ipc.service';


@Component({
  selector: 'app-graphic-ipc',
  templateUrl: './graphic-ipc.component.html',
  styleUrls: ['./graphic-ipc.component.css']
})
export class GraphicIPCComponent implements OnInit {

  priceMin: number = 0;
  priceMax: number = 0;
  ipcData: IPC[] = [];
  loader: boolean = true;
  time: string[] = [];
  prices: number[] = [];
  graphic: Graph = new Graph();

  constructor(private ipcService: IpcService) { }

  ngOnInit(): void {
    this.getICP();
  }

  getICP() {
    this.ipcService.getIpc().subscribe(ipc => {
      this.ipcData = ipc;
      this.ipcData.forEach((data) => {
        this.time.push(data.date);
        this.prices.push(data.price);
      });
      this.graphicCreate();
    }, (error) => {
      this.loader = false;
      console.error("Error getIPC", error);
    }, () => {
      this.loader = false;
    });
  }

  graphicCreate() {
    this.priceMax = Math.max.apply(null, this.prices);
    this.priceMin = Math.min.apply(null, this.prices);
    const margen = 100;
    let data = [{
      x: this.time,
      y: this.prices,
      fill: 'tonexty',
      fillcolor: '#ffffff61',
      line: {
        color: '#FFF'
      },
      mode: 'lines+points',
      type: 'scatter',
      name: "Price (MXN)"
    }];
    let layout = {
      plot_bgcolor: "#00000036",
      paper_bgcolor: "#00000036",
      xaxis: {
        title: 'Time'
      },
      yaxis: {
        range: [
          this.priceMin - margen,
          this.priceMax + margen
        ],
        title: 'Price',
        name: "dasd"
      },
      shapes: [
        {
          type: 'line',
          xref: 'paper',
          x0: 0,
          y0: this.priceMax,
          x1: 1,
          y1: this.priceMax,
          line: {
            color: '#00c800',
            width: 2.5,
            dash: 'dot'
          }
        },
        {
          type: 'line',
          xref: 'paper',
          x0: 0,
          y0: this.priceMin,
          x1: 1,
          y1: this.priceMin,
          line: {
            color: '#c80000',
            width: 2.5,
            dash: 'dot'
          },
        }
      ],
      showlegend: true,
    };
    this.graphic = {
      data: data,
      layout: layout
    };
  }

}
