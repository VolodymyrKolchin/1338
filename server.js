const express = require('express');
const cors = require('cors');
const BigCommerce = require('node-bigcommerce');
const app = express();

app.use(express.json());
app.use(cors());

const bigCommerce = new BigCommerce({
    clientId: '7a5c315q0ene37buf9zq87l8esic993',
    accessToken: 'czx9vwgzp8wedxe4ew2z4uyisbuc212',
    storeHash: '85kzbf18qd',
    responseType: 'json'
});

//ROUTE DEFINE
app.post('/orders', async function (req, res) {
    try {
        const arrID= [];
        arrID.push(...req.body.ids.replace(/\s/g, '').split(','));
        arrID.forEach((el)=>{
            console.log('el', el);
            bigCommerce.get(`/orders/${el}`)
                .then(data => {
                    console.log('data', data);
                })
        })
        res.status(200).send("File created and uploaded successfully ");
    } catch (e) {
        console.log('error', e)
    }
});

app.listen(8080 || process.env.PORT, function () {
 console.log('Server is running:');
});