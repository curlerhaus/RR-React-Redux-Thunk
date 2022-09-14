import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { imageSlice } from "./features/dataSlice";

function App() {
  // your logic goes here!

  return (
    <div className="App">
      <div>
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <input onChange={(e) => {}} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
    </div>
  );
}
console.log("Get Image: ", imageSlice);
export default App;
