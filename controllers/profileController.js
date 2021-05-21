const { User,Course } = require('../models/index');

module.exports = {


  getCurrentUser: async (req, res) => {
 
    try {
      
       const getUserData = await User.findById(req.user._id ).populate('myCourses').populate('myTeacher').populate('myTotal').populate('myAverage')
    
      return res.status(200).json(getUserData);
      // console.log(getUserData,'getting user data??')
          
    } catch (e) {
      return res.status(403).json({ e });
    } 
  },
  teacherId: async (req,res)=>{
 
    
    try {
      // const getUserData = await User.find({user: req.user._id}, ('myCourses'))
      //  const getUserData = await (await User.findById(req.user._id )).populate('myCourses');
       const getUserData = await User.findById(req.user._id ).populate('myCourses').populate('myGrade') ;
    
      return res.status(200).json(getUserData);
          
    } catch (e) {
      return res.status(403).json({ e });
    } 

  },
getFilteredUsers: async (req, res) => {
    try {
      const getOtherUsers = await User.find({ _id: { $ne: req.user._id } }).populate('myCourses').populate('myTeacher').populate('myAverage') ;
      return res.status(200).json(getOtherUsers);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};

// getFilteredUsers: async (req, res) => {
 
//   try {

//     const getOtherUsers = await User.find({ _id: { $ne: req.user._id } }).populate('myImages');
//     return res.status(200).json(getOtherUsers);
//   } catch (e) {
//     return res.status(403).json({ e });
//   }
// },
// };

