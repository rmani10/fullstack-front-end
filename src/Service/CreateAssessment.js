import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAssessment() {
  let navigate = useNavigate();

  const [inputArr, setInputArr] = useState([]);
  const [assessment, setAssessment] = useState({
    categoryName: "",
    numQuestions: 0,
    title: "",
  });

  const { categoryName, numQuestions, title } = assessment;

  const onInputChange = (e) => {
    setAssessment({ ...assessment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8090/quiz/create", assessment);

    // navigate("/");
  };

  function changeHandle() {
    console.log(inputArr);
    setInputArr([...inputArr, assessment]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 offset-md-0 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create Assessment</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Assessment Category name"
                name="categoryName"
                value={categoryName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Number of questions"
                name="numQuestions"
                value={numQuestions}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Assessment Name"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button
              type="submit"
              onClick={changeHandle}
              className="btn btn-outline-primary"
            >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
          <div className="container">
            <div className="py-4">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Assessment Category</th>
                    <th scope="col">Total Questions</th>
                    <th scope="col">Assessment Title</th>
                  </tr>
                </thead>
                <tbody>
                  {inputArr.map((info, ind) => {
                    return (
                      <tr>
                        <th scope="row" key={ind + 1}>
                          {ind + 1}
                        </th>
                        <td>{info.categoryName}</td>
                        <td>{info.numQuestions}</td>
                        <td>{info.title}</td>
                        <td>
                          <button className="btn btn-success">Take Test</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
