exports.post = (req, res) => {
  res.status(201).send(req.body);
};

exports.put = (req, res) => {
  const { id } = req.params;
  res.status(201).send({
    id,
    item: req.body,
  });
};

exports.delete = (req, res) => {
  res.status(200).send(req.body);
};
