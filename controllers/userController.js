const { text } = require('body-parser');
const { values } = require('d3');
const { User,Stock, Image,Course,Grade, Teacher,NewTeacher,Total,Average } = require('../models/index');
const { find } = require('../models/Stock');
  
module.exports = {
  addStock: async (req, res) => {
    const { text } = req.body;
    console.log(req.body,'text??')
    if (!text) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newStock = await new Stock({ text, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myStocks.push(newStock);
      await req.user.save();
      return res.status(200).json(newStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteCourseById: async (req, res) => {
    const { courseid } = req.params;
    
   try {
      const courseToDelete = await Course.findById(courseid);
     if (!courseToDelete) {
       return res.status(401).json({ error: 'No todo with that Id' });
     }

   
     if (req.user._id.toString() !== courseToDelete.user.toString()) {
       return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
     }
      const deletedCourse = await Course.findByIdAndDelete(courseid);
      return res.json(deletedCourse);
   } catch (e) {
     return res.status(403).json({ e });
   }
 },

  addCourse: async (req, res) => {
    
 
    console.log(req.body,'req body')


    const { subject,route,code } = req.body;
    
   
    try {
      const myNewCourse = await new Course({ subject,route,code, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myCourses.push(myNewCourse);
      await req.user.save();
      return res.status(200).json(myNewCourse);
    } catch (e) {
      return res.status(403).json({ e });
    }

    
  },
  postTotal: async (req, res) => {
    
 
    console.log(req.body,'req body')


    const { points } = req.body;
    
   
    try {
      const newTotal = await new Total({ points, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myAverage.push(newTotal);
      await req.user.save();
      return res.status(200).json(newTotal);
    } catch (e) {
      return res.status(403).json({ e });
    }

    
  },
  postAverage: async (req, res) => {
    
 
    console.log(req.body,'req body')


    const { average } = req.body;
    
   
    try {
      const newAverage = await new Average({ average, user: req.user._id }).save();
      // const newStock = await Stock.create({ text, user: req.user._id });
      req.user.myAverage.push(newAverage);
      await req.user.save();
      return res.status(200).json(newAverage);
    } catch (e) {
      return res.status(403).json({ e });
    }

    
  },
  postGrade: async (req, res) => {
    
    const {points,overAllGrade} = req.body

     console.log(req.body,'course??')
    if (!points) {
      return res.status(400).json({ error: 'You must provide score' });
    }
    try {
       const newGrade = await new Grade({ points,overAllGrade, user: req.user._id }).save();
       req.user.myGrade.push(newGrade);
     
      await req.user.save();
      return res.status(200).json(newGrade);
    } catch (e) {
      return res.status(403).json({ e });
    }
  }
  ,
 
  getUserByEmail: async (req,res)=>{
    try{
      const users = await User.find()
      console.log(users,'this is users')
      if(!users){
        return res.status(404).json({error:'no user found'});
      }
      return res.status(200).json(users);
    }
    catch(e){
      return res.status(403).json({e})
    }
  },
   
   
  teacherId: async (req,res)=>{
 
 
 const {teacherid} = req.params

console.log(req.params, 'req params')

console.log(req.user,'req')

try {
  const findTeacherById = await Teacher.findById(teacherid)
const getUserData = await User.findById(req.user._id).populate('myCourse').populate('myTeachers')
console.log(findTeacherById,' finding teacher by id')
req.user.myTeachers.push(findTeacherById)
await req.user.save();
return res.status(200).json([getUserData,findTeacherById])
  
} catch (e) {
  return res.status(403).json({ e });

}

  },
  getAllUsers: async (req, res) => {
    try {
      const myUser = await User.find().populate('myTeachers');
      if (!myUser) {
        return res.status(200).json({ error: 'No users found' });
      }
      return res.json(myUser);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  
  getUserStocks: async (req, res) => {
    try {
      // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
      
      const stocks = await Stock.find({ user: req.user._id });
      return res.json(stocks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTotalPoints: async (req, res) => {
    try {
      // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
      
      const mypoints = await Total.find({ user: req.user._id });
      return res.json(mypoints);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAverage: async (req, res) => {
    try {
      // const user = await User.findById(req.user._id).populate('todos','text');
      // return res.status(200).json(user.stocks)
      
      const myaverage = await Average.find({ user: req.user._id });
      return res.json(myaverage);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  postTeacher: async (req, res) => {
    
    const {email,courses} = req.body
    console.log(req.body,'req body')
    


    try {
      const newTeacher = await new NewTeacher({email,courses,user:req.user._id}).save();
      req.user.myTeacher.push(newTeacher)
      await req.user.save();
      return res.status(200).json(newTeacher)
    } catch (e) {
      return res.status(403).json({ e });

    }
    
 
  },
  
  getMyGrade: async (req, res) => {
    try {
      const grade = await Grade.find({ user: req.user._id });
      return res.json(grade);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getUserCourses: async (req, res) => {
    try {
     
      const courses = await Course.find({ user: req.user._id });
      return res.json(courses);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
 

  deleteUserStockById: async (req, res) => {
    // grab stockId from req.params
    const { stockId } = req.params;
    try {
      // First find the todo by Id
      const stockToDelete = await Stock.findById(stockId);
      if (!stockToDelete) {
        return res.status(401).json({ error: 'No todo with that Id' });
      }
      // console.log('current logged in users id', req.user._id)
      // console.log('id of the user that the todo belongs to', stockToDelete.user)
      // return res.status(200).json('hello')
      // Check if the todo does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      if (req.user._id.toString() !== stockToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      //  otherwise, delete the todo
      const deletedStock = await Stock.findByIdAndDelete(stockId);
      // Respond back with the deleted todo
      return res.json(deletedStock);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
   getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateCourseById: async (req, res) => {

    console.log(req.params,'req.params')
    console.log(req.body,'req body')
    const {courseid} = req.params
    const {code} = req.body
    if(!code){
      return res.status(400).json({error:'you must provide a pin'})
    }
    const courseToUpdate = await Course.findById(courseid)
    console.log(courseToUpdate,'course to update')
    //   Grab stockId from params
      // const { mycoursesId } = req.params;
      // //  grab text and completed from the database
      // const { mygrade } = req.body;
      // // if(!text){
      // //   return res.status(400).json({error:'you must provide a text'})
      // // }
  
      // try {
      //   const courseToUpdate = await Course.findById(mycoursesId);
      //   if (!courseToUpdate) {
      //     return res.status(404).json({ error: 'No todo with that Id'});
      //   }
      //   if (req.user._id.toString() !== courseToUpdate.user.toString()) {
      //     return res.status(401).json({ error: "You cannot update a todo that's not yours" });
      //   }
      //   const updatedCourse = await Course.findByIdAndUpdate(mycourseseId,
      //     { mygrade },
      //     { new: true });
      //   return res.json(updatedCourse);
      // } catch (e) {
      //   return res.status(403).json({ e });
      // }
    },
  updateStockById: async (req, res) => {
    //   Grab stockId from params
      const { stockId } = req.params;
      //  grab text and completed from the database
      const { text, completed } = req.body;
      // if(!text){
      //   return res.status(400).json({error:'you must provide a text'})
      // }
  
      try {
        const stockToUpdate = await Stock.findById(stockId);
        if (!stockToUpdate) {
          return res.status(404).json({ error: 'No todo with that Id'});
        }
        if (req.user._id.toString() !== stockToUpdate.user.toString()) {
          return res.status(401).json({ error: "You cannot update a todo that's not yours" });
        }
        const updatedStock = await Stock.findByIdAndUpdate(stockId,
          { completed, text },
          { new: true });
        return res.json(updatedStock);
      } catch (e) {
        return res.status(403).json({ e });
      }
    },
};


