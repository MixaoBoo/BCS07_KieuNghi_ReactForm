import React from "react";
import { useDispatch } from "react-redux";
import { removeStudent } from "../../redux/features/studentSlice";

const ListStudent = (props) => {
  const arrTitle = [
    "Mã Sinh viên",
    "Họ và tên",
    "Số điện thoại",
    "Email",
    "Chức năng",
  ];

  const dispatch = useDispatch();
  const handleRemoveStudent = (maSoSV) => {
    const action = removeStudent(maSoSV);
    dispatch(action);
    console.log(maSoSV);
  };
  const handleEditStudent = (student) => {
    console.log(student);
    props.setStudent(student);
    props.setCheckDisabled(true);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          {arrTitle.map((item, index) => (
            <th className="bg-dark text-white text-center" key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="tbody text-center">
        {props.listStudent.map((sv) => (
          <tr key={sv.maSoSV}>
            {Object.values(sv).map((info, index) =>
              index !== Object.values(sv).length - 1 ? (
                <td key={index}>{info}</td>
              ) : (
                <td key={index}>
                  <button
                    onClick={() => {
                      handleEditStudent(sv);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleRemoveStudent(sv.maSoSV);
                    }}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListStudent;
