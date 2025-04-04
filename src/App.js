import './App.css';
import { useState, useEffect } from 'react';


  const whoSaidIt = [
    // {
    //   quote: "Politics is when you say you are going to do one thing while intending to do another. Then you do neither what you said, nor what you intended.",
    //   options: ["We by Yevgeny Zamyatin","Saddam Hussein"],
    //   correctAnswer: "Saddam Hussein",
    //   type: "Person"
    // },
    // {
    //   quote: "Make the lie big. Make it simple. Keep saying it, and eventually people will believe it.",
    //   options: ["Adolf Hitler (Germany)", "Lord of the Flies by William Golding"],
    //   correctAnswer: "Adolf Hitler (Germany)",
    //   type: "Person"
    // },
    // {
    //   quote: "The only real power comes out of a long rifle.",
    //   options: ["Joseph Stalin (Soviet Union)", "A Clockwork Orange by Anthony Burgess"],
    //   correctAnswer: "Joseph Stalin (Soviet Union)",
    //   type: "Person"
    // },
    // {
    //   quote: "Those who vote decide nothing. Those who count the vote decide everything.",
    //   options: ["The Hunger Games by Suzanne Collins","Joseph Stalin (Soviet Union)"],
    //   correctAnswer: "Joseph Stalin (Soviet Union)",
    //   type: "Person"
    // },
    // {
    //   quote: "Death is the solution to all problems. No man — no problem.",
    //   options: ["Joseph Stalin (Soviet Union)", "1984 by George Orwell"],
    //   correctAnswer: "Joseph Stalin (Soviet Union)",
    //   type: "Person"
    // },
    // {
    //   quote: "It is better to live one day as a lion than 100 years as a sheep.",
    //   options: ["Animal Farm by George Orwell","Benito Mussolini (Italy)"],
    //   correctAnswer: "Benito Mussolini (Italy)",
    //   type: "Person"
    // },
    // {
    //   quote: "Political power grows out of the barrel of a gun.",
    //   options: ["1984 by George Orwell","Mao Zedong (China)"],
    //   correctAnswer: "Mao Zedong (China)",
    //   type: "Person"
    // },
    // {
    //   quote: "To read too many books is harmful.",
    //   options: ["Fahrenheit 451 by Ray Bradbury","Mao Zedong (China)"],
    //   correctAnswer: "Mao Zedong (China)",
    //   type: "Person"
    // },
    // {
    //   quote: "I am responsible only to God and history.",
    //   options: ["A Clockwork Orange by Anthony Burgess","Francisco Franco (Spain)"],
    //   correctAnswer: "Francisco Franco (Spain)",
    //   type: "Person"
    // },
    // {
    //   quote: "He who protests is an enemy; he who opposes is a corpse.",
    //   options: ["The Giver by Lois Lowry","Pol Pot (Cambodia)"],
    //   correctAnswer: "Pol Pot (Cambodia)",
    //   type: "Person"
    // },
    // {
    //   quote: "The best way to control the opposition is to lead it ourselves.",
    //   options: ["Vladimir Lenin (Soviet Union)", "Animal Farm by George Orwell"],
    //   correctAnswer: "Vladimir Lenin (Soviet Union)",
    //   type: "Person"
    // },
    // {
    //   quote: "Sometimes democracy must be bathed in blood.",
    //   options: ["Augusto Pinochet (Chile)", "The Man in the High Castle by Philip K. Dick"],
    //   correctAnswer: "Augusto Pinochet (Chile)",
    //   type: "Person"
    // },
    
    // {
    //   quote: "If you steal, do not steal too much at a time! You may be arrested. Steal cleverly, little by little.",
    //   options: ["The Children of Men by P.D. James","Mobutu Sese Seko (Zaire/DR Congo)"],
    //   correctAnswer: "Mobutu Sese Seko (Zaire/DR Congo)",
    //   type: "Person"
    // },
    // {
    //   quote: "War is peace. Freedom is slavery. Ignorance is strength.",
    //   options: ["1984 by George Orwell", "Adolf Hitler (Germany)"],
    //   correctAnswer: "1984 by George Orwell",
    //   type: "Book"
    // },
    // {
    //   quote: "Who controls the past controls the future: who controls the present controls the past.",
    //   options: ["Vladimir Lenin (Soviet Union)","1984 by George Orwell"],
    //   correctAnswer: "1984 by George Orwell",
    //   type: "Book"
    // },
    // {
    //   quote: "When there is freedom, there is chaos.",
    //   options: ["Saddam Hussein","We by Yevgeny Zamyatin"],
    //   correctAnswer: "We by Yevgeny Zamyatin",
    //   type: "Book"
    // },
    // {
    //   quote: "We really have to protect people from wrong choices.",
    //   options: ["The Giver by Lois Lowry", "Augusto Pinochet (Chile)"],
    //   correctAnswer: "The Giver by Lois Lowry",
    //   type: "Book"
    // },
    // {
    //   quote: "We live in a society of law and order, where cruelty no longer exists.",
    //   options: ["The Man in the High Castle by Philip K. Dick", "Adolf Hitler (Germany)"],
    //   correctAnswer: "The Man in the High Castle by Philip K. Dick",
    //   type: "Book"
    // },
    // {
    //   quote: "If you don’t want a man unhappy politically, don’t give him two sides to a question to worry him; give him one. Better yet, give him none.",
    //   options: ["Mao Zedong (China)","Fahrenheit 451 by Ray Bradbury"],
    //   correctAnswer: "Fahrenheit 451 by Ray Bradbury",
    //   type: "Book"
    // },
    // {
    //   quote: "The only good human being is a dead one.",
    //   options: ["Animal Farm by George Orwell", "Joseph Stalin (Soviet Union)"],
    //   correctAnswer: "Animal Farm by George Orwell",
    //   type: "Book"
    // },
    {
      quote: "Hope. It is the only thing stronger than fear. A little hope is effective. A lot of hope is dangerous.",
      options: ["Augusto Pinochet (Chile)","The Hunger Games by Suzanne Collins"],
      correctAnswer: "The Hunger Games by Suzanne Collins",
      type: "Book"
    },
    {
      quote: "For the State, obedience to its rules is more important than justice, compassion, or personal liberty.",
      options: ["Benito Mussolini (Italy)","The Children of Men by P.D. James"],
      correctAnswer: "The Children of Men by P.D. James",
      type: "Book"
    },
    {
      quote: "We can destroy what we have written, but we cannot unwrite it",
      options: ["Vladimir Lenin (Soviet Union)","A Clockwork Orange by Anthony Burgess"],
      correctAnswer: "A Clockwork Orange by Anthony Burgess",
      type: "Book"
    },
    {
      quote: "Which is better--to have laws and agree, or to hunt and kill?",
      options: ["Lord of the Flies by William Golding","Pol Pot (Cambodia)"],
      correctAnswer: "Lord of the Flies by William Golding",
      type: "Book"
    }
  ];



function App() {
const [currentQuote, setCurrentQuote] = useState(0);
const [userAnswer, setUserAnswer] = useState('');
const [result, setResult] = useState('');
const [correctCount, setCorrectCount] = useState(0); // To track the number of correct answers


var gameOver = "Game over!";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
// shuffleArray(whoSaidIt);

const handleUserAnswer = (userAnswer) =>{
  setTimeout(8000);
  if (whoSaidIt[currentQuote].correctAnswer === userAnswer) {
    setResult("Correct!");
    setCorrectCount((prevCount) => prevCount + 1);
  } else {
    setResult("Incorrect.");
  }
  setUserAnswer(userAnswer);
  
};

// const checkAnswer = () =>{
//   if(whoSaidIt[currentQuote].correctAnswer == userAnswer){
//     setCorrectCount((prevCount) => prevCount + 1);
//     setResult("Correct!");
//   }else{
//     setResult("Incorrect.")
//   }
// }

const nextQuote = () => {
  if (currentQuote < whoSaidIt.length - 1) {
    setCurrentQuote((prev) => prev + 1);
 
  } else {
    setCurrentQuote(gameOver); 
  }
  setUserAnswer('');
  setResult('');
};

const restart = () =>{
  if (currentQuote === gameOver){
    setCurrentQuote(0);
    setCorrectCount(0);
    setUserAnswer('');
    setResult('');
   
  }
}

useEffect(() => {
  shuffleArray(whoSaidIt);
}, []); 



  return (
    <div className="App">
      <section className="section-one">
        <div className = "welcome-header">
          <h1>Welcome to the Quotes-Game!</h1>
          <p>Slide to view questions</p>
        </div>
      
      
      </section>

      <section className = "section-two">
      {currentQuote === gameOver ? 
      (<div className="over">
        <p>{gameOver}</p>
        <p>You have answered {correctCount} questions correctly!</p>
      <button className="restart-btn" onClick={restart}> Restart </button></div>
      ) : ( <>
      
      <div className = "Options">
      <p>"{whoSaidIt[currentQuote].quote}"</p>
        {whoSaidIt[currentQuote].options.map((option, index) => (
          <button className= "option-btn" key={index} onClick={() => handleUserAnswer(option)}>
          {option}
          
          </button>
        ))}
      </div>
      <p>{result}</p>
      <button className="next-btn" onClick={nextQuote}>Next Quote</button>
      
      </>
        
    )}
    </section>
    </div>
  );
};

export default App;
