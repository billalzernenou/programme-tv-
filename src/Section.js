import programmes from "./programme-tv.json";
import Programme from "./Programme";

const Section = () => {
  return (
    <div className="section">
      {programmes.map((element, index) => {
        return (
          <Programme
            key={index}
            title={element.title}
            time={element.time}
            type={element.type}
            image={element.image}
            direct={element.direct}
            duration={element.duration}
          />
        );
      })}
    </div>
  );
};

export default Section;
