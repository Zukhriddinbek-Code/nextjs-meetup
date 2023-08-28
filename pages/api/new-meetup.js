// /api/new-meetup - url of this file (here we write backend of this app and api endpoints)
import { MongoClient } from "mongodb";
// The MongoClient class is a class that allows for making Connections to MongoDB.

const Handler = async (req, res) => {
  if (req.method === "POST") {
    //this holds the body (data) of incoming request
    const data = req.body;

    //connecting coming request (Data) to mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://zuhriddin_ganiev:zuhriddin-tech@cluster-zuhriddin.65mbqpl.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    //creating collection with name of 'meetups'
    const meetupsCollection = db.collection("meetups");

    const result = meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    //sending back response status and object
    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default Handler;
