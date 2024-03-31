import { useDispatch, useSelector } from "react-redux";
import { setStep } from "./redux/actions";

const Step = () => {
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    dispatch(setStep(value));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="step"
          placeholder="step"
          defaultValue={step}
        />
        <button type="submit"> Set Step</button>
      </form>
    </>
  );
};

export default Step;
