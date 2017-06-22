var path = require('path');
var passport = require('passport');

module.exports = function(app, io, Page, Queue) {
    app.get('/', (req, res) => { //root route sends index.html
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/index/:query', (req, res) => {
        var query = tokenize(req.params.query); //gives array of words
        Page.find({
            searchables: {
                $in: query
            }
        }).sort({
            pagescore: 'desc'
        }).exec((err, doc) => {
            if (err) {
                console.error(err);
            } else {
                res.json(doc);
            }
        });
    });

    app.post('/index', (req, res) => {
        req.body.forEach(element => {
            new Page(element).save((err, doc) => {
                if (err) {
                    console.error(err);
                } else {
                    doc.links.forEach(link => {
                        index.findOneAndUpdate({ url: link }, { $inc: { pagescore: 1 } }, { returnNewDocument: true }).exec((err, doc) => {
                            if (err) {
                                console.error(err)
                            } else {
                                console.log(doc)
                            }
                        })
                    });
                }
            });
        });
    })

    app.get('/queue', (req, res) => {
        Queue.find({})
            .sort({ pagescore: 'desc' })
            .limit(10).exec((err, doc) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(doc);
                }
            });
    });


    // PASSPORT AUTH STARTS HERE

    // /* GET login page. */
    // app.get('/', function(req, res) {
    //     // Display the Login page with any flash message, if any
    //     res.render('index', { message: req.flash('message') });
    // });

    /* Handle Login POST */
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    }));

    // /* GET Registration Page */
    // app.get('/signup', function(req, res) {
    //     res.render('register', { message: req.flash('message') });
    // });

    /* Handle Registration POST */
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
        console.log('User logout succesful\'ish');
    });

    // PASSPORT AUTH ENDS HERE


    io.on('connection', socket => {
        console.log('socket connected on ' + socket.id);

        socket.emit('bundle', { hello: 'world' });

        socket.on('send more', () => {
            socket.emit('bundle', { hello: 'world' });
        });

        socket.on('data', data => {
            console.log(data);
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    });
}

const tokenExp = /[^\s\t]+/g;
const stopwords = require('stopwords').english;
var tokenize = function(string) {
    const tokens = [];
    while ((match = tokenExp.exec(string)) !== null) {
        tokens.push(match[0]);
    }
    console.log("query tokenized");
    return tokens.filter(token => !stopwords.includes(token));
}
