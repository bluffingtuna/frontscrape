var path = require('path');
var passport = require('passport');

module.exports = function(app, io, Page, Queue, User) {
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
            var newElement = JSON.parse(element)
            new Page(newElement).save((err, doc) => {

                if (err) {
                    console.error(err);
                } else {
                    doc.links.forEach(link => {
                        Page.findOneAndUpdate({ url: link }, { $inc: { pagescore: 1 } }, { returnNewDocument: true }).exec((err, doc) => {
                            if (err) {
                                console.error(err)
                            } else {
                                new Queue({url:link}).save((err, doc1) => {
                                    if (err) {
                                        console.log("error in saving Queue")
                                        console.error(err);
                                    } else {
                                        console.log("going in")
                                        console.log(doc1)
                                    }
                                })

                            }
                        })
                    });
                }
            });
        });
    })

    //We save our dummy queue data to Queue db with this route
    app.post("/queue", (req, res) => {
        req.body.forEach(element => {
            new Queue(element).save((err, doc) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("working")
                }
            })
        })
        res.end();
    })

    //Calling Queues from the db
    app.post('/queues', (req, res) => {
        var q = Queue.find({}).limit(5);
        q.exec(function(err, doc) {
            if (err) {
                console.log("error");
                res.json(err);
            } else {
                console.log("====================================")
                console.log("List of URLs sent to client #/queues")
                console.log("====================================")
                res.json(doc);
            }
        });
    });


//     io.on('connection', socket => {
//         console.log('socket connected on ' + socket.id);

//         socket.emit('bundle', { hello: 'world' });

//         socket.on('send more', () => {
//             socket.emit('bundle', { hello: 'world' });
//         });

//         socket.on('data', data => {
//             console.log(data);
//         });

//         socket.on('disconnect', function() {
//             console.log('user disconnected');
//         });
//     });

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
