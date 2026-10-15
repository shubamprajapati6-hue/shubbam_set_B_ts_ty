const mysql = require("mysql2")

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hms"
})

function connectDB(){
    db.connect((err)=>{
        if (err) {
            console.log(err);
            
        } else {
            console.log("Database connected successfully");
        }
    })
}

connectDB()

function show() {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    });
}
show()

    

function datainsert() {
    db.query("insert into user(name, age, disease,contact) Values=?", [name, age, disease,contact], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}
datainsert("shubham","23","fi","3464564")

function updatedata(id, name, age, disease, contact) {
    const add = [name, age, disease, contact, id];
    db.query("UPDATE user SET name = ?, age = ?, disease = ?, contact  = ? WHERE id = ?", add, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    });
}
updatedata(1, "shubham", "23", "fi", "3464564")

function deletedata(id) {
    db.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    });
}
deletedata(1)