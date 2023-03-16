const RatingButtons = ({ handleRatingSelected }) => {
  return (
    <div className="flex flex-row justify-evenly">
      {[1, 2, 3, 4, 5].map(r => (
        <RatingButton
          rating={r}
          key={r}
          handleRatingSelected={handleRatingSelected}
        />
      ))}
    </div>
  );
};

const RatingButton = ({ rating, handleRatingSelected }) => {
  return (
    <>
      <input
        type="radio"
        name="rating"
        value={rating}
        id={`rating-${rating}`}
        className="hidden"
        onChange={handleRatingSelected}
      ></input>
      <label
        htmlFor={`rating-${rating}`}
        className="bg-dark-blue text-light-grey p-3 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer"
      >
        {rating}
      </label>
    </>
  );
};

export default RatingButtons;
