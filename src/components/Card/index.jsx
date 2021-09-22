function Card({ apiData }) {
  return (
    <div>
      {apiData.map((item, index) => (
        <div key={index} className="Card">
          <h3>{item.data.full_name}</h3>
          <section className="Content">
            <img src={item.data.owner.avatar_url} alt="user-profile" />
            <p>{item.data.description}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
export default Card;
