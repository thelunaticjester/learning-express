const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "1234";

app.use(express.json());

const users = [
  {
    email: "abhi@gmail.com",
    password: "123",
    name: "Abhi",
  },
  {
    email: "vivek@gmail.com",
    password: "234",
    name: "Vivek",
  },
  {
    email: "manik@gmail.com",
    password: "345",
    name: "Manik",
  },
];

const userExist = (email, password) => {
  const userPresent = users.find(
    (user) => user.email === email && user.password === password
  );
  if (userPresent) {
    return true;
  } else {
    return false;
  }
};
app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!userExist(email, password)) {
    return res.status(403).json({
      msg: "the user doesn't exist",
    });
  }
  let token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  try {
    const decode = jwt.verify(token, jwtPassword);
    const email = decode.email;
    res.json({
    TheUser : users.filter((user) => (user.email === email ? false : true))
    })
  } catch (err) {
    res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});




















// const express = require("express")
// const jwt = require("jsonwebtoken")
// const app = express()
// const jwtPassword = "12345"

// app.use(express.json())

// const users = [
//     {
//         email: "abhi@gmail.com",
//         password: "123",
//         name: "Abhi"
//     },
//     {
//         email: "vivek@gmail.com",
//         password: "234",
//         name: "Vivek"
//     },
//     {
//         email: "manik@gmail.com",
//         password: "345",
//         name: "Manik"
//     }

// ]

// const userExist = (email, password) =>{
//    const userPresent = users.find((user) => user.email === email && user.password === password)
//    if(userPresent){
//     return true;

//    }else{
//     return false;
//    }
// }

// app.post("/signin", (req, res)=> {
//     // console.log(req.body);

//     const email = req.body.email
//     const password = req.body.password

//     if (!userExist(email, password)) {
//     return res.status(403).json({
//         msg: "the user doesn't exist"
//     });
//     }
//     let token = jwt.sign({email: email}, jwtPassword)
//     return res.json({
//         token,
//     })
// })

// app.get("/users", (req, res)=>{
//    let token = req.headers.authorization

//     try {
//     const decode = jwt.verify(token, jwtPassword)
//     const email = decode.email

//     res.json({
//         Theuser: users.filter((user)=> user.email === email ? false: true)
//     })
//     } catch (error) {
//         return res.status(403).json({
//         msg:"invalid token"
//         })

//     }
// })

// app.listen(3000, ()=>{
//     console.log("the server is running");





























// })

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const app = express();
// const jwtPassword = "123455";

// app.use(express.json());

// const TheUsers = [
//   {
//     username: "jagjeevan@gmail.com",
//     password: "234567",
//     name: "Jagjeevan",
//   },

//   {
//     username: "amrit@gmail.com",
//     password: "123456",
//     name: "Amrit",
//   },

//   {
//     username: "harsh@gmail.com",
//     password: "123321",
//     name: "Harsh",
//   },
// ];
// const userExist = (username, password) => {
//   const userExists = TheUsers.find(
//     (user) => user.username === username && user.password === password
//   );
//   if (userExists) {
//     return true;
//   } else {
//     return false;
//   }
// };

// app.post("/signin", (req, res) => {
//   // console.log(req.body);

//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExist(username, password)) {
//     return res.status(403).json({
//       msg: "the user doesn't exist",
//     });
//   }
//   let token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });
// app.get("/users", (req, res) => {
//     console.log(req.headers);

//   const token = req.headers.authorization;
//   try {
//     const decode = jwt.verify(token);
//     const username = decode.username;
//     //return a list of users other than this username

//     res.json({
//       users: TheUsers.filter((user) => {
//         if (user.username === username){
//             return true
//         }else{
//             return false
//         }
//       }),
//     });
//   } catch (error) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("the server is running on port 3000");
// });
