import "./App.css";
import TopInterface from "./components/TopInterface";
import MiddlePage from "./components/MiddlePage";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [Data, SetData] = useState([]);
  const [loading, setloading] = useState(false);
  const LoadingData = async () => {
    const x = await axios
      .get("https://api.npoint.io/f9698bdf99e6b9b6b469/PythonCourses")
      .then((data) => {
        SetData(data.data);
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
          <TopInterface mydata={Data}></TopInterface>
          <MiddlePage mydata={Data}></MiddlePage>
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
