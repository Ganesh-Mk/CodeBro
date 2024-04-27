import React from 'react';
import { useDispatch } from 'react-redux';
import { addProblemObj } from '../store/problemObjSlice';
import { Link } from 'react-router-dom';
import { images } from '../javascripts/images';
import '../style/problemBoxContainer.scss';
import AllquesObject from '../javascripts/data';

const ProblemDisplayContainer = ({ problem }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const selectedProblem = AllquesObject.find(
      (item) => item.heading === problem.heading
    );
    dispatch(addProblemObj(selectedProblem));
  };

  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        <div className="statusContainer">
          {problem.isSolved && <img src={images.solved} alt="Solved" />}
        </div>
        <div className='numberdisplayer'>{problem.number}</div>
        <Link to="/coding" onClick={handleClick} className="problemDisplayer">
          {problem.heading}
        </Link>
      </div>
      <div className="problemBoxPart2">
        <div className="difficultyDisplayer">{problem.difficulty}</div>
        <div className="attempts">2</div>
      </div>
    </div>
  );
};

export default ProblemDisplayContainer;
