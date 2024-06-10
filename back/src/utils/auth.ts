import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const key = process.env.PRIVATE_KEY;

type objetoType = {
    _id: mongoose.Types.ObjectId
    userName: string
}

export const createToken = (objeto: objetoType) => {
    return jwt.sign(objeto, key ? key : '', {expiresIn: '400h'});
};