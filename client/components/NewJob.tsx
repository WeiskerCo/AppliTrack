import React from 'react';
import axios from 'axios';

interface NewJobProps {
    key: any,
    date: any,
    company: any,
    location: any,
    status: any,
    salary: any,
    jobID: any
  }

const newJob: React.FC<NewJobProps> = (props: any) => {
    const { date, company, location, status, salary, jobID } = props;
    
    const handleClickedDelete = () => {
      axios.delete('api/job/delete', {
        data: {jobID: jobID}
      })
    }
  return (
    <div className='job'>
     <div>{date}</div>
     <div>{company}</div>
     <div>{location}</div>
     <div>{status}</div>
     <div>{salary}</div>
     <button id='delete' onClick={handleClickedDelete}>X</button>
    </div>
  )
}

export default newJob;