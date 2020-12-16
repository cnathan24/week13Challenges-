
var express = require('express');
var app = express();
var data = require('./employeesstat.json');

app.use(express.json());

app.get('/employees', (req,res) => {
    if(!data) {
        res.status(404).send('Employee Not Found.');
    }
    res.send(data)
 });


app.get('/employees/:id', (req,res) => {

    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id;
    });
    if (!findEmployee) {
        res.status(404).send('Employee Not Found.');
    }

    res.send(findEmployee);
});


app.post('/employees/:id', (req,res) => {
    const employ = {
        id: employees.length + 1,
        name: req.body.name
    }
    employees.push(employees);
    res.send(employees);
});


app.put('/employees/:id', (req,res) => {
    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id;
    });
    if (!findEmployee) {
        res.status(404).send('Employee Not Found.');
    }
})


app.delete('/employees/:id', (req,res) => {
    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id;
    });
    if (!findEmployee) {
        res.status(404).send('Employee Not Found.');
    }
})



const port = process.env.port || 2000;

app.listen(2000);