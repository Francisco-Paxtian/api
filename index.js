'use strict'

var mongoose = require('mongoose'); // use dependece mongoose
var app = require('./app');
//var port = 3900;
const port = process.env.PORT || 3900;

mongoose.set('useFindAndModify', false); // desactivate old methods
mongoose.Promise = global.Promise;
// conection mongodb
mongoose.connect('mongodb+srv://paxtian:paxtian1234@cluster0.bevra.mongodb.net/api_rest_mextilti?retryWrites=true&w=majority',{ useNewUrlParser : true, useUnifiedTopology : true }).then( () => {
    console.log('connection successfull !!');

    // create server and listen to htpp request
    //app.listen(process.env.PORT || port, () =>{
    //    console.log('server create successful and port: ')
    //})
    app.listen(port, () =>{
        console.log('server create successful and port: '+port);
    });    
});

