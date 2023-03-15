import Card from "./Card";

const RatingContainer = () => {
  return (
    <div className="grow flex justify-center items-center">
      <Card className="w-4/5 sm:w-[400px] ">
        {/* <!-- Rating state start --> */}
        How did we do? Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering! 1 2 3 4 5
        Submit
        {/* <!-- Rating state end --> */}
        {/* <!-- Thank you state start --> */}
        You selected RATING out of 5 Thank you! We appreciate you taking the
        time to give a rating. If you ever need more support, don’t hesitate to
        get in touch!
        {/* <!-- Thank you state end --> */}
      </Card>
    </div>
  );
};

export default RatingContainer;
