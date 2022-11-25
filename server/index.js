
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
const port = 3001

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

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

const MongoDBConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://user-1:H5pAeXho9Xldj9cf@cluster0.radnh.mongodb.net/?retryWrites=true&w=majority');
        console.log("database connect")
    } catch (error) {
        console.log("error", error)
    }
}
MongoDBConnection()
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


// _________________MODELS_______________//
// ____________COURSE_______________//


const courseSchema = new Schema({
    id: ObjectId,
    title: { type: String },
});
const CourseModal = mongoose.model('course', courseSchema);

// ____________COURSE_______________//

//______________________MANAGER___________________//

const managerSchema = new Schema({
    id: ObjectId,
    title: { type: String },
});
const ManagerModal = mongoose.model('manager', managerSchema);
//______________________MANAGER___________________//
// _________________MODELS_______________//

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

app.post('/managers', async (req, res) => {
    try {
        const manager = new ManagerModal;
        const newManager = await manager.save({ ...req.body })
        res.status(200).send(newManager)
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

app.post('/accept/managers', (req, res) => {
    try {
        res.send('Hello World!')

    } catch (error) {
        res.status().send()
    }
})

app.post('/reject/managers', (req, res) => {
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

app.post('/courses', async (req, res) => {
    try {
        try {
            const course = new CourseModal;
            const newCourse = await course.save({ ...req.body })
            res.status(200).send(newCourse)
        } catch (error) {
            console.log(error)
        }

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

