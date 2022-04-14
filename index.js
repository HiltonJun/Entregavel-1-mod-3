const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açai com Leite condensado',
    descricao: 'Açai com Leite condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Açai',
    descricao: 'Açai',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 12.0,
  },
  {
    id: 3,
    sabor: 'Açai com Leite',
    descricao: 'Açai com Leite',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 7.0,
  },
];

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/find-paletas/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta.sabor);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
