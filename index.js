const express = require('express');
const Joi = require('joi');
const app = express ();
const bodyparser = require('body-parser');
app.use(express.json());
app.use(bodyparser.json());

const professors = [
  { id: 1, name : 'Mr Robertson', title: 'Professor', school: 'SFSU', department: 'science'},
  { id: 2, name : 'Ms Stevenson', title: 'Professor', school: 'CSU Santa Cruz', department: 'economics'},
  { id: 3, name : 'Mrs Erickson', title: 'Professor', school: 'Loyala', department: 'humanities'}
];

const reviews = [
  {id: 1, pro_id: 1, rating: 2, text: 'picks his nose'},
  {id: 2, pro_id: 1, rating: 4, text: 'he is very responsive'},
  {id: 3, pro_id: 2, rating: 5, text: 'Ms Stevenson is a woderful person'},
  {id: 4, pro_id: 3, rating: 1, text: 'Mrs Erickson is the devil'},
  {id: 5, pro_id: 2, rating: 3, text: 'She assigns too much homework'},
];

// CRUD PROFESSORS************************************

app.get('/', (req, res) => {
  res.send('Hello World');
});
// index
app.get('/api/professors', (req, res) => {
  res.json(professors);
});
// show
app.get('/api/professors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const professor = professors.find(professor => professor.id === id)
  res.json(professor);
});
// update
app.post('/api/professors/:id', (req, res) => {
  const id=req.params.id;
  res.send([1,2,3]);
});

// create
app.post('/api/professors', (req, res) => {
  const schema = {
    id: 1,
    name: Joi.string().required(),
    title: Joi.string().required(),
    school: Joi.string().required(),
    department: Joi.string().required(),
  };
});



// CRUD REVIEWS************************************

// index
app.get('/api/reviews', (req, res) => {
  res.send([1,2,3,4,5]);
});
// show
app.get('/api/reviews/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const review = reviews.find(review => review.id === id)
  res.json(review);
});
// update
app.post('/api/reviews/:id', (req, res) => {
  res.send([1,2,3]);
});

// create
app.post('/api/reviews', (req, res) => {
  const schema = {
    id: 1,
    pro_id: Joi.number().integer().min(1).max(3).required(),
    rating: Joi.number().integer().min(0).max(5).required(),
    text: Joi.string().required(),
  };
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on on port ${port}...'));