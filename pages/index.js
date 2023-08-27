//domain.com/
import { useEffect, useState } from "react";
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

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send http request and fetch data

    setLoadedMeetups(DUMMY_MEETUP);
  }, []);

  return <MeetUpList meetups={loadedMeetups} />;
};

export default HomePage;
