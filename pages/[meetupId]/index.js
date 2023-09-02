//domain.com/[id]-detail
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="decsription" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        description={props.meetupData.description}
        address={props.meetupData.address}
        title={props.meetupData.title}
        image={props.meetupData.image}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://zuhriddin_ganiev:MxjXRYnqaVfAwsfO@cluster-zuhriddin.65mbqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //creating collection with name of 'meetups'
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //only include id and no other fields

  client.close();

  return {
    fallback: "blocking", // when fallback is false, it means that paths include all supported meetup id values
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),

    //this is a meetup id for this the page visited
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://zuhriddin_ganiev:MxjXRYnqaVfAwsfO@cluster-zuhriddin.65mbqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //creating collection with name of 'meetups'
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
