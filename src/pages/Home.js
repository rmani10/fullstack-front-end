import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const allQuestions = await axios.get(
      "http://localhost:8080/question/allQuestions"
    );
    setQuestions(allQuestions.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Question</th>
              <th scope="col">Category</th>
              <th scope="col">Difficulty Level</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, i) => (
              <tr>
                <th scope="row" key={question.id}>
                  {question.id}
                </th>
                <td>{question.questionTitle}</td>
                <td>{question.category}</td>
                <td>{question.difficultylevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
