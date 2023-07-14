import React from "react";

const FormInput = () => {
  return (
    <div className="row">
      <div className="col-6">
        <label htmlFor="maSV" className="form-label">
          Mã sinh viên
        </label>
        <input
          id="maSV"
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col-6">
        <label htmlFor="hoten" className="form-label">
          Họ và tên
        </label>
        <input
          id="hoTen"
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
    </div>
  );
};

export default FormInput;
