import express, { response } from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler);


// Rotas = conjunto 
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetos

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego&page=2
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// body: http://localhost:3333/users (Identificar um recuso)


app.listen(3333);

// REQ /RES
// localhost:3333

// Formas de lidar com o banco de dados:
// Driver nativo (SQL), Query builder (knex), ORM
// ORM: Object Relational Mapping

// Query Builder ou ORM: se quiser trocar o banco de dados no futuro, é mais fácil
