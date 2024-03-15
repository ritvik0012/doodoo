import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModels'
import cookie from 'cookie'
connect()

export default async function handler(req,res){
    const user = await User.find({})
    console.log(user);
    res.status(200).json(user);
}