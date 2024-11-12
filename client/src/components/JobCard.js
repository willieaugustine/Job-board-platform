// client/src/components/JobCard.js

import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job }) => (
  <div className="job-card">
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.location}</p>
    <Link to={`/jobs/${job._id}`}>View Details</Link>
  </div>
);

export default JobCard;
