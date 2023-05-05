const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

// const submit = document.getElementById('submit');
// const email = document.getElementById('user-email');
// const error = document.getElementById('error');

//^^why can't I put these in this file? document is noot defined...


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + '/css/style.css');
})

app.post('/', (req, res) => {
    res.send('omg whatttt');
})

app.listen(3000, () => {
    console.log('heyyy');
});

