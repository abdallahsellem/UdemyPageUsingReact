import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/Public/NavBar";
import axios from "axios";
import HomeBage from "./components/FirstPage/HomeBage";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./components/SecondPage/CoursePage";
function App() {
  const [Data, SetData] = useState([]);
  const [HomePageData, SetHomeData] = useState([]);
  const [loading, setloading] = useState(false);
  const [InputCourse, SetInputCourse] = useState("search for anything");
  const TakeInput = (e) => {
    SetInputCourse(e);
  };
  const LoadingData = async () => {
    const x = await axios
      .get("https://api.npoint.io/6d18979fea0c821ddc37/PythonCourses")
      .then((data) => {
        SetData(data.data);
      });
    const z = await axios
      .get("https://api.npoint.io/58f7f8a90de1b34cc211/courses_python")
      .then((data) => {
        SetHomeData(data.data);
      });
    setloading(true);
  };
  useEffect(() => {
    LoadingData();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <NavBar PassContent={TakeInput}></NavBar>
          <Routes>
            <Route
              path="/"
              element={
                <HomeBage desired={InputCourse} CoursesDataa={HomePageData} />
              }
            />

            {Data.map((coursesdata, idx) => {
              return (
                <Route
                  key={idx}
                  path={`pythoncourse/${coursesdata.id}`}
                  element={
                    <CoursePage CoursesDataa={Data[coursesdata.id - 1]} />
                  }
                />
              );
            })}
          </Routes>
        </div>
      ) : (
        <div
          className={"spinner-border"}
          style={{
            marginLeft: "30%",
            marginTop: "10%",
            height: "300px",
            width: "300px",
          }}
          role="status"
        >
          <span className="visually-hidden" style={{ fontSize: "400px" }}>
            Loading...
          </span>
        </div>
      )}
    </>
  );
}

export default App;
