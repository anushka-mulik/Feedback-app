# Feedback-app
commands = 
mkdir feedback-app
cd feedback-app
npm init -y
npm install express


feedback-app/
│── app.js





Testing in Thunder Client
POST
POST http://localhost:3000/feedback

Body → Form

{
  "name":"Mamta",
  "message":"Very Good Service"
}
GET
GET http://localhost:3000/admin
PUT
PUT http://localhost:3000/feedback/1

Body → JSON

{
  "name":"Mamta Updated",
  "message":"Excellent Service"
}
DELETE
DELETE http://localhost:3000/feedback/1
