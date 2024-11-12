// client/src/pages/Jobs.js

import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <h2>Job Listings</h2>
      {jobs.length ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <p>No job listings available.</p>
      )}
    </div>
  );
};

export default Jobs;
