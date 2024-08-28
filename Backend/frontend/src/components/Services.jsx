
import data from "../Data/data.json";
import Card from "./Card";
import "./Services.css"

function Services() {
  // Map through the data and pass the necessary props to the Card component
  let content = data.map((d, index) => {
    return (
      <Card
        key={index}
        title={d.title}
        description={d.description}
        imageUrl={d.imageUrl}
        id={d.id}
      
      />
    );
  });

  return (
   <>
    <div className="heading">What We Do</div>
   <div className="grid">
    {content}
   </div>
   
   </>
  );
}

export default Services;
