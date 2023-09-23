//getDataFromToken
// const getDataFromToken = (req) => {
//     try {
//         const token = req.cookies.access_token;
//         console.log(token);
//         if(!token) {
//             throw new Error("No token provided");
//         }

//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

//         console.log("Decoded token:", decodedToken);
//         return decodedToken.id;
//     } catch (error) {
//         console.error("Error in getDataFromToken:", error);
//         // res.status(500).json({message: "getDataFromToken failed"});
//     }
// };