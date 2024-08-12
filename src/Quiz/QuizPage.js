// QuizPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizPage.css';

const QuizPage = ({ match }) => {
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const courseTitle = match.params.courseTitle;

    useEffect(() => {
        const fetchQuizAndQuestions = async () => {
            try {
                const quizResponse = await axios.get(`http://localhost:8080/quizzes/${courseTitle}`);
                setQuiz(quizResponse.data);

                const questionsResponse = await axios.get(`http://localhost:8080/questions/${courseTitle}`);
                setQuestions(questionsResponse.data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchQuizAndQuestions();
    }, [courseTitle]);

    return (
        <div className='quiz-page'>
            <h1>Quiz for {courseTitle}</h1>
            {questions.map(question => (
                <div key={question.id} className='question'>
                    <p>{question.questionText}</p>
                    <ul>
                        <li>{question.optionA}</li>
                        <li>{question.optionB}</li>
                        <li>{question.optionC}</li>
                        <li>{question.optionD}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default QuizPage;
