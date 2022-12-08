// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  const { email, password } = req.body;

  axios
    .post("https://pijar-express-learningg.herokuapp.com/login", { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data });
    });
}