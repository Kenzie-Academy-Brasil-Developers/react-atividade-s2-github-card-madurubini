function Card({
  apiData: {
    full_name,
    // owner: { avatar_url },
    description,
  },
}) {
  return (
    <div>
      <h3>{full_name}</h3>
      {/* <img src={avatar_url} alt="user-profile"></img> */}
      <p>{description}</p>
    </div>
  );
}
export default Card;
