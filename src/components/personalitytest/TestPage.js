// import banner from '../../assets/images/pic.jpg';

import { useEffect, useState } from "react";
import { getQuestions } from '../../functions/QuestionApi';

import '../../assets/style/table.scss';
import '../../assets/style/buttons.scss';

import einstein from '../../assets/images/einstein.jpg';
import musk from '../../assets/images/musk.jpg';
import sparrow from '../../assets/images/sparrow.jpg';

const TestPage = () => {
    let [questionNumber, setQuestionNumber] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState([]);
    const [testScore, setTestScore] = useState(0);
    const [selectedScore, setSelectedScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(async () => {
        const response = await getQuestions();
        const data = await response.data["hydra:member"];
        
        setQuestions(data);
        setCurrentQuestion(data[questionNumber]);
    }, []);

    const nextQuestion = () => {
        setQuestionNumber(++questionNumber);
        setTestScore(testScore + selectedScore);
        setCurrentQuestion(questions[questionNumber]);
    }

    const renderHelper = (questions) => {
        if (questions) {
            const answers = currentQuestion.answers;

            return (
                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-inner">
                                <div className="">
                                    {
                                        (isFinished) 
                                        ?
                                            <>
                                                <h1>Your personality test score is: {testScore}</h1>
                                                <h2>So, what does this mean?!</h2>
                                                <p>Look at the table bellow and you can match your personality with some famous people!</p>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Score</th>
                                                            <th>Celebrity</th>
                                                            <th>Message</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Under 10</td>
                                                            <td><img width="150" height="150" src={einstein} /></td>
                                                            <td>Don't worry you are like one of the greatest Scientists of the 20th Century!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Between 10 and 20</td>
                                                            <td><img width="150" height="150" src={musk} /></td>
                                                            <td>That's good news, you can become a billionaire!</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Above 20</td>
                                                            <td><img width="150" height="150" src={sparrow} /></td>
                                                            <td>Woow, looks like we've found another Star!</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <a onClick={() => window.location.replace("/")} className="button button-primary" href="#">
                                                    Go to HomePage
                                                </a>
                                            </>
                                        :
                                        <>
                                            <h1 className="hero-title mt-0">
                                                Question {questionNumber+1}: {currentQuestion.content}                 
                                            </h1>
                                            <ul className="no-bullets">
                                                {
                                                    answers && answers.map((answer, index) => {
                                                        
                                                        return (
                                                            <li key={index}>
                                                                <input onClick={() => setSelectedScore(answer.score)} type="radio" name="answer" id={index} />
                                                                <label htmlFor={index}>{answer.choice}</label>
                                                            </li>
                                                        )
                                                    })  
                                                }
                                            </ul>
                                            <div className="hero-cta">
                                                {
                                                    (questionNumber+1 === questions.length) 
                                                    ? 
                                                        <a onClick={() => setIsFinished(true)} className="button button-primary" href="#">
                                                            Finish Test
                                                        </a>
                                                    : 
                                                        <>
                                                            <a onClick={nextQuestion} className="button button-primary" href="#">
                                                                Next
                                                            </a>
                                                            <a onClick={() => window.location.replace("/")} className="button" href="#">
                                                                Quit Test
                                                            </a>
                                                        </>
                                                }
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }
    };

    return (
        <div className="body-wrap boxed-container">
            {renderHelper(questions)}
        </div>
    );
};

export default TestPage;
