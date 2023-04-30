import './index.css';

import React, { FC } from 'react';

import { ReactComponent as ResultLogo } from '../../images/illustration-thank-you.svg';
interface ResultProps {
  result: number;
}
const Result: FC<ResultProps> = ({ result }) => {
  return (
    <div className="resultContainer">
      <ResultLogo className="resultLogo" />
      <div className="resultData">
        <b>You selected {result} out of 5</b>
      </div>
      <div className="areaText">
        <div className="thankMessage">
          <h2>Thank you!</h2>
        </div>
        <div className="text">
          <p>
            We appreciate you taking the time to give rating. If you ever neet more support, dont hesitate to get in
            touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
