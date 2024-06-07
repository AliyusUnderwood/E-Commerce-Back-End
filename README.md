# E-Commerce-Backend

## Table Of Content
- [General Info](#general-info)
- [Demo](#Demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Github](#Github)

## General Info
We’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application won’t be deployed so I’ll show a walkthrough video that demonstrates its functionality.

## Demo
[![Demo Video](./video/Screenshot%202024-06-06%20224942.png)](./video/2024-06-06%2023-02-48.mp4)

## Technologies
Project is created with:
- Javascript
- Node.js
- Sequelize
- MySQL2
- Express
- Dotenv

## Installation
To get started clone this repository using 
<br>
```terminal
git clone git@github.com:AliyusUnderwood/E-Commerce-Back-End.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
and 
```terminal
use ecommerce_db
```
Then quit MySQL shell and input the following in your terminal
```terminal
npm run seed
```
to start running application simply input 
```terminal
node server.js
```
Open up Insomnia core to GET, POST, PUT and DELETE from different routes.

## Usage
The application is used to GET data for each route(categories, products, or tags) as well as create, update, and delete data in those routes.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Github
[<img src="./video/25231.png" alt="Github Logo" width="75" height="75">](https://github.com/AliyusUnderwood/E-Commerce-Back-End)