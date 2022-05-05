const CardFooter = () => {
  return (
    <div className="card__footer">
      <div className="user">
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="user__image"
          className="user__image"
        />
        <div className="user__info">
          <h5>Jane Doe</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
