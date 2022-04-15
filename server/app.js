const express = require('express')
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    
}))

app.listen(5000, ()=>{
    console.log('now listening for requests on port 5000');
});