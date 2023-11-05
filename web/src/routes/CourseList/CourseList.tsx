import React, { FC, useState } from "react";
import classNames from "classnames";
import classes from "./CourseList.module.scss";
import {
  deleteCourseById,
  getAllCoursesDetails,
} from "../../services/api";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/constant";
import { CustomModal } from "../../components";

export const CourseList: FC = () => {
  const [onDeleteAction, setOnDeleteAction] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    isLoading: isCourseDataLoading,
    isError: isCourseDataError,
    data: courseData,
    error: courseDataError,
    remove: cancelCourseData,
  } = useQuery(["courseData", onDeleteAction], async () => {
    const data = await getAllCoursesDetails();
    return data;
  });

  const navigate = useNavigate();

  const addNewCourse = () => {
    navigate(ROUTES.COURSE_CREATE);
  };

  const editCourse = (courseId: string) => {
    navigate(`${ROUTES.COURSE_EDIT}/${courseId}`);
  };

  // no need to navigate from here
  const deleteCourse = (courseId: string) => {
    deleteCourseById(courseId)
      .then(() => {
        setOnDeleteAction(!onDeleteAction);
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
        // Handle the error
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate(ROUTES.COURSE_LIST);
  };

  return (
    <Container className={classes.main}>
      <Row>
        <Col md={1}></Col>
        <Col md={10} className={classes.button}>
          <button onClick={addNewCourse}>Add Course</button>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          {courseData.data.length > 0 ? courseData?.data.map((course, index) => (
            <Card className={classes.card} key={course._id}>
              <Row>
                <Col md={2} className={classes.cardImg}>
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <div className={classes.cardBody}>
                      <Card.Title>{course.name}</Card.Title>
                    </div>
                    <Card.Text className={classes.cardDescription}>
                      {course.description}.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={1}>
                  <div className={classes.cardButtons}>
                    <span className={classes.editButton}>
                      {" "}
                      <Pencil onClick={() => editCourse(course._id)} />
                    </span>
                    <span className={classes.deleteButton}>
                      {" "}
                      <Trash
                        color="red"
                        onClick={() => deleteCourse(course._id)}
                      />
                    </span>
                  </div>
                </Col>
              </Row>
            </Card>
          )):
          <Card className={classes.noCard}>
            <h3>No course found</h3>
            <h6>Please add new course</h6>
          </Card>
          }
        </Col>
      </Row>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        message="Course deleted successfully"
      />
    </Container>
  );
};
