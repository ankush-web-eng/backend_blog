import express from 'express';
import axios from 'axios';
import cors from "cors"
require('dotenv').config()
// import serverless from "serverless-http"

const app = express()
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())

app.get("/test", (req, res) => {
    res.json({
        message: "Hello from the serverless function"
    })

})

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${process.env.URL}/api/ghost/getallghosts`)
        res.json({
            message: response.data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
})


app.get("/blog/:id", async (req, res) => {
    const { id } = req.params
    try {
        const response = await axios.get(`${process.env.URL}/api/ghost/getghost/${id}`);
        res.json({
            message: response.data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
})

app.listen((3001), () => {
    console.log('Server is running on port 3001')
})

// module.exports.handler = serverless(app)