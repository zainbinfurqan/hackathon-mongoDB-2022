
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
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//____________________________//
//_____________AUTH  START_______________//

app.get('/login', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.get('/signup', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.get('/guest/login', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

//_____________AUTH  END_______________//
//____________________________//

//_____________SEARCH START_______________//
//____________________________//

app.get('/search', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

//_____________SEARCH END_______________//
//____________________________//

//_____________ADMIN START_______________//
//____________________________//

//____________MANAGER________________//

app.get('/managers', (req, res) => {
    try {
        try {
            res.send('Hello World!')

        } catch (error) {
            res.status().send()
        }

    } catch (error) {
        res.status().send()
    }
})

app.post('/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.put('/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/accept/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/reject/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})


//____________MANAGER________________//
//____________COURSE________________//

app.get('/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.post('/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.put('/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/accept/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.delete('/reject/courses', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

//____________COURSE________________//

//_____________ADMIN END_______________//
//____________________________//