import { useEffect, useState } from "react";
import axios from "axios";
import Context from "../Context/Context";

export default function Provider(props) {
  let studentsInitialValue = {
    name: "",
    email: "",
    phoneno: "",
    department: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    id: "",
    teacher: "",
  };
  let teachersInitialValue = {
    name: "",
    email: "",
    phoneno: "",
    department: "",
    salary: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    id: "",
  };
  const [studentData, setStudentData] = useState(studentsInitialValue);
  const [newStudentData, setnewStudentData] = useState(studentsInitialValue);
  const [createstudent, setcreatestudent] = useState("");
  const [teacherData, setteacherData] = useState(studentsInitialValue);
  const [newteacherData, setnewteacherData] = useState(studentsInitialValue);
  const [createteacher, setcreateteacher] = useState("");

  // const getstudentData = () => {
  //   fetch("https://643670b38205915d34f387a3.mockapi.io/students")
  //     .then((data) => data.json())
  //     .then((res) => {
  //       setStudentData(res);
  //     });
  // };

  const getstudentData = () => {
    axios
      .get("https://643670b38205915d34f387a3.mockapi.io/students")
      .then((res) => {
        if (res.status === 200) {
          setStudentData(res.data);
        }
      });
  };

  useEffect(() => {
    getstudentData();
  }, []);

  // const handleDeleteStudent = (id) => {
  //   fetch("https://643670b38205915d34f387a3.mockapi.io/students/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((data) => data.json())
  //     .then((res) => {
  //       getstudentData();
  //     });
  // };
  const handleDeleteStudent = (id) => {
    axios
      .delete("https://643670b38205915d34f387a3.mockapi.io/students/" + id)
      .then((res) => {
        getstudentData();
      });
  };

  const createStudent = (id) => {
    if (id) {
      axios
        .put(
          "https://643670b38205915d34f387a3.mockapi.io/students/" + id,
          newStudentData
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(newStudentData);
            setnewStudentData(studentsInitialValue);
          }
          getstudentData();
        });
    } else {
      axios
        .post(
          "https://643670b38205915d34f387a3.mockapi.io/students",
          newStudentData
        )
        .then((res) => {
          if (res.status === 200) {
            setnewStudentData(studentsInitialValue);
          }
          getstudentData();
        });
    }
  };

  const getstudentById = (id) => {
    let index = studentData.findIndex((value) => value.id === id);
    setnewStudentData(studentData[index]);
  };

  // const getteacherData = () => {
  //   fetch("https://643670b38205915d34f387a3.mockapi.io/teachers")
  //     .then((data) => data.json())
  //     .then((res) => {
  //       setteacherData(res);
  //     });
  // };
  const getteacherData = () => {
    axios
      .get("https://643670b38205915d34f387a3.mockapi.io/teachers")
      .then((res) => {
        if (res.status === 200) {
          setteacherData(res.data);
        }
      });
  };

  useEffect(() => {
    getteacherData();
  }, []);

  // const handleDeleteteacher = (id) => {
  //   fetch("https://643670b38205915d34f387a3.mockapi.io/teachers/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((data) => data.json())
  //     .then((res) => {
  //       getteacherData();
  //     });
  // };
  const handleDeleteteacher = (id) => {
    axios
      .delete("https://643670b38205915d34f387a3.mockapi.io/teachers/" + id)
      .then((res) => {
        getteacherData();
      });
  };

  // const createTeacher = (id) => {
  //   if (id) {
  //     fetch("https://643670b38205915d34f387a3.mockapi.io/teachers/" + id, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newteacherData),
  //     }).then((res) => {
  //       setnewteacherData(teachersInitialValue);
  //       getteacherData();
  //     });
  //   } else {
  //     fetch("https://643670b38205915d34f387a3.mockapi.io/teachers", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newteacherData),
  //     }).then((res) => {
  //       setnewteacherData(teachersInitialValue);
  //       getteacherData();
  //     });
  //   }
  // };
  const createTeacher = (id) => {
    if (id) {
      axios
        .put(
          "https://643670b38205915d34f387a3.mockapi.io/teachers/" + id,
          newteacherData
        )
        .then((res) => {
          if (res.status === 200) {
            setnewteacherData(teachersInitialValue);
          }
          getteacherData();
        });
    } else {
      axios
        .post(
          "https://643670b38205915d34f387a3.mockapi.io/teachers",
          newteacherData
        )
        .then((res) => {
          if (res.status === 200) {
            setnewteacherData(teachersInitialValue);
          }
          getteacherData();
        });
    }
  };
  const getteacherById = (id) => {
    let index = teacherData.findIndex((value) => value.id === id);
    setnewteacherData(teacherData[index]);
  };

  return (
    <Context.Provider
      value={{
        studentsInitialValue,
        teachersInitialValue,
        newStudentData,
        setnewStudentData,
        studentData,
        setStudentData,
        createStudent,
        getstudentById,
        handleDeleteStudent,
        createstudent,
        setcreatestudent,
        createteacher,
        setcreateteacher,
        newteacherData,
        setnewteacherData,
        teacherData,
        setteacherData,
        getteacherById,
        createTeacher,
        handleDeleteteacher,
        getteacherData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
