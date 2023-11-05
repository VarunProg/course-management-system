import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constant";
import {
  NotFound,
  CourseCreate,
  CourseDelete,
  CourseEdit,
  CourseList,
} from "./routes";
import "bootstrap/scss/bootstrap.scss";
import { Header } from "./components/Header/Header";
import classes from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path={ROUTES.COURSE_CREATE} element={<CourseCreate />} />
        <Route path={`${ROUTES.COURSE_DELETE}/:courseId`} element={<CourseDelete />} />
        <Route path={`${ROUTES.COURSE_EDIT}/:courseId`} element={<CourseEdit />} />
        <Route path={ROUTES.COURSE_LIST} element={<CourseList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
