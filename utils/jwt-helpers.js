import jwt from "jsonwebtoken";
function jwtTokens({user_id,user_name,user_email}){
const user = {};
const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'20s'});
const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'40s'});
}

export {jwtTokens};