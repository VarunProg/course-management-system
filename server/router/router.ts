import express from "express";
import { createNewCourse, getAllCoursesDetails, updateCourse, deleteCourse, getCoursesDetailsById } from "../controller/controller"

const router = express.Router();

router.get('/getCourse', getAllCoursesDetails);
router.get('/getCourse/:id', getCoursesDetailsById);
router.post('/api/course', createNewCourse);
router.put('/api/course/:id', updateCourse);
router.delete('/api/course/:id', deleteCourse);

export default router;