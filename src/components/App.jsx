import { useState } from 'react';
import Statistics from './FeedBack/Statistics/Statistics';
import FeedbackOptions from './FeedBack/FeedbackOptions/FeedbackOptions';
import Notification from './FeedBack/Notification/Notification';
import Section from './FeedBack/Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCounterChange = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good * 100) / (good + neutral + bad));
  };
  const keys = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  return (
    <>
      <Section>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={keys} onLeaveFeedback={handleCounterChange} />
      </Section>

      <Section>
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
export default App;
