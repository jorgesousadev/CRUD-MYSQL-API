const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql2');
const multer = require('multer');
let data;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   //cb(null, './uploads/');
   cb(null, './uploads/');
   },
  filename: function(req, file, cb) {
    data = new Date().toISOString().replace(/:/g, '-') + '-';
     cb(null, data + file.originalname);  
        
    }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
    fileFilter: fileFilter
});

// configurando body parse para pegar os POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// definindo as rotas
const router = express.Router();
router.get('/',(req, res) => res.json({ message: 'funcionando'}));
app.use('/', router);

//iniciar o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlqry, res){
    const connection = mysql.createConnection({
        host                 : 'localhost',
        port                 : 3306,
        user                 : 'root',
        password             : 'jorge7',  
        database             : 'senai115'
    });

    connection.query(sqlqry, function(error, results, fields){
       if(error)
         res.json(error);
       else
        res.json(results);
         connection.end();
    });
}

router.get('/produtos', (req, res) => {
    execSQLQuery('SELECT * FROM produtos', res);
})

router.get('/produtos/:id?', (req, res) => {
  let filter = '';
  if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM produtos' + filter, res); 
});

router.delete('/produtos/:id', (req, res) =>{
  execSQLQuery('DELETE FROM produtos WHERE id=' + parseInt(req.params.id), res);
});


router.post('/produtos', upload.single('imagem'), (req, res) => {

  const produto = req.body.produto.substring(0,150);
  const preco = req.body.preco.substring(0,11);
  const imagems = 'uploads/' + req.file.filename; 
  execSQLQuery(`INSERT INTO produtos(produto, preco, imagem) VALUES('${produto}','${preco}','${imagems}')`, res);
  
});

  router.patch('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = req.body.produto.substring(0,150);
  const preco = req.body.preco.substring(0,11);
  execSQLQuery(`UPDATE produtos SET produto='${produto}', preco='${preco}'  WHERE id=${id}`, res);
 
});
