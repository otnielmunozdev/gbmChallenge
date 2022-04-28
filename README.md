# GBM Front-end Developer Challenge

For this challange I created a web application with `Angular`


It uses a previously created API of the IPC (Índice de Precios y Cotizaciones) from https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e


I implemented a `datatable` with "Angular Datatables" https://l-lin.github.io/angular-datatables/#/welcome


It has a `graph` with the data, it was created with Plotly JS https://plotly.com/javascript/


I implemented a login with `Auth0` for the authentication https://auth0.com/docs
```shell
Important: If you want to see he graph you must be logged in , you can use these credentials or sign up:
- email: gbmchallenge@gmail.com
- password: 123456Ab2@
```


## App Versions
- Angular CLI: 13.1.4
- Node: 14.17.0
- Package Manager: npm 6.14.13
- Angular: 13.1.3
- Bootstrap

Package                         Version
---------------------------------------------------------
- @angular-devkit/architect       0.1301.4
- @angular-devkit/build-angular   13.1.4
- @angular-devkit/core            13.1.4
- @angular-devkit/schematics      13.1.4
- @angular/cli                    13.1.4
- @schematics/angular             13.1.4
- rxjs                            7.4.0
- typescript                      4.5.5

## Installation

### It is necessary download NodeJS
```shell
https://nodejs.org/
```
### Clone the repository

Use git clone `https://github.com/otnielmunozdev/gbmChallenge.git` to download the project.
when it finishes use `cd gbmChallenge`.

### Installation of dependencies

Use `npm install` to install the modules that are needed for this project

###  Run the app:

Use `ng serve` or if you have problems to run the app you can use 
`node --max_old_space_size=8048 ./node_modules/@angular/cli/bin/ng serve` and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. 

### To build and rise the server:
```shell
npm run start

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


