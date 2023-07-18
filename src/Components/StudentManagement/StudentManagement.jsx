import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import ListStudent from "../ListStudent/ListStudent";
import { useSelector } from "react-redux";

const StudentManagement = () => {
  const [student, setStudent] = useState({
    maSoSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
    chucNang: "",
  });
  const listStudent = useSelector((state) => state.student);
  const [tempListStudent, setTempListStudent] = useState([]);
  const [checkDisabled, setCheckDisabled] = useState(false);
  // life cycle useEffect
  useEffect(() => {
    if (listStudent) {
      setTempListStudent(listStudent);
    }
  }, [listStudent]);
  return (
    <div>
      <h2 className="bg-dark text-white p-3 text-center">
        THÔNG TIN SINH VIÊN
      </h2>
      <FormInput
        student={student}
        setStudent={setStudent}
        checkDisabled={checkDisabled}
        setCheckDisabled={setCheckDisabled}
        setTempListStudent={setTempListStudent}
      />
      <ListStudent
        setCheckDisabled={setCheckDisabled}
        listStudent={tempListStudent}
        student={student}
        setStudent={setStudent}
      />
    </div>
  );
};

export default StudentManagement;
