//domain.com/[id]-detail
import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      description={"this is germany"}
      address={"Germany, calif 17 st"}
      title={"A first meetup"}
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      }
    />
  );
};

export default MeetupDetails;
