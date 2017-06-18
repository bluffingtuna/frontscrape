var path = require('path');

module.exports = function(app, io){
    app.get('*', (req, res)=>{//root route sends index.html
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get('/login', (req, res)=>{//sends login page
        res.sendFile('../public/login.html');
    });

    io.on('connection', socket=>{
        console.log('socket connected on ' + socket.id);

        socket.emit('bundle', { hello: 'world' });

        socket.on('send more', ()=>{
            socket.emit('bundle', {hello: 'world'});
        });

        socket.on('data', data=>{
            console.log(data);
        });

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
}
