import './index.css';

import React, { FC } from 'react';

import { ReactComponent as Star } from '../../images/icon-star.svg';
import CircleButton from '../circle-buttons';
interface RateProps {
  handleRate: (rateValue: number) => void;
  handlePage: () => void;
}
const Rate: FC<RateProps> = ({ handleRate, handlePage }) => {
  return (
    <div className="rateContainer">
      <div className="starBackground">
        <Star className="star" />
      </div>
      <div className="textArea">
        <h2>How did we do?</h2>

        <div className="paragraph">
          <p>
            <b>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve
              our offering!
            </b>
          </p>
        </div>
      </div>
      <div className="buttonsArea">
        <CircleButton onClick={() => handleRate(1)} value={1} />
        <CircleButton onClick={() => handleRate(2)} value={2} />
        <CircleButton onClick={() => handleRate(3)} value={3} />
        <CircleButton onClick={() => handleRate(4)} value={4} />
        <CircleButton onClick={() => handleRate(5)} value={5} />
      </div>
      <button onClick={handlePage} className="submitButton">
        <b>S U B M I T</b>
      </button>
    </div>
  );
};

export default Rate;
