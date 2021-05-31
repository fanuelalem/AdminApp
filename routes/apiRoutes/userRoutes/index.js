const router = require('express').Router();
const {
  getUserStocks,
  deleteUserStockById,
  updateStockById,
   getAllUserEmails,
  addStock,
  getUserCourses,
  addCourse,
  postGrade,
  getMyGrade,
   getAllUsers,
   postTeacher,
   postTotal,
   getTotalPoints,
   postAverage,
   getAverage,
   deleteCourseById,
   updateCourseById
   
} = require('./../../../controllers/userController');

  
const { getCurrentUser, getFilteredUsers } = require('./../../../controllers/profileController');


const { requireAuth } = require('./../../../middlewares/authMiddlewares');
const { response } = require('express');
 

// /api/user/emails
router.get('/emails', getAllUserEmails);

router.route('/postmyteacher')
  .post(requireAuth, postTeacher)
  
  
 


router.route('/profile')
  .get(requireAuth, getCurrentUser);

  

  router.route('/getalluser')
  .get(getAllUsers);

 
 
 
// /api/user/stock
router.route('/stock')
  .get(requireAuth, getUserStocks)
  .post(requireAuth, addStock);

  // /api/user/myimages

  router.route('/mycourses')
  .get(requireAuth, getUserCourses)
  .post(requireAuth, addCourse);

  router.route('/course/:courseid')
  .delete(requireAuth, deleteCourseById)
  .patch(requireAuth, updateCourseById)


  router.route('/mytotal')
  .post(requireAuth, postTotal)
  .get(requireAuth, getTotalPoints)

  router.route('/myaverage')
  .post(requireAuth, postAverage)
  .get(requireAuth, getAverage)


  router.route('/mygrade')
  .get(requireAuth, getMyGrade)
  .post(requireAuth, postGrade);

 
 

// /api/user/stock/:todoID
router.route('/stock/:stockId')
  .delete(requireAuth, deleteUserStockById)
  .put(requireAuth, updateStockById);

 
   

// router.route('/teacher/:teacherid')
//   .get(requireAuth, teacherId);

  

  router.route('/profiles')
  .get(requireAuth, getFilteredUsers);

module.exports = router;
