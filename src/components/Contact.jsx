import { useState } from "react";
import Modal from "./Modal";

function Contact() {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputAgency, setInputAgency] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validate, setValidate] = useState(0);
  const [checkShow, setCheckShow] = useState(0);
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPhone = (e) => {
    setInputPhone(e.target.value);
  };
  const handleInputArea = (e) => {
    setInputArea(e.target.value);
  };
  const handleInputAgency = (e) => {
    setInputAgency(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };
  const checkValidate = (e) => {
    e.preventDefault();
    if (
      inputName &&
      inputEmail &&
      inputPhone &&
      inputAgency &&
      inputArea &&
      inputPassword.length > 6
    ) {
      handleRegister();
    } else {
      setValidate(1);
    }
  };
  const handleClickLogin = () => {
    setCheckShow(1);
    console.log(checkShow);
  };
  const handleBackIndex = () => {
    setCheckShow(0);
  };
  const handleRegister = (e) => {
    let newUser = {
      full_name: inputName,
      email: inputEmail,
      phone: inputPhone,
      area: inputArea,
      agent_name: inputAgency,
      password: inputPassword,
    };
    console.log(newUser);
    fetch("https://global-living-backend.vercel.app/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckShow(2);
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputArea("");
        setInputAgency("");
        setInputPassword("");
        console.log(data);
        if (data.status == true) {
        }
      });
  };
  return (
    <div className="containerContact">
      <div className="containerFormRegister">
        <form className="formRegister">
          <div className="divInput">
            <input
              className="inputRegister"
              type="text"
              placeholder="Họ và tên"
              onChange={handleInputName}
              value={inputName}
            />
            <i
              className={
                validate == 1 && inputName == ""
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>
          <div className="divInput">
            <input
              onChange={handleInputEmail}
              value={inputEmail}
              className="inputRegister"
              type="email"
              placeholder="Email"
            />
            <i
              className={
                validate == 1 && inputEmail == ""
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>
          <div className="divInput">
            <input
              onChange={handleInputPhone}
              value={inputPhone}
              className="inputRegister"
              type="text"
              placeholder="Số điện thoại"
            />
            <i
              className={
                validate == 1 && inputPhone == ""
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>
          <div className="divInput">
            <select className="inputRegister" onChange={handleInputArea}>
              <option value="0">Khu vực</option>
              <option value="1">Hà Nội</option>
              <option value="2">TPHCM</option>
              <option value="3">Nha Trang</option>
            </select>
            <i
              className={
                validate == 1 && inputArea == ""
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>
          <div className="divInput">
            <input
              onChange={handleInputAgency}
              value={inputAgency}
              className="inputRegister"
              type="text"
              placeholder="Đại lý"
            />
            <i
              className={
                validate == 1 && inputAgency == ""
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>
          <div className="divInput">
            <input
              onChange={handleInputPassword}
              value={inputPassword}
              className="inputRegister"
              type="password"
              placeholder="Mật khẩu"
            />
            <i
              className={
                validate == 1 && inputPassword.length < 6
                  ? "fa-sharp fa-solid fa-circle-xmark checkValidate"
                  : ""
              }
            ></i>
          </div>

          <button onClick={checkValidate} className="btnRegister">
            Đăng ký
          </button>
          {/* <p className="textRegisterFalse">Người dùng đã tồn tại vui lòng kiểm tra lại!</p> */}
        </form>
        <div className="divLoginNow">
          <p className="haveAcc">Đã có tài khoản?</p>
          <button onClick={handleClickLogin} className="loginNow">
            Đăng nhập ngay
          </button>
        </div>
      </div>
      <div className="containerTextContact">
        <p className="textContact">CONTACT</p>
        <p className="textRegisterAdvise">ĐĂNG KÝ NHẬN TƯ VẤN</p>
        <p className="textContentContact">
          Hãy để Global Living đồng hành cùng bạn trên hành trình đầu tư bất
          động sản quốc tế và trở thành một công dân đẳng cấp toàn cầu
        </p>
      </div>
      <div class={checkShow == 1 ? "containerLogin" : "hidden"}>
        <Modal setCheckShow={setCheckShow} setValidate={setValidate} />
      </div>
      <div className={checkShow == 2 ? "successRegister" : "hidden"}>
        <img
          className="logoLogin"
          src="/assits/Mockup LOGO1 4.png"
          alt="logo"
        />
        <p className="textTitle">
          BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
        </p>
        <div className="divNotification">
          <img
            className="checkMark"
            src="/assits/Checkmark.png"
            alt="checkmark"
          />
          <p className="titleSuccess">ĐĂNG KÝ THÀNH CÔNG</p>
          <p className="textSuccess">
            Global Living sẽ liên hệ để xác nhận trong thời gian sớm nhất
          </p>
          <button onClick={handleBackIndex} className="btnSuccessBack">
            Tìm hiểu thông tin dự án
          </button>
          <button className="btnSuccessNext">Xem tài liệu bán hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
