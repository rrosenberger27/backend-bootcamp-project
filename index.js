import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import {db} from "./util/FirebaseInit.js";
import {collection, getDocs} from "firebase/firestore";

const app = express()
const port = 8080

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000" ,
    })
);

app.get("/", async(req,res) => {
    res.send("Hello World!");
});

app.get("/Quarterbacks", async(req,res) => {
    // Get a reference to the collection "Students"
    const collectionRef = collection(db, "quarterbacks");
    // Get all docs from the collection
    const collectionSnap = await getDocs(collectionRef);
    // Make a list of those documents
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data());
    });
    // return them
    res.send(docs);
});

//Starts the program
app.listen(port, () => {
    console.log("listening on port", port);
});