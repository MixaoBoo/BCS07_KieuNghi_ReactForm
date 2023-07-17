import React from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../../redux/features/studentSlice";

const FormInput = (props) => {
  const dispatch = useDispatch();
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
            }}
            id="maSV"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập mã sinh viên"
          />
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
            }}
            id="hoTen"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập họ tên"
          />
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
            }}
            id="sdt"
            type="text"
            className="form-control"
            placeholder="Vui lòng nhập số điện thoại"
          />
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
            }}
            id="email"
            type="text"
            className="form-control"
            placeholder="abc@gmail.com"
          />
        </div>
      </div>
      <button
        disabled={props.checkDisabled}
        onClick={handleAddStudent}
        className="btn btn-success"
      >
        Thêm sinh viên
      </button>
      {props.checkDisabled && (
        <button onClick={handleUpdate} className="btn btn-warning ms-3">
          Cập nhật
        </button>
      )}
    </div>
  );
};

export default FormInput;
