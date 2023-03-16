import Card from "./Card";
import RatingButtons from "./RatingButtons";
import starSvg from "./assets/icon-star.svg";
import thankYouSvg from "./assets/illustration-thank-you.svg";
import { useState } from "react";

const RatingContainer = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState("");

  const handleSubmission = () => {
    setSubmitted(true);
  };

  const handleRatingChange = e => {
    setRating(e.target.value);
  };

  return (
    <div className="grow flex justify-center items-center">
      <Card className="w-4/5 sm:w-[400px] ">
        {!isSubmitted && (
          <>
            <div className="bg-dark-blue text-light-grey p-3 rounded-full h-12 w-12 flex justify-center items-center mb-4">
              <img src={starSvg} alt="Star icon" />
            </div>
            <h1 className="text-white text-2xl font-bold mb-4">
              How did we do?
            </h1>
            <p className="mb-4">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <RatingButtons handleRatingSelected={handleRatingChange} />
            <button
              className="bg-orange-500 mx-auto block text-white enabled:hover:bg-orange-700 w-full rounded-full h-12 disabled:opacity-50 mt-4"
              onClick={handleSubmission}
              disabled={rating === ""}
            >
              Submit
            </button>
          </>
        )}
        {isSubmitted && (
          <div className="text-center">
            <img
              src={thankYouSvg}
              alt="Clipart representing information being sent on a mobile device."
              className="mx-auto mb-4"
            />
            <div className="bg-dark-blue text-orange-500 rounded-full w-1/2 h-8 flex justify-center items-center mx-auto mb-4">
              You selected {rating} out of 5
            </div>
            <h1 className="text-white text-2xl font-bold mb-4">Thank you!</h1>
            <p className="text-light-grey">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RatingContainer;
