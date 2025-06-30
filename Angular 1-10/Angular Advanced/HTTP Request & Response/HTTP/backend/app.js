// import fs from "node:fs/promises"; import bodyParser from "body-parser"; import express from "express"; import cors from "cors";

// const app = express();

// app.use(express.static("images")); app.use(bodyParser.json());

// console.log('Hello Khush backend started');

// // CORS
// app.use((req, res, next) => { 
//   res.setHeader("Access-Control-Allow-Origin", "*"); 
//   res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE"); 
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   next(); 
// });


// app.get('/',(req,res) => {
//   res.send('Backend is running!');
// })
// app.get("/places", async (req, res) => { 
//   try { 
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     const fileContent = await fs.readFile("./data/places.json"); 
//     const placesData = JSON.parse(fileContent); 
//     res.status(200).json({ places: placesData }); 
//   } 
//   catch (err) { 
//     console.error(err); res.status(500).json({ error: "Failed to read places data" }); 
//   } 
// });

// app.get("/user-places", async (req, res) => { 
//   try { 
//     const fileContent = await fs.readFile("./data/user-places.json"); 
//     const places = JSON.parse(fileContent); 
//     res.status(200).json({ places }); 
//   } 
//   catch (err) { 
//     console.error(err); 
//     res.status(500).json({ error: "Failed to read user places" }); 
//   } 
// });

// app.put("/user-places", async (req, res) => {
//    try { 
//     const placeId = req.body.placeId;
//     const fileContent = await fs.readFile("./data/places.json");
//     const placesData = JSON.parse(fileContent);
//     const place = placesData.find((place) => place.id === placeId);

//     const userPlacesFileContent = await fs.readFile("./data/user-places.json");
//     const userPlacesData = JSON.parse(userPlacesFileContent);

// let updatedUserPlaces = userPlacesData;
// if (!userPlacesData.some((p) => p.id === place.id)) {
//   updatedUserPlaces = [...userPlacesData, place];
// }

// await fs.writeFile(
//   "./data/user-places.json",
//   JSON.stringify(updatedUserPlaces)
// );

// res.status(200).json({ userPlaces: updatedUserPlaces });

// } 
// catch (err) { 
//   console.error(err); res.status(500).json({ error: "Failed to update user places" });
//  } 
// });

// app.delete("/user-places/:id", async (req, res) => {
//    try { const placeId = req.params.id;
//     const userPlacesFileContent = await fs.readFile("./data/user-places.json");
//     const userPlacesData = JSON.parse(userPlacesFileContent);

//     const placeIndex = userPlacesData.findIndex((place) => place.id === placeId);

// let updatedUserPlaces = userPlacesData;
// if (placeIndex >= 0) {
//   updatedUserPlaces.splice(placeIndex, 1);
// }

// await fs.writeFile(
//   "./data/user-places.json",
//   JSON.stringify(updatedUserPlaces)
// );

// res.status(200).json({ userPlaces: updatedUserPlaces });

// } catch (err) { 
//   console.error(err); res.status(500).json({ error: "Failed to delete user place" }); }
// });

// // 404 
// app.use((req, res, next) => { 
//   if (req.method === "OPTIONS") { 
//     return next(); 
//   } 
//   res.status(404).json({ message: "404 - Not Found" }); 
// });

// app.listen(3000, '0.0.0.0', () => { 
//   console.log("Server started on port 3000"); 
// });

import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE"); 
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    next();
})

app.get('/',(req,res) => {
  res.send('Hello Google IDX');
});

app.listen(3000,()=>{
  console.log('Running on Port 3000');
})
