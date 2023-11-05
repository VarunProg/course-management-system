import express, { Request, Response } from "express";
import courseModel from "../model/courseModel";

// create and save new course
export const createNewCourse = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
  }
  // new course
  const newCourse = new courseModel({
    name: req.body.name,
    members: req.body.members,
    coach: req.body.coach,
    description: req.body.description,
  });

  // save new course in database
  newCourse
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `${err.message} : An error occurred while creating the course`,
      });
    });
};

// retrieve and return all course
export const getAllCoursesDetails = (req: Request, res: Response) => {
  courseModel
    .find()
    .then((courses) => {
      res.json(courses);
    })
    .catch((err) => {
      res
        .status(500)
        .json(
          `${err.message} : An error occurred while retreiving the course information`
        );
    });
};

// Get course details by ID
export const getCoursesDetailsById = (req: Request, res: Response) => {
  const courseId = req.params.id;
  courseModel
    .findById(courseId)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      return res.json(course);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Server error" });
    });
};

// update a course by specified courseId
export const updateCourse = (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).send({ message: "data to update can not be empty" });
  }
  const id = req.params.id;
  courseModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `can not update course with ${id} , maybe course not found`,
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error in updating course" });
    });
};

// Delete a course by specified courseId
export const deleteCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  courseModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `can not be deleted course with ${id} , maybe course id is wrong`,
          });
      } else {
        res.send({
          message: "course was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `course can not be deleted with id ${id}` });
    });
};
