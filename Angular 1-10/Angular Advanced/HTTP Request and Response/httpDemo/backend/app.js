import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();

// ✅ Use CORS middleware once, before all routes
app.use(cors({
  origin: 'https://4200-idx-angulargit-1743573022604.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev',
  methods: ['GET','PUT','DELETE','POST','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.static("images"));
app.use(bodyParser.json());
app.options('*',cors());

// ✅ Routes

app.get("/", async (req, res) => {
  res.send("HTTP Server is working");
});

app.get("/places", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const fileContent = await fs.readFile("./data/places.json");
  const placesData = JSON.parse(fileContent);
  res.status(200).json({ places: placesData });

  console.log("Get Request is working");
});

app.get("/user-places", async (req, res) => {
  console.log("User place get api hit");
  // return res.status(500).json();
  const fileContent = await fs.readFile("./data/user-places.json");
  const places = JSON.parse(fileContent);
  res.status(200).json({ places });
});

app.post("/user-places", async (req, res) => {
  console.log("Put Request is HIT");
  const placeId = req.body.placeId;
  // return res.status(500).json();

  const fileContent = await fs.readFile("./data/places.json");
  const placesData = JSON.parse(fileContent);

  const place = placesData.find((place) => place.id === placeId);

  const userPlacesFileContent = await fs.readFile("./data/user-places.json");
  const userPlacesData = JSON.parse(userPlacesFileContent);

  let updatedUserPlaces = userPlacesData;

  if (!userPlacesData.some((p) => p.id === place.id)) {
    updatedUserPlaces = [...userPlacesData, place];
  }

  await fs.writeFile(
    "./data/user-places.json",
    JSON.stringify(updatedUserPlaces)
  );

  res.status(200).json({ userPlaces: updatedUserPlaces });

});

app.delete("/user-places/:id", async (req, res) => {
  const placeId = req.params.id;

  const userPlacesFileContent = await fs.readFile("./data/user-places.json");
  const userPlacesData = JSON.parse(userPlacesFileContent);

  const placeIndex = userPlacesData.findIndex((place) => place.id === placeId);

  let updatedUserPlaces = userPlacesData;

  if (placeIndex >= 0) {
    updatedUserPlaces.splice(placeIndex, 1);
  }

  await fs.writeFile(
    "./data/user-places.json",
    JSON.stringify(updatedUserPlaces)
  );

  res.status(200).json({ userPlaces: updatedUserPlaces });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "404 - Not Found" });
});

// Start server
app.listen(8080, () => {
  console.log("Server started successfully on Node 8080");
});
