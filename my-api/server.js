
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const pool = require("./db");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

/*const users = require("./db");


// GET API
/*app.get("/users", (req, res) => {

    res.json(users);

});*/

/* after cretaing database */
/*app.get("/users", async (req, res) => {

    const result = await pool.query(
        "SELECT * FROM users ORDER BY id"
    );

    res.json(result.rows);

});*/
app.get("/users", async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;

        const limit = 5;

        const offset = (page - 1) * limit;

        const result = await pool.query(
            `SELECT *
FROM users
ORDER BY id
LIMIT $1
OFFSET $2`,
            [limit, offset]
        );

        res.json(result.rows);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

});


// POST API
/*app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        ...req.body
    };

    users.push(newUser);

    fs.writeFileSync(
        "./users.json",
        JSON.stringify(users, null, 2)
    );

    res.json({
        message: "User Added Successfully",
        user: newUser
    });

});*/

app.post("/users", async (req, res) => {
    console.log("BODY:", req.body);

    const { name, email, company } = req.body;

    if (!name || !email || !company) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const result = await pool.query(
        `INSERT INTO users(name,email,company)
         VALUES($1,$2,$3)
         RETURNING *`,
        [name, email, company]
    );

    res.json({
        message: "User Added Successfully",
        user: result.rows[0]
    });

});


// PUT API
/*app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(
        (u) => u.id === id
    );

    if (user) {

        user.name = req.body.name;
        user.email = req.body.email;
        user.company = req.body.company;

        fs.writeFileSync(
            "./users.json",
            JSON.stringify(users, null, 2)
        );

        res.json({
            message: "User Updated Successfully",
            user
        });

    } else {

        res.status(404).json({
            message: "User Not Found"
        });

    }

});*/

app.put("/users/:id", async (req, res) => {

    const { name, email, company } = req.body;

    const result = await pool.query(
        `UPDATE users
         SET name=$1,
             email=$2,
             company=$3
         WHERE id=$4
         RETURNING *`,
        [name, email, company, req.params.id]
    );

    console.log(result.rows);

    res.json(result.rows[0]);

});


// DELETE API
/*app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex(
        (u) => u.id === id
    );

    if (index !== -1) {

        const deletedUser = users.splice(index, 1);

        fs.writeFileSync(
            "./users.json",
            JSON.stringify(users, null, 2)
        );

        res.json({
            message: "User Deleted Successfully",
            user: deletedUser
        });

    } else {

        res.status(404).json({
            message: "User Not Found"
        });

    }

});*/


app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.delete("/users/:id", async (req, res) => {

    try {

        const result = await pool.query(
            `DELETE FROM users
             WHERE id = $1
             RETURNING *`,
            [req.params.id]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        res.json({
            message: "User Deleted Successfully",
            user: result.rows[0]
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

});

// LOGIN API

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await pool.query(
            `SELECT *
             FROM login_users
             WHERE email = $1
               AND password = $2`,
            [email, password]
        );

        if (result.rows.length === 0) {

            return res.status(401).json({
                message: "Invalid Credentials"
            });

        }

        const user = result.rows[0];

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            "mySecretKey",
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});