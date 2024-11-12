// src/pages/JobListing.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs")
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <div className="job-list">
        {jobs.map(job => <JobCard key={job._id} job={job} />)}
      </div>
    </div>
  );
};

export default JobListing;
