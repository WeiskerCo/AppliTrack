import React from 'react';

interface NewJobProps {
    key: any,
    date: any,
    company: any,
    location: any,
    status: any,
    salary: any,
  }

const newJob: React.FC<NewJobProps> = (props: any) => {
    const { date, company, location, status, salary } = props

  return (
    <div className='job'>
     <div>{date}</div>
     <div>{company}</div>
     <div>{location}</div>
     <div>{status}</div>
     <div>{salary}</div>
    </div>
  )
}

export default newJob;