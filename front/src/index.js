import  express  from  'express';
 
const  app  =  express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/pokemon/:id', async (req, res) => {
    res.render('pages/pokemon');
});

app.get('/collection', async(req,res) => {
    res.render('pages/collection');
});

app.get('/landing', (req,res) => {
    res.render('pages/landing');
});

app.get('/login', (req,res) => {
    res.render('pages/login')
})


app.listen(3000)