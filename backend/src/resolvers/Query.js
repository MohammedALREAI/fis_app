const  {forwardTo} = require('prisma-binding');
const query = {


  items: forwardTo('db'),
  item: forwardTo('db')


}
module.exports =query;
