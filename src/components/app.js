import { useState } from 'react';
import Home from './home';
import Question from './question';
import End from './end';

function App() {
  const [currentDisplay, setcurrentDisplay] = useState('home');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const shuffle = (arr) => {
    let m = arr.length;
    while (m) {
      let i = Math.floor(Math.random() * m--);
      [arr[i], arr[m]] = [arr[m], arr[i]];
    }
    return arr;
  };

  return (
    <div>
      {currentDisplay === 'home' && (
        <Home
          setcurrentDisplay={setcurrentDisplay}
          shuffle={shuffle}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      )}
      {currentDisplay === 'question' && (
        <Question
          setcurrentDisplay={setcurrentDisplay}
          shuffle={shuffle}
          score={score}
          setScore={setScore}
          questions={questions}
        />
      )}
      {currentDisplay === 'end' && (
        <End setcurrentDisplay={setcurrentDisplay} score={score} />
      )}
    </div>
  );
}

export default App;
