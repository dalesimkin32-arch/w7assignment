// import all the packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// setup express
// app.use()

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});
// create / endpoint just to test
app.get("/", (req, res) => {
  res.status(200).json(`I am Groot, I am Groute!`); // was going to be just plant based genes - unlucky Groot!
});

// create end point that queries the database for 'posts' and returns them

app.get("/usefulgenes", async (req, res) => {
  // fetch all jokes from sql table
  const result = await db.query(`SELECT * FROM usefulgenes`);

  res.json(result.rows);
});

// create a POST endpoint that inserts new posts from the client into your database
app.post("/usefulgenes", async (req, res) => {
  // When the client sends up information is always in the request.body
  const body = req.body;

  const gene_nameFromClient = req.body.gene_name;
  const applicationFromClient = req.body.application;
  const source_organismFromClient = req.body.source_organism;
  const image_descriptionFromClient = req.body.image_description;
  const image_urlFromClient = req.body.image_url;
  const primary_article_urlFromClient = req.body.primary_article_url;

  // we use $1, $2, ... as placeholders so we aren't just putting whatever is sent to us into the string.
  const data = await db.query(
    `INSERT INTO usefulgenes (gene_name, application, source_organism, image_description, image_url, primary_article_url) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      gene_nameFromClient,
      applicationFromClient,
      source_organismFromClient,
      image_descriptionFromClient,
      image_urlFromClient,
      primary_article_urlFromClient,
    ]
  );

  res.json({ status: "Useful Gene data uploaded to database" });
});

/* relevant data from DBase
    gene_id                          - unique key from DB
    gene_name VARCHAR(100),
    application TEXT,
    source_organism VARCHAR(100),
    image_description TEXT,
    image_url TEXT,                  - mostly fails webpage urls not images so need re-sourcing
    primary_article_url TEXT         - added in to spawn a link to oen in new window if can
*/

// app.listen()

app.listen(8080, () => {
  console.log("Server started on https://w7assignment.onrender.com");
});

// example of server as reminder:-
// https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week04/09-database-monorepo-jokes-app/server/server.js
// run command reminder: cd into my server and run node --watch server

/* app.listen("8080", () => {
  console.log(`Server running`);
});   */
