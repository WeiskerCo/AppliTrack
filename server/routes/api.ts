const express = require('express');
const router = express.Router();

const jobController = require('../controllers/JobController')
const userController = require('../controllers/UserController')
const cookieController = require('../controllers/CookieController')
const { addJob, findUserJobs, deleteUserJob } = jobController;
const { createUser, login, userExists } = userController;
const { createCookie } = cookieController

// for user routes
router.post('/auth/oauth', userExists, login, createUser, createCookie, (req: any, res: any) => {
  return res.status(200).json({"mmmmmm": "cookiessssss"})
})

router.post('/auth/createUser', createUser, (req: any, res: any) => {
  return res.status(200).json({"wow": "incredible"});
});

router.post('/auth/login', login, (req: any, res: any) => {
  return res.status(200).send('Login Successful');
});

// for job routes
router.post('/jobs/addJob', addJob, findUserJobs, (req: any, res: any) => {
  return res.status(200).send(res.locals.userJobs);
});

router.get('/jobs/getJobs', findUserJobs, (req: any, res: any) => {
  return res.status(200).json(res.locals.userJobs);
});

router.delete('/jobs/deleteJob', deleteUserJob, findUserJobs, (req: any, res: any) => {
  return res.status(200).json(res.locals.userJobs);
});

module.exports = router;