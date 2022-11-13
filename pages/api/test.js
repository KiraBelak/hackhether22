export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Bad request" });
  }

  //this is a post
  //get the id
  const { id } = req.body;
  res.status(200).json({ id: id, message: "success" });
}
