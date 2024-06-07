//for components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
//for hooks
import { useState } from "react";
import { useForm } from "./hooks/useForm";
//for css
import "./styles/App.css";

type formFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: formFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currenteComponent, changeStep, isLastStep } =
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
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Next</span>
              </button>
            ) : (
              <button type="button">
                <FiSend />
                <span>submit</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
