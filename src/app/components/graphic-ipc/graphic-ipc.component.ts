import { Component, OnInit } from '@angular/core';
import { Graph } from 'src/app/models/graph.model';
import { IPC } from 'src/app/models/ipc.model';
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
  fill: string = "tonexty";
  fillColor: string = "#ffffff61";
  lineColor: string = "#FFF";
  modeGraph: string = 'lines+points';
  typeGraph: string = 'scatter';
  nameDataGraph: string = "Price (MXN)";
  bgColorLayout: string = "#00000036";
  layoutXTitle: string = 'Time';
  layoutYTitle: string = 'Price';
  layoutShapesType: string = 'line';
  layoutShapesXref: string = 'paper';
  shapeLine1X0: number = 0;
  shapeLine1X1: number = 1;
  shapeLine2X0: number = 0;
  shapeLine2X1: number = 1;
  widthLine1: number = 2.5;
  widthLine2: number = 2.5;
  shapeLine1Color: string = '#00c800';
  shapeLine2Color: string = '#c80000';
  shapeLine1Dash: string = 'dot';
  shapeLine2Dash: string = 'dot';

  constructor(private ipcService: IpcService) { }

  ngOnInit(): void {
    this.getICP();
  }

  getICP() {
    this.ipcService.getIpc().subscribe({
      next: (ipc) => {
        this.ipcData = ipc;
        this.ipcData.forEach((data) => {
          this.time.push(data.date);
          this.prices.push(data.price);
        });
        this.graphicCreate();
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

  graphicCreate() {
    this.priceMax = Math.max.apply(null, this.prices);
    this.priceMin = Math.min.apply(null, this.prices);
    const margen = 100;
    let data = [{
      x: this.time,
      y: this.prices,
      fill: this.fill,
      fillcolor: this.fillColor,
      line: {
        color: this.lineColor
      },
      mode: this.modeGraph,
      type: this.typeGraph,
      name: this.nameDataGraph
    }];
    let layout = {
      plot_bgcolor: this.bgColorLayout,
      paper_bgcolor: this.bgColorLayout,
      xaxis: {
        title: this.layoutXTitle
      },
      yaxis: {
        range: [
          this.priceMin - margen,
          this.priceMax + margen
        ],
        title: this.layoutYTitle,
      },
      shapes: [
        {
          type: this.layoutShapesType,
          xref: this.layoutShapesXref,
          x0: this.shapeLine1X0,
          y0: this.priceMax,
          x1: this.shapeLine1X1,
          y1: this.priceMax,
          line: {
            color: this.shapeLine1Color,
            width: this.widthLine1,
            dash: this.shapeLine1Dash
          }
        },
        {
          type: this.layoutShapesType,
          xref: this.layoutShapesXref,
          x0: this.shapeLine2X0,
          y0: this.priceMin,
          x1: this.shapeLine2X1,
          y1: this.priceMin,
          line: {
            color: this.shapeLine2Color,
            width: this.widthLine2,
            dash: this.shapeLine2Dash
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
