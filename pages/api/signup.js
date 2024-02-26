import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModels'
import bcrypt from 'bcrypt'
connect()
export default async function handler(req, res){
    if(req.method === 'POST'){
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;
        var doesUserExist = await User.findOne({email: email});
        if(doesUserExist){
            //const compare = await bcrypt.compare('ritvik12',doesUserExist.password); # for comparison
            return res.status(200).json({message: "User already exists"});
        }
        else{
            const hashPassword = await bcrypt.hash(password, 10);
                const user = new User({
                    email,
                    username,
                    password: hashPassword,
                });

                await user.save();
                console.log("User added to database");
                return res.status(201).json({ message: 'success' }); 
            }
        }
    }

