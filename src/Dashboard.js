import Carousel from "react-bootstrap/Carousel";

export function Dashboard() {
  return (
    <div className="home">
      <div className="title">
        <h3>CRUD student teacher management app</h3>
      </div>
      <div className="slides">
        <Carousel>
         
            <img
              className="d-block w-100"
              src="https://api.time.com/wp-content/uploads/2014/07/international-students-us-schools.jpg"
              alt="First slide"
            />
         
        </Carousel>
      </div>
    </div>
  );
}