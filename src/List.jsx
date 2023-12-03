const List = ({ people }) => {
  return (
    <div >
      {people.map(({ id, name, age, image }) => (
        <div>
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{age}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
