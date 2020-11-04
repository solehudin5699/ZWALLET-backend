<h1 align="center">Zwallet App - Backend</h1>

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

Adjust `name_database`, `email_service`, `email_for_send_OTP` and
`password_email_for_send_OTP` with email that you used.

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

## Related Project

Frontend Zwallet App that use this RESTful API.

<a href="https://github.com/solehudin5699/ZWALLET-frontend.git">
<img src="https://img.shields.io/badge/Zwallet%20Frontend-Repository-blue.svg?style=popout&logo=github"/>
</a>
