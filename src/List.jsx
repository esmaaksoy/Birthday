const List = ({people}) => {
  return (
    <div className="card">
      {people.map(({ id, name, birthday, image }) => (
        <div key={id} className="person">
        <img src={image} alt="" />
        <div className="title">
        <h4>{name}</h4>
        <p>{birthday}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default List;
