// client/src/pages/JobDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: ${job.salary}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
