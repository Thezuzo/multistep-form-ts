import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "../styles/components/Steps.css";

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Review</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Send</p>
      </div>
    </div>
  );
};

export default Steps;
