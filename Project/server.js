const Bundler = require('parcel-bundler'),
    express = require('express'),
    mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://terminator:admin123@clusterterminators-rjtl2.azure.mongodb.net/afPro').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/courses', require('./app/ManageCourses/routes/courseRouter'));
app.use('/semester',require('./app/ManageCourses/routes/semesterRouter'));
app.use('/degree',require('./app/ManageCourses/routes/degreeRouter'));
app.use('/instructor',require('./app/Admin/routes/instructorRouter'));
app.use('/admin',require('./app/Admin/routes/adminRouter'));
app.use('/student',require('./app/Admin/routes/studentRouter'));
app.use('/notice',require('./app/Admin/routes/noticeRouter'));

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

app.listen('https://sis--af.azurewebsites.net/', err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

