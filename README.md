# GBM Front-end Developer Challenge

For this challange I created a web application with Angular and Auth0 for the authentication https://auth0.com/docs .
It uses a previously created API of the IPC (Índice de Precios y Cotizaciones) from https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e .
I implemented a datatable with "Angular Datatables" https://l-lin.github.io/angular-datatables/#/welcome , 
and it has a graph with the data, it was created with Plotly JS https://plotly.com/javascript/ .
And Bootstrap https://getbootstrap.com/

# App Versions
Angular CLI: 13.1.4
Node: 14.17.0
Package Manager: npm 6.14.13
Angular: 13.1.3

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.4
@angular-devkit/build-angular   13.1.4
@angular-devkit/core            13.1.4
@angular-devkit/schematics      13.1.4
@angular/cli                    13.1.4
@schematics/angular             13.1.4
rxjs                            7.4.0
typescript                      4.5.5

# Installation

## It is necessary download NodeJS
```shell
`https://nodejs.org/`
```
## Clone the repository

use git clone `https://github.com/otnielmunozdev/gbmChallenge.git` to download the project.
when it finishes go into to the created folder.

## Installation of dependencies

use `npm install` to install the modules that are needed for this project

##  Run the app:

use `ng serve` or if you have problems to run the app you can use 
`node --max_old_space_size=8048 ./node_modules/@angular/cli/bin/ng serve` and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. 

## To build and rise the server:
```shell
`npm run start`
```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
