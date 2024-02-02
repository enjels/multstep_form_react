import {
  BsFillEmojiFrownFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfield" name="review" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutra" name="review" required />
          <BsFillEmojiSmileFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiNeutralFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sau experiência com o produto..."
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
