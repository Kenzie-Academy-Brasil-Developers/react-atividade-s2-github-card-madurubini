function Card({ apiData }) {
  return (
    <div>
      {apiData.map((item) => (
        <>
          <h3>{item.full_name}</h3>
          <img src={item.owner.avatar_url} alt="user-profile" />

          <p>{item.description}</p>
        </>
      ))}
    </div>
  );
}
export default Card;
