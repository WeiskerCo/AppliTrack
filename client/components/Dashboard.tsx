import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";
import JobList from "../components/JobList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const dashboard: React.FC = () => {
  const [jobList, setJobList]: any = useState([
    {
      date: "2/27/23",
      company: "apple",
      location: "cupertino",
      status: "applied",
      salary: "120,000-135,000",
    },
    {
      date: "2/22/23",
      company: "microsoft",
      location: "sf",
      status: "rejected",
      salary: "110,000-120,000",
    },
  ]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [salaryRange, setSalaryRange] = useState("0-60,000");
  const [url, setUrl] = useState("");

  const handleDelete = (theKey): void => {
    setJobList((jobList) => {
      return [...jobList].filter((element) => element.key !== theKey);
    });
  };

  useEffect(() => {
    axios
      .get("/api/jobs/getJobs")
      .then((response: any) => {
        console.log("DATA", response.data);
        setJobList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleJobSubmit = (): void => {
    console.log("submitted");
    axios
      .post("/api/jobs/addJob", {
        name: company,
        location: location,
        status: status,
        salaryRange: salaryRange,
        url: url,
        //userID
      })
      .then((response) => {
        console.log(response.data);
        setJobList(response.data);
      })
      .catch((err) => console.log(err));
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="dashboard">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <div>Add a Job!</div>
          <button onClick={closeModal}>Close</button>
          <label id="company">
            {" "}
            Company:
            <input type="text" onChange={(e) => setCompany(e.target.value)} />
          </label>
          <label id="location">
            {" "}
            Location:
            <input type="text" onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label id="status">
            {" "}
            Status:
            <input type="text" onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label id="salaryRange">
            {" "}
            Salary Range:
            <select
              name="salaryRange"
              onChange={(e) => setSalaryRange(e.target.value)}
            >
              <option value="0-60,000">0-60,000</option>
              <option value="60,001-80,000">60,001-80,000</option>
              <option value="80,001-95,000">80,001-95,000</option>
              <option value="95,001-110,000">95,001-110,000</option>
              <option value="110,001-130,000">110,001-130,000</option>
              <option value="130,000+">130,000+</option>
            </select>
          </label>
          <label id="url">
            {" "}
            Job URL:
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
          </label>
          <button
            onClick={(e) => {
              closeModal();
              handleJobSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </Modal>

      <h2>Job Application List</h2>
      <button className="newjob-button" onClick={openModal}>
        Add New Job
      </button>
      <div id="headers">
        <p>Date</p>
        <p>Company</p>
        <p>Location</p>
        <p>Status</p>
        <p>Salary</p>
        <div className="space"></div>
      </div>
      <JobList jobList={jobList} handleDelete={handleDelete} />
    </div>
  );
};

export default dashboard;
