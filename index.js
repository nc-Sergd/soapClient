const fs = require('fs') ;
const soap  = require('soap');
const params  = require( './app-params.json');
soap.createClient(params.url,{},(error, client)=>{
    if(error && error.message)
    {
        fs.writeFileSync('./error1.json', JSON.stringify(error));
    }
    else
    {
        fs.writeFileSync('./client.json', JSON.stringify(client));

    }
})