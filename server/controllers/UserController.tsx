const dbUser = require('../models/AppModel');

interface UserController {
  createUser: (req: any, res: any, next: any) => any;
  login: (req: any, res: any, next: any) => any;
  userExists: (req: any, res: any, next: any) => any;
}

const UserController: UserController = {
  createUser: async (req: any, res: any, next: any) => {
    const { email, picture, given_name, family_name } = req.body;
    const addUser = `
    INSERT INTO users ( Email, Picture, FirstName, LastName )
    VALUES ( $1, $2, $3, $4 )
    `
    const values = [ email, picture, given_name, family_name ]
    console.log(req.body)
    
    if (!res.locals.userExists) {
      try {
        const newUser = await dbUser.query(addUser, values);
        res.locals.user = newUser.rows[0];
  
        return next();
      } catch (err) {
        return next(err);
      };
    } else {
      console.log('User already exists')
      return next();
    }

  },

  login: async (req: any, res: any, next: any) => {
    if (res.locals.userExists) {
      const { email } = req.body;
      const findUser = `SELECT * FROM users
      WHERE Email='${email}'`
      try {
        const user = await dbUser.query(findUser);
        res.locals.user = user.rows[0]
        console.log('user is: ', res.locals.user)
        return next();
      } catch(err) {
        return next(err)
      }
    } else {
      return next();
    }
  },

  userExists: async (req: any, res: any, next: any) => {
    const { email } = req.body;
    const findUser = `
    SELECT EXISTS (SELECT * FROM users
    WHERE Email='${email}')
    `
    console.log(email)
    try {
      console.log('before query')
      const user = await dbUser.query(findUser);
      console.log('after query: ', user.rows[0].exists)
      // res.locals.user = user.rows[0];
      res.locals.userExists = user.rows[0].exists

      return next();
    } catch (err) {
      return next(err);
    };


  }
}

module.exports = UserController;