import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
