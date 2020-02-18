
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mutation = {


  // cx contain the req and the db

  // ----------- createItem---------------------------------
   async createItem(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    },info)

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("toke", token, {
      httpOnly: true,
      secure: true,
        maxAge:1000*60*60*24*360  // this for one year
})

  return user;

  },
    // -----------  End createItem---------------------------------
    // -----------   updateItem---------------------------------


  async updateItem(parent, args, { db }, info) {
// check if item is exit befor the do any thhink
    // we need dont remove or updaute the is
    const data = { ...args }
    delete data.id;
    return await db.mutation.updateItem({
      data: data,
      where: { id: args.id }
    }, info);


    }




    // -----------   END updateItem---------------------------------
,
    // -----------    DeleteItem---------------------------------

  async deleteItem(parent, args, { db }, info) {

    const where = args.id;

    // if the item is found
    const item = await db.query.item({ where }, `{id,title}`)

    if (item) {
      return ctx.mutation.deleteItem({ where },info)
    }

},

      // -----------    End DeleteItem---------------------------------

/// signup mutation start  ----------------------------------


  async signup(parent, args, { db }, info) {

    //steps
    // 1 we nedd hash password in the app by bycipts
    // jwt to user
    args.email =args.email.toLowerCase();
    const bcryptPassword = bcrypt.hash(args.password, 12);
    return user = await db.mutation.createUser({
      data: {
        name: args.name,
        password:args.password,
        email: args.email,
        permissions:{set:["USER"]}

      }

    },info);


  }



// signup end ----------------------------------



}
module.exports=mutation
