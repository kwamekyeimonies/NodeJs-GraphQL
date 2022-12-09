//They are functions that resolve queries 
const { UserList } =require('../Test-data')
const _= require('lodash')

const resolvers = {
    Query:{
        users(){
            return UserList;
        },
        user:(parent, args)=>{
            const id = args.id
            const user = _.find(UserList,{id})

            return user;
        }
    }
}

module.exports = {resolvers};