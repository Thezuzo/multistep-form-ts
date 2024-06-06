//for components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
//for hooks
import { useForm } from "./hooks/useForm";
//for css
import "./styles/App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  const { currentStep, currenteComponent, changeStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Leave a review</h2>
        <p>
          We are happy with your purchase, use the form below to Evaluate the
          product
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form action="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currenteComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Previous</span>
            </button>
            <button type="submit">
              <GrFormNext />
              <span>Next</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
