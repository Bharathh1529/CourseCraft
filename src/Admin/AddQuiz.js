import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './AddQuiz.css';

const AddQuiz = () => {
    const [streamName, setStreamName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [streams, setStreams] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStreamId, setSelectedStreamId] = useState(null);

    // Fetch streams and courses
    useEffect(() => {
        const fetchStreams = async () => {
            try {
                const response = await fetch('http://localhost:8080/streams');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched streams:', data); // Debugging line
                    setStreams(data);
                } else {
                    console.error('Failed to fetch streams:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching streams:', error);
            }
        };

        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8080/courses');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched courses:', data); // Debugging line
                    setCourses(data);
                } else {
                    console.error('Failed to fetch courses:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchStreams();
        fetchCourses();
    }, []);

    // Handle adding a question
    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { question: '', options: ['', '', '', ''], correctAnswer: '' }
        ]);
    };

    // Handle removing a question
    const handleRemoveQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    };

    // Handle changes to question text
    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    // Handle changes to options
    const handleOptionChange = (qIndex, oIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    // Handle changes to correct answer
    const handleCorrectAnswerChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].correctAnswer = event.target.value;
        setQuestions(newQuestions);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const quizData = {
            streamName, // Sending streamName directly
            courseTitle: courseName,
            questions
        };

        try {
            const response = await fetch('http://localhost:8080/quizzes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(quizData),
            });

            if (response.ok) {
                alert('Quiz added successfully!');
                setStreamName('');
                setCourseName('');
                setQuestions([]);
            } else {
                console.error('Failed to add quiz:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding quiz:', error);
        }
    };

    return (
        <div className="add-quiz-layout">
            <Sidebar />
            <div className="add-quiz-container">
                <h2>Add New Quiz</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="add-quiz-form">
                        <div className="form-group">
                            <label htmlFor="streamName">Stream Name:</label>
                            <input
                                type="text"
                                id="streamName"
                                value={streamName}
                                onChange={(e) => setStreamName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="courseName">Course Name:</label>
                            <input
                                type="text"
                                id="courseName"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                required
                            />
                        </div>
                        {questions.map((question, qIndex) => (
                            <div key={qIndex} className="question-block">
                                <div className="form-group">
                                    <label>Question {qIndex + 1}:</label>
                                    <input
                                        type="text"
                                        value={question.question}
                                        onChange={(e) => handleQuestionChange(qIndex, e)}
                                        required
                                    />
                                </div>
                                {question.options.map((option, oIndex) => (
                                    <div key={oIndex} className="form-group">
                                        <label>Option {oIndex + 1}:</label>
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                                            required
                                        />
                                    </div>
                                ))}
                                <div className="form-group">
                                    <label>Correct Answer:</label>
                                    <input
                                        type="text"
                                        value={question.correctAnswer}
                                        onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                                        required
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="remove-question-button"
                                    onClick={() => handleRemoveQuestion(qIndex)}
                                >
                                    Remove Question
                                </button>
                            </div>
                        ))}
                        <button type="button" className="add-question-button" onClick={handleAddQuestion}>
                            Add Question
                        </button>
                        <button type="submit" className="submit-button">
                            Submit Quiz
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuiz;
