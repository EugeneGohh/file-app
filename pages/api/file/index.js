import nc from "next-connect";
import file_db from "../../../src/data/mock-db";

const handler = nc()
  .get((req, res) => {
    res.json({ data: file_db });
  })
  .post((req, res) => {
    const id = Date.now();
    const file = { ...req.body, id };

    file_db.push(file);
    res.json({ data: file });
  });

export default handler;
