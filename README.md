# Simple Mongoose and Express.js API

The intent of this project was to build an API using only the minimum necessary.
It uses the mongoose library to vreate a connection between MongoDB and Node.js.
And it uses Express.js to build the RESTful API.

It has only two essential files:
- main.js
- models.js


## How To Run

To run this project on your machine you will need to run the command:
```
npm install express mongoose
```

Set your Atlas URI connection string as a parameter on the line 51 await mongoose.connect on the "main.js" file.
Make sure you replace the username and password placeholders with your own credentials.

```
mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/meanStackExample?retryWrites=true&w=majority
```

Simple JSON to use on Postman for a POST request localhost:3000/dogs :
```
{
    "name":"Bobby",
    "breed":"Schnauzer",
    "age": 14,
    "isGoodBoy": true
}
```