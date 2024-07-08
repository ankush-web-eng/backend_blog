import express from 'express';
import axios from 'axios';
import cors from "cors"
require('dotenv').config()

const app = express()
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello, I am Ankush! And this is my official page for APIs."
    })

})

app.get("/blog", async (req, res) => {
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

app.get("/project", async (req, res) => {
    try {
        const response = await axios.get(`${process.env.URL}/api/projects/getProjects`)
        res.json({
            message: response.data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
})

app.get("/project/:id", async (req, res) => {
    const { id } = req.params
    try {
        const response = await axios.get(`${process.env.URL}/api/projects/getProject/${id}`);
        res.json({
            message: response.data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
})

app.get("/link", async (req, res) => {
    try {
        const response = await axios.get(`${process.env.URL}/api/projects/getlinks`)
        res.json({
            message: response.data
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from external API');
    }
})

app.get("/skill", async (req, res) => {
    try {
        const response = await axios.get(`${process.env.URL}/api/skill/getskills`)
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
