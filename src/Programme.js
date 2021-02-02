const Programme = (propos) => {
  return (
    <div className="programme">
      <div className="time">
        <p>{propos.time}</p>
      </div>
      <div className="image">
        <img src={propos.image} alt="programme-tv" />
      </div>
      <div className="description">
        <h1>{propos.title}</h1>
        <h2>{propos.type}</h2>
        <div>
          <p>{propos.duration}</p>
          <p>{propos.direct ? "direct" : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Programme;
