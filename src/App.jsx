// import { update, getClicksValue } from "./redux/userSlice";

// import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import Step from "./Step";
const App = () => {
  // const dispatch = useDispatch();
  // const numOfClicks = useSelector(getClicksValue);

  return (
    <>
      <Counter />
      <Step />
      {/* <button type="button" onClick={() => dispatch(update(5))}>
        Num of clicks : {numOfClicks}
      </button> */}
    </>
  );
};

export default App;
