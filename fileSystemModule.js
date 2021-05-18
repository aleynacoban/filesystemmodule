const fs = require('fs');

let content={"name": "Employee 1 Name", "salary": 2000};

//Write File
fs.writeFile('employees.json', JSON.stringify(content), 'utf8', (err) => {
    if (err) console.log(err);
});
//Read File
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    });
//Update File
content["name"]="Aleyna Çoban";
content["salary"]="5000";

fs.writeFile('employees.json', JSON.stringify(content), 'utf8', (err) => {
if (err) console.log(err);    
});

//Delete File
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});