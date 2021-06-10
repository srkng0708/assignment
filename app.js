// IMPORTING 
const path = require('path')
const express =require('express')
const {availableleaves , absentdates, leaves, holidaycalander} = require('./practise')

// REQUIRING
const app= express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath)) 


// ABSENT DAYS 
app.get('/absentdays', (req, res) => {
    res.send("You have currently " +availableleaves + " leaves left")
})

// ABSENT DAYS DETAILS 
app.get('/absentdetails', (req, res) => {
    res.send("You have taken leaves on the following dates: "+ absentdates)
})

// AVAILABLE LEAVE BALANCE 
app.get('/leavebalance', (req, res) => {
    res.send(leaves)
})

// HOLIDAY CALANDER 
app.get('/holidaycalander', (req, res) => {
    res.send(holidaycalander)
})

// LISTENING ON PORT 
app.listen(port, () => {
    console.log("Server is running on port " + port)
})