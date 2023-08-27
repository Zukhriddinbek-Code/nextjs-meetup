//domain.com/[id]-detail
import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      description={props.meetupData.description}
      address={props.meetupData.address}
      title={props.meetupData.title}
      image={props.meetupData.image}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false, // when fallback is false, it means that paths include all supported meetup id values
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
      { params: { meetupId: "m4" } },
    ],

    //this is a meetup id for this the page visited
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A First meetup",
        address: "Germany, calif 17 st",
        description: "This is Germany",
      },
    },
  };
}

export default MeetupDetails;
