
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//____________________________//
//_____________AUTH  START_______________//

app.get('/login', (req, res) => {
    res.send('Hello World!')
})

app.get('/signup', (req, res) => {
    res.send('Hello World!')
})

app.get('/guest/login', (req, res) => {
    res.send('Hello World!')
})

//_____________AUTH  END_______________//
//____________________________//

//_____________SEARCH START_______________//
//____________________________//

app.get('/search', (req, res) => {
    res.send('Hello World!')
})

//_____________SEARCH END_______________//
//____________________________//

//_____________ADMIN START_______________//
//____________________________//

//____________MANAGER________________//

app.get('/managers', (req, res) => {
    res.send('Hello World!')
})

app.post('/managers', (req, res) => {
    res.send('Hello World!')
})

app.put('/managers', (req, res) => {
    res.send('Hello World!')
})

app.delete('/managers', (req, res) => {
    res.send('Hello World!')
})

app.delete('/accept/managers', (req, res) => {
    res.send('Hello World!')
})

app.delete('/reject/managers', (req, res) => {
    res.send('Hello World!')
})


//____________MANAGER________________//
//____________COURSE________________//

app.get('/courses', (req, res) => {
    res.send('Hello World!')
})

app.post('/courses', (req, res) => {
    res.send('Hello World!')
})

app.put('/courses', (req, res) => {
    res.send('Hello World!')
})

app.delete('/courses', (req, res) => {
    res.send('Hello World!')
})

app.delete('/accept/courses', (req, res) => {
    res.send('Hello World!')
})

app.delete('/reject/courses', (req, res) => {
    res.send('Hello World!')
})

//____________COURSE________________//

//_____________ADMIN END_______________//
//____________________________//