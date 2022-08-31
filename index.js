//hent biblioteket IP 
const ip = require('ip')
//fordi vi har IP bibliotektet kan vi hurtigt finde vores IP adresse
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4040

//serve en statisk mappe i roden 
app.use('/', express.static('public'))


//hvis der kommer klinenter til endpointet hvaler
app.get('/api/hvaler', (req, res)=>{
     const obj = {
        'blåhval':{
            'farve': 'grøn',
            'vægt': '1/2 mazda',
        }
     }
   res.json(obj)
})

//hvis der kommer klinenter til endpointet dato
app.get('/api/dato', (req, res)=>{
    res.send('Du er kommet til mit dato api')
 })

//serveren skal bare side og køre på porten
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 