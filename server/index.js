
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require("socket.io");
const app = express()
const server = require('http').createServer(app);
const port = 3001
const io = new Server(server);

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

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// _________________MODELS_______________//
// ____________COURSE_______________//
const courseSchema = new Schema({
    id: ObjectId,
    title: { type: String },
    instructor: { type: String },
    details: { type: String },
    source: { type: String },
    level: { type: String },
    category: { type: String },
    link: { type: String },
    rating: { type: Number },
    isViewable: { type: Boolean }
});
const CourseModal = mongoose.model('course', courseSchema);
// ____________COURSE_______________//

//______________________REQUESTs___________________//
const requestsSchema = new Schema({
    id: ObjectId,
    requestQuery: { type: String },
    status: { type: String },
    responseQuery: { type: String },
    courseId: { type: mongoose.Schema.Types.ObjectId, default: null },
    requestedUserId: { type: mongoose.Schema.Types.ObjectId, },
});
const RequestsModal = mongoose.model('request', requestsSchema);
//______________________REQUESTs___________________//
//______________________USER___________________//
const userSchema = new Schema({
    id: ObjectId,
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    isManager: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
});
const UserModal = mongoose.model('user', userSchema);
//______________________USER___________________//
// _________________MODELS_______________//


// const manager = new ManagerModal;
// const course = new CourseModal;
// const user = new UserModal;
// const request = new RequestsModal;

//____________________________//
//_____________AUTH  START_______________//

app.post('/login', async (req, res) => {
    try {

        const userFromDDB = await UserModal.findOne({ email: req.body.email, password: req.body.password })
        if (userFromDDB) {
            res.status(200).send(userFromDDB)
        }
        if (!userFromDDB) {
            res.status(400).send("email or password not valid")
        }
    } catch (error) {
        res.status().send(error)
    }
})

app.post('/signup', async (req, res) => {
    try {
        const isUserAlreadyExist = await UserModal.findOne({ email: req.body.email })
        if (isUserAlreadyExist) {
            res.status(400).send({ message: "user already exist" })
        }
        if (!isUserAlreadyExist) {
            const newUser = await UserModal.create({ ...req.body })
            res.status(200).send(newUser)
        }
    } catch (error) {
        res.status(400).send(error)
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

app.get('/search', async (req, res) => {
    try {
        const result = await CourseModal.aggregate([
            {
                '$search': {
                    'index': 'search-text',
                    'text': {
                        'query': req.query.t,
                        'path': {
                            'wildcard': '*'
                        }
                    }
                }
            }
        ])
        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        res.status().send()
    }
})

app.get('/suggestion', async (req, res) => {
    try {
        const result = await CourseModal.aggregate([
            {
                '$search': {
                    'index': 'autocomplete',
                    'autocomplete': {
                        'query': req.query.t,
                        'path': 'title'
                    },
                    'highlight': {
                        'path': [
                            'title'
                        ]
                    }
                }
            }, {
                '$limit': 5
            }, {
                '$project': {
                    'title': 1,
                    'highlights': {
                        '$meta': 'searchHighlights'
                    }
                }
            }
        ])
        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status().send()
    }
})

//_____________SEARCH END_______________//
//____________________________//

//_____________ADMIN START_______________//
//____________________________//

//____________MANAGER________________//

app.get('/managers', async (req, res) => {
    try {
        try {
            const managers = await UserModal.find({})
            res.status(200).send(managers)
        } catch (error) {
            res.status(400).send()
        }

    } catch (error) {
        res.status().send()
    }
})

app.post('/managers', async (req, res) => {
    try {
        console.log(req.body)
        const newManager = await UserModal.create({ ...req.body, isManager: true })
        res.status(200).send(newManager)
    } catch (error) {
        res.status(400).send()
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

app.post('/request/to/make/managers', async (req, res) => {
    try {
        const requestPayload = {
            requestQuery: "USer want to become manager",
            status: 'pending',
            responseQuery: '',
            requestedUserId: mongoose.Types.ObjectId(req.body.userId)
        }
        const newRequest = await RequestsModal.create(requestPayload)
        res.status(200).send(newRequest)
    } catch (error) {
        res.status(400).send()
    }
})

app.post('/accept/managers', async (req, res) => {
    try {
        await UserModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.userId) },
            { isManager: true },
            { returnDocument: 'after' }
        )
        await RequestsModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.requestId) },
            { status: 'accepted' },
            { returnDocument: 'after' }
        )
        res.status(200).send('ok')
    } catch (error) {
        res.status().send()
    }
})

app.post('/reject/managers', async (req, res) => {
    try {
        await UserModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.userId) },
            { isManager: true },
            { returnDocument: 'after' }
        )
        await RequestsModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.requestId) },
            { status: 'reject' },
            { returnDocument: 'after' }
        )
        res.status(200).send('ok')

    } catch (error) {
        res.status().send()
    }
})


//____________MANAGER________________//
//____________COURSE________________//

app.get('/courses', async (req, res) => {
    try {
        const courses = await CourseModal.find({})
        res.status(200).send(courses)
    } catch (error) {
        res.status(400).send()
    }
})

app.post('/courses', async (req, res) => {
    try {
        try {
            req.body['isViewable'] = true
            const newCourse = await CourseModal.create(req.body)
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

app.post('/request/to/add/course', async (req, res) => {
    try {
        req.body['isViewable'] = true
        const newCourse = await CourseModal.create({ ...req.body, isViewable: false })
        const requestPayload = {
            requestQuery: "Manager want to add this course",
            status: 'pending',
            responseQuery: '',
            courseId: newCourse._id,
            requestedUserId: mongoose.Types.ObjectId(req.body.userId)
        }
        const newRequest = await RequestsModal.create(requestPayload)
        res.status(200).send()
    } catch (error) {
        res.status(400).send()
    }
})

app.post('/accept/courses', async (req, res) => {
    try {
        await CourseModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.userId) },
            { isViewable: true },
            { returnDocument: 'after' }
        )
        await RequestsModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.requestId) },
            { status: 'accepted' },
            { returnDocument: 'after' }
        )
        res.status(200).send('ok')
    } catch (error) {
        res.status().send()
    }
})

app.post('/reject/courses', async (req, res) => {
    try {
        await CourseModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.courseId) },
            { isViewable: false },
            { returnDocument: 'after' }
        )
        await RequestsModal.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(req.body.requestId) },
            { status: 'reject' },
            { returnDocument: 'after' }
        )
    } catch (error) {
        res.status().send()
    }
})

//____________COURSE________________//

//_____________ADMIN END_______________//
//____________________________//



// -----------Socket ------------------//
io.on('connection', (socket) => {
    console.log('a user connected');
    try {
        socket.on('search-auto-suggest', async (data) => {
            try {
                const result = await CourseModal.aggregate([
                    {
                        '$search': {
                            'index': 'autocomplete',
                            'autocomplete': {
                                'query': data.t,
                                'path': 'title'
                            },
                            'highlight': {
                                'path': [
                                    'title'
                                ]
                            }
                        }
                    }, {
                        '$limit': 5
                    }, {
                        '$project': {
                            'title': 1,
                            'highlights': {
                                '$meta': 'searchHighlights'
                            }
                        }
                    }
                ])
                const suggestions = []
                if (result.length > 0) {
                    result.map(item => {
                        if (item.highlights.length > 0) {
                            item.highlights.map(highlightsItem => {
                                highlightsItem.texts.map(textsIte => {
                                    suggestions.push(textsIte.value)
                                })
                            })
                        }
                    })
                }
                socket.emit('receive-suggestion', {
                    data: suggestions
                })
            } catch (error) {
                console.log(error)
            }
        });
    } catch (error) {
        console.log(error)
    }

});