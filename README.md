<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=300&color=0:00C6FF,50:0072FF,100:7F00FF&text=Customer%20Feedback%20System&fontSize=45&fontAlignY=35&fontColor=ffffff&animation=fadeIn"/>

# 💬 Customer Feedback Management System

### 🚀 A Professional RESTful CRUD API Built With Node.js & Express.js

<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=25&duration=2500&pause=800&color=00F7FF&center=true&vCenter=true&width=850&lines=Customer+Feedback+Management;Express.js+REST+API;CRUD+Operations;Backend+Development;Node.js+Portfolio+Project"/>

<br/>

<img src="https://skillicons.dev/icons?i=nodejs,express,javascript,git,github,vscode"/>

<br/><br/>

<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/CRUD-Operations-purple?style=for-the-badge"/>

</div>


# 🌟 Project Overview

Customer Feedback Management System is a backend REST API application developed using **Node.js and Express.js**.

The application provides a simple and efficient platform where customers can submit feedback and administrators can manage feedback records using CRUD operations.

This project demonstrates real-world backend development concepts including:

- REST API Architecture
- Express.js Routing
- HTTP Request Handling
- CRUD Operations
- JSON Data Management
- Server-Side Programming


---

# 🎯 Project Highlights

⭐ Clean Express.js API Structure  
⭐ Complete CRUD Functionality  
⭐ Lightweight Backend Application  
⭐ RESTful Endpoint Design  
⭐ Beginner-Friendly Production Structure  
⭐ Easy Integration With Frontend Applications  


---

# ✨ Features

## 📝 Create Feedback

Users can submit customer feedback through a simple form.

## 📋 Read Feedback

Admin can retrieve all submitted feedback records.

## ✏️ Update Feedback

Existing feedback can be modified using API requests.

## 🗑 Delete Feedback

Feedback records can be removed from the system.

## ⚡ Express Backend

Fast and efficient server handling using Express.js.

## 🌐 REST API

Structured API endpoints following REST principles.


---

# 🏗️ System Architecture


```text

                  👤 CUSTOMER

                      |
                      |
                      ▼


              ╔══════════════╗
              ║   EXPRESS    ║
              ║    SERVER    ║
              ╚══════════════╝


                      |
        ┌─────────────┼─────────────┐

        ▼             ▼             ▼


     CREATE          READ        UPDATE


        |             |             |


        └─────────────┼─────────────┘

                      ▼


                 DELETE DATA


                      |
                      ▼


            📦 Feedback Storage


```


---

# 🛠️ Technology Stack


## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| JavaScript | Programming Language |


## Development Tools

| Tool | Usage |
|---|---|
| VS Code | Code Editor |
| Thunder Client | API Testing |
| Git | Version Control |
| GitHub | Repository Hosting |


---

# 📂 Project Structure


```bash
feedback-app/

│
├── index.js              # Main Express Server
│
├── package.json          # Project Configuration
│
└── README.md             # Documentation

```


---

# ⚙️ Installation & Setup


## Step 1: Clone Repository


```bash
git clone https://github.com/anushka-mulik/feedback-app.git

cd feedback-app
```


---

## Step 2: Install Dependencies


```bash
npm install
```


---

## Step 3: Start Application


```bash
node index.js
```


---

## Server Running


```
http://localhost:3000
```


---

# 🌐 Application Routes


## 🏠 Home Page


### GET

```
/
```


Displays:

```
Customer Feedback Form

Name Field

Message Field

Submit Button

Admin Feedback Link
```


---

# 🔥 API Documentation


# 1️⃣ Create Feedback


## POST Request


```
/feedback
```


### Request Body


```json
{
    "name":"Anushka",
    "message":"Excellent service!"
}
```


### Response


```json
{
    "message":"Feedback Submitted Successfully"
}
```


---

# 2️⃣ Get All Feedback


## GET Request


```
/admin
```


### Response


```json
[
    {
        "id":1,
        "name":"Anushka",
        "message":"Excellent service!"
    }
]
```


---

# 3️⃣ Update Feedback


## PUT Request


```
/feedback/:id
```


Example:


```
PUT /feedback/1
```


### Request Body


```json
{
    "name":"Updated User",
    "message":"Updated Feedback"
}
```


### Response


```json
{
    "message":"Feedback Updated",
    "feedback":{
        "id":1
    }
}
```


---

# 4️⃣ Delete Feedback


## DELETE Request


```
/feedback/:id
```


Example:


```
DELETE /feedback/1
```


### Response


```json
{
    "message":"Feedback Deleted"
}
```


---

# 🔄 CRUD Flow


```text

        USER

          |
          ▼

  Submit Feedback

          |
          ▼

 Express Route Handler

          |
          ▼

 Process Request

          |
          ▼

 Feedback Array Storage

          |
          ▼

 +----------------+

 | CRUD Actions   |

 +----------------+

 CREATE

 READ

 UPDATE

 DELETE

```


---

# 🧪 API Testing


The API can be tested using:


✅ Thunder Client

✅ Postman


Example Requests:


## Create

```
POST http://localhost:3000/feedback
```


## Read

```
GET http://localhost:3000/admin
```


## Update

```
PUT http://localhost:3000/feedback/1
```


## Delete

```
DELETE http://localhost:3000/feedback/1
```


---

# 📊 Skills Demonstrated


| Skill | Implementation |
|---|---|
| Node.js | Backend Runtime |
| Express.js | Server Development |
| REST API | API Design |
| CRUD | Data Operations |
| JavaScript | Application Logic |
| HTTP Methods | API Communication |
| Git | Version Control |


---

# 🚀 Future Enhancements


## Database

- MongoDB Integration
- Mongoose Models
- Persistent Storage


## Security

- User Authentication
- JWT Authorization
- Input Validation


## Features

- Admin Dashboard
- Feedback Search
- Pagination
- Rating System
- Email Notifications


## Deployment

- Docker Support
- Cloud Hosting
- CI/CD Pipeline


---

# 💡 Why This Project?


This project represents the foundation of backend API development.

It demonstrates how modern web applications handle:

- User input
- Server requests
- Data processing
- API communication
- CRUD workflows


---

# 👨‍💻 Author


## Anushka Mulik

Backend Developer | Node.js Enthusiast


Passionate about creating scalable, secure, and efficient backend applications.


---

<div align="center">


# ⭐ Support This Project


If you found this project useful, consider giving it a star ⭐


### Built With ❤️ Using Node.js + Express.js


<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer"/>


</div>
