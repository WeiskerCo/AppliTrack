interface UserController {
  createUser: (req: any, res: any, next: any) => any;
  login: (req: any, res: any, next: any) => any;
}

const UserController: UserController = {
  createUser: async (req: any, res: any, next: any) => {
    // const { email, password } = req.body;
    console.log(req.body)

    return next();
  },

  login: async (req: any, res: any, next: any) => {

  }
}

module.exports = UserController;