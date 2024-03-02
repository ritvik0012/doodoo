import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModels'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

connect()

export default async function handler (req,res) {
    console.log("api endpoint hit")
    var email = req.body.email;
    var password = req.body.password;
    var doesUserExist = await User.findOne({email: email});
    if(!doesUserExist){
        return res.status(200).json({message:"Email is not registered!"});
    }
    else {
        const compare = await bcrypt.compare(password,doesUserExist.password);
        if(compare){
            const token = jwt.sign({email: doesUserExist.email, isAdmin: doesUserExist.isAdmin, documentId: doesUserExist.documentId}, "secret");
            const cookieOptions = {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 30 * 24 * 60 * 60, 
                path: '/',
            };
            console.log(doesUserExist)

            const serializedCookie = cookie.serialize('doodoo', token, cookieOptions);

    // Set the 'Set-Cookie' header with the serialized cookie
            res.setHeader('Set-Cookie', serializedCookie);
            console.log("Y: "+ token)
            return res.status(200).json({message: "success", doesUserExist});
        }
        else{
            return res.status(200).json({message: "Incorrect email or password"})
        }
    }
}