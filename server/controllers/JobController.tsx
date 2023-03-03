const dbJob = require('../models/AppModel')

interface JobControllerInterface {
  addJob: (req: any, res: any, next: any) => any;
  findUserJobs: (req: any, res: any, next: any) => any;
  deleteUserJob: (req: any, res: any, next: any) => any;
}


const JobController:JobControllerInterface = {
  addJob: (req: any, res: any, next: any) => {
    const { name, location, status, salaryRange, url } = req.body;
    const userId = req.cookies.user_id;
    // console.log('what is the body: ', req.body);
    console.log('cookie id in add job ', userId)
    
    const values = [name, location, status, salaryRange, url, userId];
    const addQuery = `
    INSERT INTO jobs ( company_name, company_location, status, salary_range, url, user_id )
    VALUES ( $1, $2, $3, $4, $5, $6 )
    `
    // CREATE TABLE jobs (
    //   job_id SERIAL PRIMARY KEY, 
    //   time_stamp date NOT NULL DEFAULT CURRENT_DATE, 
    //   company_name VARCHAR,
    //   company_location VARCHAR, 
    //   status VARCHAR, 
    //   salary_range VARCHAR,
    //   url VARCHAR,
    //   user_id INT, 
    //   PRIMARY KEY (job_id),
    //   FOREIGN KEY (user_id) REFERENCES users(user_id)
    //   )

    // try {
      // const newRow = await dbJob.query(addQuery, values);
      // console.log('added data is: ', newRow)

      console.log('the current uri is: ', process.env.PG_URI)
      dbJob
        .query(addQuery, values)
        .then(data => {
          console.log('what is being console logged here: ', data)
          return next();
        })
        .catch({err: 'Oh no!'})

    // } catch (err) {
    //   return next(err);
    // };
    
  },

  findUserJobs: async (req: any, res: any, next: any) => {
    const userId = req.cookies.user_id;

    console.log('cookie id in find job ', userId)


    const findQuery = `
    SELECT * FROM jobs
    WHERE user_id=${userId}
    `

    try {
      const userJobs = await dbJob.query(findQuery);
      res.locals.userJobs = userJobs.rows;
      console.log('user jobs being sent back ', res.locals.userJobs)

      return next();
    } catch (err) {
      return next(err);
    };
  },

  deleteUserJob: async (req: any, res: any, next: any) => {
    const { jobId } = req.body;
    const deleteQuery = `
    DELETE FROM jobs
    WHERE job_id=${jobId}
    `

    try {
      const deleteJob = await dbJob.query(deleteQuery);
      console.log('deleted job: ', deleteJob)

      return next();
    } catch (err) {
      console.log(err);
    };
  }
};

module.exports = JobController;