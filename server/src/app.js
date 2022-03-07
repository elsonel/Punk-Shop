import express from 'express';
import DB from './db.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Main, nothing to see here');
});

app.get('/api/punks', (req, res) => {
    const protocol = req.protocol;
    const host = req.hostname;
    if (process.env.NODE_ENV === "production") { 
        DB.forEach((obj) => {
            if (!obj["img"].startsWith(`${protocol}://${host}`)){
                obj["img"] = `${protocol}://${host}` + obj["img"]
            }
        });
    } else if  (process.env.NODE_ENV === "development") {
        const port = PORT;
        DB.forEach((obj) => {
            if (!obj["img"].startsWith(`${protocol}://${host}:${port}`)){
                obj["img"] = `${protocol}://${host}:${port}` + obj["img"]
            }
        });
    } 
    res.send(JSON.stringify(DB))
})

app.get('/api/punks/:id', (req, res) => {
    const key = "CryptoPunk #" + req.params.id;
    const punk = DB.find((item) => item.title == key);
    if (punk){
        res.send(JSON.stringify(punk));
    } else {
        res.status(404).send('Unable to find requested resource');       
    }

})
let server = app.listen(PORT, "0.0.0.0", () => console.log('Yes'));
export default server