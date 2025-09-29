// // // // // // // // // // // const users = {
// // // // // // // // // // //     name : "John",
// // // // // // // // // // //     kidneys : [{
// // // // // // // // // // //         healthy: false
// // // // // // // // // // //     }],
// // // // // // // // // // //     name : "Jack",
// // // // // // // // // // //     kidneys : {
// // // // // // // // // // //         healthy : true
// // // // // // // // // // //     }
    
// // // // // // // // // // // }

// // // // // // // // // // //  const johnKidneys = users.find(user => user.name === "John");
// // // // // // // // // // //     console.log(johnKidneys);


// // // // // // // // // // const equipments = [
// // // // // // // // // //   {
// // // // // // // // // //     name: "television",
// // // // // // // // // //    categories : "appliance"
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     name: "fridge",
// // // // // // // // // //     category: "appliance"
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     name: "t-shirt",
// // // // // // // // // //     categories : "clothes"
// // // // // // // // // //   }
// // // // // // // // // // ];

// // // // // // // // // // // Find John and access his kidneys
// // // // // // // // // // const john = equipments.find(user => user.categories === "appliance");
// // // // // // // // // // console.log(john.name);
// // // // // // // // // const express = require("express");

// // // // // // // // // const app = express();

// // // // // // // // // const users = [
// // // // // // // // //   {
// // // // // // // // //     name: "John",
// // // // // // // // //     kidneys: [{ healthy: false }],
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     name: "Jack",
// // // // // // // // //     kidneys: [{ healthy: true }],
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // app.get("/", function (req, res) {
// // // // // // // // //   let numberOfKidney = 0;
// // // // // // // // //   let totalnumberOfHealthyKidney = 0;

// // // // // // // // //   // loop through all users
// // // // // // // // //   users.forEach((user) => {
// // // // // // // // //     numberOfKidney += user.kidneys.length;

// // // // // // // // //     user.kidneys.forEach((kidney) => {
// // // // // // // // //       if (kidney.healthy) {
// // // // // // // // //         totalnumberOfHealthyKidney++;
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   });

// // // // // // // // //   const numberOfUnhealthyKidney =
// // // // // // // // //     numberOfKidney - totalnumberOfHealthyKidney;

// // // // // // // // //   res.json({
// // // // // // // // //     numberOfKidney,
// // // // // // // // //     totalnumberOfHealthyKidney,
// // // // // // // // //     numberOfUnhealthyKidney,
// // // // // // // // //   });
// // // // // // // // // });

// // // // // // // // // app.listen(3000);






// // // // // // // // // // creating an HTTP server with the help of express
// // // // // // // // // // express is not a node bundeled lib


// // // // // // // // const express = require("express")

// // // // // // // // const app = express()

// // // // // // // // const users = [{
// // // // // // // //     name: "John",
// // // // // // // //     kidneys: [{
// // // // // // // //         healthy: false
// // // // // // // //     }],
    
// // // // // // // // },{
// // // // // // // //     name : "Jack",
// // // // // // // //     kidneys: [{
// // // // // // // //         healthy: true
// // // // // // // //     }]
// // // // // // // // }];

// // // // // // // // app.get("/", function(req, res){
// // // // // // // //     const johnKidney = users[0].kidneys
// // // // // // // //     const jackKidney = users[1].kidneys
// // // // // // // //     const numberOfKidney = johnKidney.length + jackKidney.length 
// // // // // // // //     let numberOfHeatlhyKidneyofjohnKidney = 0
// // // // // // // //     let numberOfHeatlhyKidneyofjackKidney = 1
// // // // // // // //     let totalnumberOfHealthyKidney = numberOfHeatlhyKidneyofjackKidney + numberOfHeatlhyKidneyofjohnKidney
// // // // // // // //      users.forEach((user) => {
// // // // // // // //     numberOfKidney += user.kidneys.length;

// // // // // // // //     user.kidneys.forEach((kidney) => {
// // // // // // // //       if (kidney.healthy) {
// // // // // // // //         totalnumberOfHealthyKidney++;
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   });
    
// // // // // // // //     const numberOfUnhealthyKidney = numberOfKidney - totalnumberOfHealthyKidney;

// // // // // // // //     res.json({
// // // // // // // //         numberOfKidney,
// // // // // // // //         totalnumberOfHealthyKidney,
// // // // // // // //         numberOfUnhealthyKidney
// // // // // // // //     })
    
// // // // // // // // })
// // // // // // // // app.listen(3000)








// // // // // // creating an HTTP server with the help of express
// // // // // // express is not a node bundeled lib

// // // // // localhost:3000/?n==3  here n is the query parameter


// // // // const express = require("express")
// // // // const app = express()

// // // // const users = [{
// // // //     name: "manik",
// // // //     kidney: [{
// // // //         healthy: true
// // // //     }]
// // // // }]
// // // // app.use(express.json())

// // // // app.get("/", (req, res) => {
// // // //     const manikKidney = users[0].kidney
// // // //     const numofKidney = manikKidney.length
// // // //     let numOfHealthyKidney = 0;
// // // //     let numrOfUnhealthyKidney = 0;
// // // //     for (let i = 0; i < manikKidney.length; i++) {
// // // //        if(manikKidney[i].healthy){
// // // //         numOfHealthyKidney++;
// // // //        }else{
// // // //         numrOfUnhealthyKidney++;
// // // //        }
        
// // // //     }
// // // //     res.json({
// // // //         numofKidney,
// // // //         numOfHealthyKidney,
// // // //         numrOfUnhealthyKidney
// // // //     })
// // // // })

// // // // app.post("/", (req, res)=>{
// // // //     const isHealthy = req.body.isHealthy
// // // //     users[0].kidney.push({
// // // //         healthy: isHealthy
// // // //     })

// // // //     res.json({
// // // //         msg: "post request is done"
// // // //     })
// // // // })

// // // // app.put("/", (req, res)=>{

    
// // // //  for (let i = 0; i < users[0].kidney.length; i++) {
// // // //     users[0].kidney[i].healthy= false;
    
// // // //  }
    

// // // //    return res.json({mesage : "abc"})
// // // // })

// // // // app.delete("/", (req, res)=>{
// // // //     const newKidney = []
// // // //     for (let i = 0; i < users[0].kidney.length; i++) {
// // // //         if (users[0].kidney[i].healthy)
// // // //             newKidney.push({
// // // //             healthy: true
// // // //             })
        
// // // //     }
// // // //     res.json({
// // // //         msg: "deleted"
// // // //     })
// // // // })

// // // // function numofunhealthykidneydetected (){
    
// // // // }
// // // // app.listen(3000, ()=>{
// // // //     console.log("server is running on http//localhost:3000");
    
// // // // })














































// // // // // app.get('/a', (req, res)=>{
// // // // //     res.json()
// // // // // })

// // // // // app.listen(3000,()=>{
// // // // //     console.log("server started on http://localhost:3000/")
// // // // // });


















// // // // // // // app.get--It listens for GET requests at a specified route.

// // // // // // The callback function receives two arguments: req (request) and res (response).

// // // // // // Inside the callback, you can define what response to send back to the client, like HTML, JSON, or plain text.

// // // // // // It is commonly used to serve web pages, retrieve data, or provide API endpoints. it is used to define route handler 
// // // // // // ("/"( this is the route like localhost:3000/-- {ye hai root iske baad sab aayega}), function (req, res)(ye callback fn hai){
// // // // // // //     res.send ("hello in this http server we use app.get where "/"(this is the route) to get the req and then we use res.send (res =response) to send the data or else to response to the request")
// // // // // // // })























// // // // // // // // // // // app.get--It listens for GET requests at a specified route.

// // // // // // // // // // The callback function receives two arguments: req (request) and res (response).

// // // // // // // // // // Inside the callback, you can define what response to send back to the client, like HTML, JSON, or plain text.

// // // // // // // // // // It is commonly used to serve web pages, retrieve data, or provide API endpoints. it is used to define route handler 
// // // // // // // // // // ("/"( this is the route like localhost:3000/-- {ye hai root iske baad sab aayega}), function (req, res)(ye callback fn hai){
// // // // // // // // // // //     res.send ("hello in this http server we use app.get where "/"(this is the route) to get the req and then we use res.send (res =response) to send the data or else to response to the request")
// // // // // // // // // // // })











// // // // // // // const express = require("express");
// // // // // // // const app = express();

// // // // // // // const users = [{
// // // // // // //     name: "John",
// // // // // // //     kidney: [{ healthy: false }]
// // // // // // // }];

// // // // // // // app.get("/", function (req, res) {
// // // // // // //     const johnKidney = users[0].kidney;   
// // // // // // //     const numberOfKidney = johnKidney.length;
// // // // // // //     let numberOfHealthyKidney = 0;

// // // // // // //     for (let i = 0; i < johnKidney.length; i++) {
// // // // // // //         if (johnKidney[i].healthy) {      
// // // // // // //             numberOfHealthyKidney++;
// // // // // // //         }
// // // // // // //     }

// // // // // // //     const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

// // // // // // //     res.json({
// // // // // // //         numberOfKidney,
// // // // // // //         numberOfHealthyKidney,
// // // // // // //         numberOfUnhealthyKidney
// // // // // // //     });
// // // // // // // });

// // // // // // // app.listen(3000, ()=>{
// // // // // // //     console.log("the server is running on port 3000");
    
// // // // // // // });

// // // // // // const express = require("express")
// // // // // // const app =express()

// // // // // // const users = [{
// // // // // //     name: "Manas",
// // // // // //     liver:[
// // // // // //         { healthy: true }
// // // // // //     ]
// // // // // // }]

// // // // // // app.get("/", function(req, res){
// // // // // //     const manasLiver = users[0].liver
// // // // // //     const numberOfLiver = manasLiver.length
// // // // // //     let numberOfHealthyLiver = 0;
// // // // // //     for (let i = 0; i < manasLiver.length; i++) {
// // // // // //         if(manasLiver[i].healthy){
// // // // // //             numberOfHealthyLiver++;
// // // // // //         }
        
       
        
// // // // // //     }
// // // // // //     const numberOfUnhealthyLiver = numberOfLiver - numberOfHealthyLiver;
// // // // // //     res.json({
// // // // // //         numberOfLiver,
// // // // // //         numberOfHealthyLiver,
// // // // // //         numberOfUnhealthyLiver,
// // // // // //     })
// // // // // // })
// // // // // app.put("/", (req, res) =>{
// // // // //     let numofHealthyLungs = 0;
// // // // //     let numOfUnhealthyLungs = 0;
// // // // //     users.forEach(user => {
// // // // //         user.lungs.forEach(lungs => {
// // // // //           if(user.lungs.healthy){
// // // // //         numofHealthyLungs++
// // // // //      }  
// // // // //        else{
// // // // //         numOfUnhealthyLungs++;
// // // // //        } });

// // // // // // app.listen(3000, ()=>{
// // // // // //     console.log("the server is running at http//localhost:3000");
    
// // // // // // })



// // // // const juju =  [1,2,3,4
// // // // ]

// // // // const lulu = juju.filter((n) => {
// // // //     if (n % 3 === ){
// // // //         return true;
    
// // // //     }else{
// // // //         return false;
// // // //     }
// // // // })
// // // // console.log(lulu);

// // // const express = require("express")
// // // const app = express()

// // // app.get("/health-checkup", (req, res)=> {
// // //     const username = req.query.username
// // //     const password = req.query.password
// // //     const kidneyId = req.body.kidneyId
// // //     if((username !== "abhi" || password !=="Pass") ){
// // //         res.status(400).json({msg: "bad request of input"})
// // //         return
// // //     }
// // //         if((kidneyId !== 1 && kidneyId !== 2)){
// // //             res.status(400).json({
// // //                 msg: "bad request kidney"
// // //             })
// // //             return
           
// // //         } 
// // //             res.json({
// // //                 msg: "bad input"
// // //             })
        

// // //     }
// // // )
// // // app.listen(3000, ()=>{
// // //     console.log("the server is running");
    
// // // })



// // const express = require("express")
// // const app = express()

// // app.get("/health-checkup", (req, res)=> {
// //     const username = req.headers.username
// //     const password = req.headers.password
// //     const kidneyId = req.query.kidneyId
// //     if((username != "abhi" || password != "Pass") ){
// //         res.status(400).json({msg: "bad request of input"})
// //         return
// //     }
// //         if((kidneyId != 1 && kidneyId != 2)){
// //             res.status(400).json({
// //                 msg: "bad request kidney"
// //             })
// //             return
           
// //         } 
// //             res.json({
// //                 msg: "kidney is healthy"
// //             })
        

// //     }
// // )
// // app.listen(3000, ()=>{
// //     console.log("the server is running");
    
// // })

// // const express = require ("express")
// // const z = require ("zod")
// // const app = express()


// // app.use(express.json())

// // app.post("/health-checkup", (req, res) => {
// //     const kidneys = req.body.kidneys
// //     const kidneysLength = kidneys.length

// //     res.send("you have " + kidneysLength + " kidneys")
// // })

// // //global catches

// // app.use((err, req, res, next) =>{
// //     erorCount++;
// //    res.json({
// //      msg: "server crashed"
// //    })
// // });

// // app.listen(3000,()=>{
// //     console.log("this server is running at 3000");
    
// // })
//     const express = require("express")
// const zod = require("zod")
// const app = express()

// //{
// // emai: zod.string
// // password: zod.string
// // country: ("in") or ("us")
// //}

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country: zod.literal("IN").or(z.literal("US")),
//     kidneys: zod.array(zod.number())
// })
// app.use(express.json())

// app.post("/health-checkup",(req, res)=>{
//     const kidneys = req.body.kidneys
//     const response = schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg: "bad input or server error"
//         })
//     } else{
//         res.send({
//             response
//         })
//     }
// })

// app.listen(3000)







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
