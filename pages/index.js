//domain.com/

import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Old Town Germany Munich 2, 124 st",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Old Town Germany Munich 2, 124 st",
    description: "This is first meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Old Town Germany Munich 2, 124 st",
    description: "This is first meetup",
  },
  {
    id: "m4",
    title: "A fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Old Town Germany Munich 2, 124 st",
    description: "This is first meetup",
  },
];

const HomePage = (props) => {
  return <MeetUpList meetups={props.meetups} />;
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

  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
    revalidate: 1,
  }; //always need to return an object
}

export default HomePage;
