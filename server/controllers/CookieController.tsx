interface CookieController {
  createCookie: (req: any, res: any, next: any) => any;
}

const CookieController: CookieController = {
  createCookie: async (req: any, res: any, next: any) => {
    const { user } = res.locals;
    console.log('user ', user)
    const user_id = user.id
    res.cookie('user_id', user_id, { httpOnly: true });
    return next();
  }
}

module.exports = CookieController;