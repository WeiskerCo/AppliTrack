import React from 'react';
import NewJob from '../components/NewJob'

interface JobListProps {
    jobList: any[];
  }
  
const jobList: React.FC<JobListProps> = (props: any) => {
    const { jobList } = props
    const newJob = jobList.map((obj: any, i: any) => 
    <NewJob 
    key = {i}
    date = {obj.date}
    company = {obj.company}
    location = {obj.location}
    status = {obj.status}
    salary = {obj.salary}
    />
)
  return (
    <div>
        {newJob}
    </div>
    // dataTypes.map(dataType => {
    //     return <NewJob />
    // })
  )
}

export default jobList;