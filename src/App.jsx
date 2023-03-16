import Attribution from "./Attribution";
import RatingContainer from "./RatingContainer";

function App() {
  return (
    <div className="bg-darkest-blue text-white flex flex-col justify-center items-center h-full w-full">
      <RatingContainer />
      <Attribution />
    </div>
  );
}

export default App;
