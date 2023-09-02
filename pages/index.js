//domain.com/
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetUpList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NEXT Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active NEXT meetups!"
        />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
};

/*  
export async function getServerSideProps(context) {
  //context can be usefull for authentication cases
  const req = context.req;
  const res = context.res;

  //fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
}
*/

export async function getStaticProps() {
  //fetch data from api
  //this only executes on the server side

  const client = await MongoClient.connect(
    "mongodb+srv://zuhriddin_ganiev:MxjXRYnqaVfAwsfO@cluster-zuhriddin.65mbqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //creating collection with name of 'meetups'
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); //toArray() get array of data

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }; //always need to return an object
}

export default HomePage;
