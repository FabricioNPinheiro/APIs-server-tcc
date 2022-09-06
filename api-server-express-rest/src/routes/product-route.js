const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.status(201).send(req.body);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(201).send({
    id,
    item: req.body,
  });
});

router.delete('/', (req, res) => {
  res.status(200).send(req.body);
});

module.exports = router;
