// try {
//     const userno = checkuser.MobileNumber;
//     const users = await Users.findOne({MobileNumber:userno});
//     if (users) {
//         // const ispassequal = await becrypt.compare(checkuser.password,users.password)
//         const ispassequal = false
//         if(users.password==checkuser.password){
//           ispassequal = true
//         }
//       if (ispassequal) {
//         res.send("login sucessfully")
        
//       } else {
//         res.send(checkuser)
        
//       }
      
//     } else {
//       res.send("you ar not registered please signup first")

      
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
//   });