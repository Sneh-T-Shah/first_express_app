const express = require('express')

const app = express()

app.use(express.static('public'))
const port = 3000

app.get('/',(req,res)=>
{
    res.send('hello')
})

app.listen(port,()=>
{
    console.log('listening app on port http://127.0.0.1:3000')
})

app.get('/home',(req,res)=>
{
    res.sendFile(__dirname+'/home.html')
})

app.get('/about',(req,res)=>
    {
        res.sendFile(__dirname+'/about.html')
    })

app.get('/contact',(req,res)=>
    {
        res.sendFile(__dirname+'/contact.html')
    })

app.get('/marksheet',(req,res)=>
{
    res.sendFile(__dirname+"/marksheet.html")
})

app.get("/process",(req,res)=>
{
    var english = parseInt(req.query.english)
    var dsa = parseInt(req.query.dsa)
    var os = parseInt(req.query.os)
    var de = parseInt(req.query.de)
    var sum = dsa + os + de + english
    var average = sum/4
    var status = "Fail"
    var colour = "red"
    if (average>40)
    {
        colour = "green"
        status = "Pass"
    }
    res.end(`
        <h1>Result</h1>
        <br>
        <table border="2">
            <tr >
                <td>Subject</td>
                <td>Marks</td>
            </tr>
            <tr>
                <td>English</td>
                <td>${english}</td>
            </tr>
            <tr>
                <td>DSA</td>
                <td>${dsa}</td>
            </tr>
            <tr>
                <td>DE</td>
                <td>${de}</td>
            </tr>
            <tr>
                <td>OS</td>
                <td>${os}</td>
            </tr>
            <tr>
                <td>SUM</td>
                <td>${sum}</td>
            </tr>
                <tr>
                <td>Average</td>
                <td>${average}</td>
            </tr>
                <tr>
                <td>Status</td>
                <td bgcolor=${colour}>${status}</td>
            </tr>
        </table>`)
})