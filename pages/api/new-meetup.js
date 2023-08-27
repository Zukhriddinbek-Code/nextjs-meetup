// /api/new-meetup - url of this file (here we write backend of this app and api endpoints)
import { MongoClient } from "mongodb";
// The MongoClient class is a class that allows for making Connections to MongoDB.

const Handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body; //this holds the body (data) of incoming request

    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://zuhriddin_ganiev:zuhriddin-tech@cluster-zuhriddin.65mbqpl.mongodb.net/?retryWrites=true&w=majority"
    );
  }
};

export default Handler;
