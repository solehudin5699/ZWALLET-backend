<h1 align="center">Zwallet App - Backend</h1>

<div align="center">
    <img width="250" src="https://raw.githubusercontent.com/solehudin5699/ZWALLET-frontend/master/src/assets/images/ic_launcher_round.png">
</div>

## Contents

- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Endpoint](#endpoint)
- [Documentation](#documentation)
- [Related Project](#related-project)

## Description

This is RESTful api design for
[`Zwallet App frontend`](https://github.com/solehudin5699/ZWALLET-frontend.git).
Built with Node js, using ExpressJs framework and other libraries.

## Requirements

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`ExpressJs`](https://expressjs.com/)
- [`Postman`](https://www.postman.com/downloads/)
- [`XAMPP`](https://www.apachefriends.org/index.html)

## Installation

1. Open your terminal or command prompt
2. Type `git clone https://github.com/solehudin5699/ZWALLET-backend.git`
3. Open the folder and type `npm install` for install dependencies
4. If you haven't installed nodemon, please install it globally, type
   `npm install -g nodemon`
5. Create database such as named **_zwallet_db_** and import database
   **zwallet_db.sql** in folder sql to your new database
6. Create file **_.env_** in root folder with the following contents :

```bash
DB_HOST = 'localhost'
DB_USERNAME = 'root'
DB_DATABASE = 'name_database'
DB_PASSWORD = ''

PORT = 8000
PORT_SOCKET=8001
NODEMAILER_PORT=465
NODEMAILER_EMAIL_SERVICE='email_service'
NODEMAILER_EMAIL_USER='email_for_send_OTP'
NODEMAILER_EMAIL_PASSWORD='password_email_for_send_OTP'
SECRET_KEY='ZwAllEt'
```

Customize `name_database`, `email_service`, `email_for_send_OTP` and
`password_email_for_send_OTP` with the one you are using.

Example:

```bash
DB_HOST = 'localhost'
DB_USERNAME = 'root'
DB_DATABASE = 'zwallet_db'
DB_PASSWORD = ''

PORT = 8000
PORT_SOCKET=8001
NODEMAILER_PORT=465
NODEMAILER_EMAIL_SERVICE='gmail'
NODEMAILER_EMAIL_USER='yourname@gmail.com'
NODEMAILER_EMAIL_PASSWORD='my-email-password'
SECRET_KEY='ZwAllEt'
```

7. Run XAMPP control panel
8. Type `npm run server` or `npm start` in terminal for run this backend.

## Endpoint

### Authentication Router

| No. | Method |      Endpoint      |
| :-: | :----: | :----------------: |
|  1  |  POST  | /auth/registration |
|     |        |    /auth/login     |
|     |        |   /auth/validate   |
|     |        |    /auth/reset     |
|  2  |  GET   |   /auth/user/:id   |
|  3  | PATCH  |  /auth/update/:id  |

### Contact Router

| No. | Method | Endpoint |
| :-: | :----: | :------: |
|  1  |  GET   | /contact |

### Transaction Router

| No. | Method |     Endpoint     |
| :-: | :----: | :--------------: |
|  1  |  POST  |   /transaction   |
|  2  |  GET   | /transaction/:id |

## Documentation

Check out the documentation here for your convenience.

<a href="https://documenter.getpostman.com/view/11765677/TVYNYvQ5">
<img src="https://img.shields.io/badge/Documentation-POSTMAN-blue.svg?style=popout&logo=postman"/>
</a>

## Related Project

Frontend Zwallet App that use this RESTful API.

<a href="https://github.com/solehudin5699/ZWALLET-frontend.git">
<img src="https://img.shields.io/badge/Zwallet%20Frontend-Repository-blue.svg?style=popout&logo=github"/>
</a>
