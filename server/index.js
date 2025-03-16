const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
});
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ id })
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
})
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});
app.listen(3001, () => {
    console.log("Server is Running on port 3001");
});
