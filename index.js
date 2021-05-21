const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const cors = require('cors')

 
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
// Setup middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload())
app.use(cors())
// app.use(methodOverride('_method'))

 if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

}

app.use("/",routes);
 
require('./services/passport');
// Connect database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userstockitem', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const MONGODBURI = 'mongodb+srv://fanuelnalem:Classof2017@cluster0.0aadk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODBURI || 'mongodb://localhost/carnadb',{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useCreateIndex:true
});
mongoose.connection.on('connected', ()=>{
  console.log('mongoose is connected')
})
 

app.listen(PORT,()=>{
  console.log(`listening on PORT ${PORT}`)
});
