export class Graph {
    "data": Datum[];
    "layout": Layout;
  }
  
  export interface Layout {
    xaxis: Xaxis;
    yaxis: Yaxis;
    shapes: Shape[];
  }
  
  export interface Shape {
    type: string;
    xref: string;
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    line: Line2;
  }
  
  export interface Line2 {
    color: string;
    width: number;
    dash: string;
  }
  
  export interface Yaxis {
    range: number[];
    title: string;
  }
  
  export interface Xaxis {
    title: string;
  }
  
  export interface Datum {
    x: string[];
    y: number[];
    fill: string;
    fillcolor: string;
    line: Line;
    mode: string;
    type: string;
  }
  
  export interface Line {
    color: string;
  }