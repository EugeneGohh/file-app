import nc from "next-connect";
import file_db from "../../../src/data/mock-db";

const getFile = (id) => file_db.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    const file = getFile(req.query.id);

    if (!file) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: file });
  })
  .patch((req, res) => {
    const file = getFile(req.query.id);

    if (!file) {
      res.status(404);
      res.end();
      return;
    }

    const i = file_db.findIndex((n) => n.id === parseInt.parse(req.query.id));
    const updated = { ...file, ...req.body };

    file_db[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const file = getFile(req.query.id);

    if (!file) {
      res.status(404);
      res.end();
      return;
    }
    const i = file_db.findIndex((n) => n.id === parseInt(req.query.id));

    file_db.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
