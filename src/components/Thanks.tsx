import { ReactElement } from "react";
import "../styles/components/Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Not long to go</h2>
      <p>
        Your opinion is very important, soon you will receive a coupon with 10%
        discount for your next purchase
      </p>
      <p>To complete your assessment, click the submit button below</p>
      <h3>Here's the summary of your review {data.name}:</h3>
      <p className="review-data">
        <span>Product Satisfaction:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comments:</span> {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
