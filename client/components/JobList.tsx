import React from "react";
import NewJob from "../components/NewJob";

interface JobListProps {
  jobList: any[];
  handleDelete: any
}

const jobList: React.FC<JobListProps> = (props: any) => {
  const { jobList } = props;

  return (
    <div>
      {jobList &&
        jobList.map((obj: any, i: any) => (
          <NewJob
            key={i}
            date={new Date(obj.time_stamp).toDateString()}
            company={obj.company_name}
            location={obj.company_location}
            status={obj.status}
            salary={obj.salary_range}
            jobID={obj.id}
          />
        ))}
    </div>
    // dataTypes.map(dataType => {
    //     return <NewJob />
    // })
  );
};

export default jobList;
