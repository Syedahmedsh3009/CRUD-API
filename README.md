BlOG APP.

Technologies.
Nodejs and express.

Dependencies Used-
    bcrypt
    body-parser
    cors
    dotenv^
    express
    jsonwebtoken
    mongodb
    mongoose
    nodemon


CRUD APIs.
1. Signup
    Request- POST
    URL- localhost:8080/user/signup
    Payload-
    {
    "name": "Kafeel",
    "email": "kafeel@gmail.com",
    "number": 9876543210,
    "password": "test@123"
    }

2. Login
    Request- POST
    URL- localhost:8080/user/login
    Payload-
    {
    "email": "kafeel@gmail.com",
    "password": "test@123"
    }

3. Create Blog
    Request- POST
    URL- localhost:8080/blog/create
    Payload-
    {
    "title": " Edit My Blog",
    "description": "2 Describing my blog",
    "category": "General"
    }

4. Get Blogs
    Request- GET
    URL- localhost:8080/blog







