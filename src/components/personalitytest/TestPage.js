// import banner from '../../assets/images/pic.jpg';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from '../../functions/QuestionApi';
import Pagination from "../pagination/Pagination";

import '../../assets/style/table.scss';
import '../../assets/style/buttons.scss';

const TestPage = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState([]);

    useEffect(async () => {
        const response = await getQuestions();
        const data = await response.data["hydra:member"];
        console.log(questionNumber);
        
        setQuestions(data);
        setCurrentQuestion(data[questionNumber]);
    }, []);

    const nextQuestion = () => {
        console.log(questionNumber);
        setQuestionNumber(questionNumber+1);
        console.log(questionNumber);
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
                                    <h1 className="hero-title mt-0">
                                        Question {questionNumber+1}: {currentQuestion.content}                 
                                    </h1>
                                    <ul className="no-bullets">
                                        {
                                            answers && answers.map((answer, index) => {
                                                return (
                                                    <li key={index}>
                                                        <input type="radio" name="answer" id={index} />
                                                        <label htmlFor={index}>{answer.choice}</label>
                                                    </li>
                                                )
                                            })  
                                        }
                                    </ul>
                                    <div className="hero-cta">
                                        <a onClick={nextQuestion} className="button button-primary" href="#">
                                            Next
                                        </a>
                                    </div>
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
