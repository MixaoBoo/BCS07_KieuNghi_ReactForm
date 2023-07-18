import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../../redux/features/studentSlice";

const FormInput = (props) => {
  const [checkValidation, setCheckValidation] = useState({
    maSoSV: false,
    hoTen: false,
    soDienThoai: false,
    email: false,
  });
  const regexPhone = /^\d+$/;
  const dispatch = useDispatch();
  const listStudent = useSelector((state) => state.student);
  const inputInvalid = () => {
    let isValid = false;
    if (
      props.student.maSoSV.length === 0 ||
      props.student.hoTen.length === 0 ||
      props.student.soDienThoai.length === 0 ||
      props.student.email.length === 0
    ) {
      isValid = true;
    }
    if (!regexPhone.test(props.student.soDienThoai)) {
      isValid = true;
    }
    return isValid;
  };
  const [search, setSearch] = useState("");
  const handleAddStudent = () => {
    const action = addStudent(props.student);
    dispatch(action);
    props.setStudent({
      maSoSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      chucNang: "",
    });
    setCheckValidation({
      ...checkValidation,
      maSoSV: false,
      hoTen: false,
      soDienThoai: false,
      email: false,
    });
  };
  console.log(props.student);
  const handleUpdate = () => {
    props.setCheckDisabled(false);
    const action = updateStudent(props.student);
    dispatch(action);
    props.setStudent({
      maSoSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      chucNang: "",
    });
  };
  console.log("!(props.student.maSoSV.lenght > 0) : ", props.student.maSoSV);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 mb-4">
          <label htmlFor="maSV" className="form-label">
            Mã sinh viên
          </label>
          <input
            disabled={props.checkDisabled}
            value={props.student.maSoSV}
            onChange={(event) => {
              props.setStudent({
                ...props.student,
                maSoSV: event.target.value.trim(),
              });
              setCheckValidation({
                ...checkValidation,
                maSoSV: true,
              });
            }}
            id="maSV"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập mã sinh viên"
          />
          {checkValidation.maSoSV && !(props.student.maSoSV.length > 0) ? (
            <p className="text-danger">Vui lòng nhập trường dữ liệu này!</p>
          ) : (
            <></>
          )}
        </div>
        <div className="col-6 mb-4">
          <label htmlFor="hoten" className="form-label">
            Họ và tên
          </label>
          <input
            value={props.student.hoTen}
            onChange={(event) => {
              props.setStudent({
                ...props.student,
                hoTen: event.target.value.trim(),
              });
              setCheckValidation({
                ...checkValidation,
                hoTen: true,
              });
            }}
            id="hoTen"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập họ tên"
          />
          {checkValidation.hoTen && !(props.student.hoTen.length > 0) && (
            <p className="text-danger">Vui lòng nhập trường dữ liệu này!</p>
          )}
        </div>
        <div className="col-6 mb-4">
          <label htmlFor="sdt" className="form-label">
            Số điện thoại
          </label>
          <input
            value={props.student.soDienThoai}
            onChange={(event) => {
              props.setStudent({
                ...props.student,
                soDienThoai: event.target.value.trim(),
              });
              setCheckValidation({
                ...checkValidation,
                soDienThoai: true,
              });
            }}
            id="sdt"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập số điện thoại"
          />
          {checkValidation.soDienThoai &&
            !(props.student.soDienThoai.length > 0) && (
              <p className="text-danger">Vui lòng nhập trường dữ liệu này!</p>
            )}
          {checkValidation.soDienThoai &&
            props.student.soDienThoai.length > 0 &&
            !regexPhone.test(props.student.soDienThoai) && (
              <p className="text-danger">Số điện thoại không hợp lệ!</p>
            )}
        </div>
        <div className="col-6 mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={props.student.email}
            onChange={(event) => {
              props.setStudent({
                ...props.student,
                email: event.target.value.trim(),
              });
              setCheckValidation({
                ...checkValidation,
                email: true,
              });
            }}
            id="email"
            type="text"
            className="form-control"
            placeholder="abc@gmail.com"
          />
          {checkValidation.email && !(props.student.email.length > 0) && (
            <p className="text-danger">Vui lòng nhập trường dữ liệu này!</p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button
          disabled={props.checkDisabled || inputInvalid()}
          onClick={handleAddStudent}
          className="btn btn-success"
        >
          Thêm sinh viên
        </button>
        <form action className="search_bar">
          <input
            value={search}
            onChange={(event) => {
              const listSearch = listStudent.filter((st) =>
                st.hoTen
                  .toString()
                  .toLowerCase()
                  .includes(event.target.value.trim().toLowerCase())
              );
              props.setTempListStudent(listSearch);
              setSearch(event.target.value);
            }}
            className="search"
            type="search"
            oninput="searchPerson(event)"
            placeholder="Search here..."
            style={{ padding: "10px", borderRadius: "10px" }}
          />
        </form>
      </div>

      {props.checkDisabled && (
        <button onClick={handleUpdate} className="btn btn-warning ms-3">
          Cập nhật
        </button>
      )}
    </div>
  );
};

export default FormInput;
