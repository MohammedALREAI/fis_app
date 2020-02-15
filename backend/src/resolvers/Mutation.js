const mutation = {


  // cx contain the req and the db

  // ----------- createItem---------------------------------
   async createItem(parent, args, {db}, info) {
    const item = await db.mutation.createItem({
      data: {
        ...args
      }
    },info)

  return item;

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







}
module.exports=mutation
