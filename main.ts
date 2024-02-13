//@deno-types="npm:@types/express@4"

import express, { Request, Response } from "npm:express";

const app = express();

app.get("/", (req: Request, res: Response): void => {
  const lessonUrl = "https://thesolaropposites.com/lessonalyzer/social-images/";

  //generate a random number between 1 and 191
  const randomNumber = Math.floor(Math.random() * 191) + 1;

  const finalUrl = `${lessonUrl}${randomNumber}.png`;
  res.send(finalUrl);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
