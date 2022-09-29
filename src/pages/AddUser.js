import { useState } from "react";
import "antd/dist/antd.min.css";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddUser() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  let history = useNavigate();

  let dispatch = useDispatch();
  const { firstName, lastName, email, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  // console.log("state input", state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !address) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      dispatch(addUser(state));
      history("/");
    }
  };
  return (
    <div style={{ width: 300, margin: "0 auto", paddingTop: "50px" }}>
      <Link to={"/"}>
        <Button className="btn-back" htmlType="submit" type="red">
          Back
        </Button>
      </Link>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
      >
        <Input
          name="firstName"
          className="input-user"
          placeholder="First name"
          value={firstName}
          onChange={handleInputChange}
        />
        <Input
          name="lastName"
          value={lastName}
          className="input-user"
          placeholder="Last name"
          onChange={handleInputChange}
        />
        <Input
          name="email"
          value={email}
          className="input-user"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <Input
          name="address"
          value={address}
          className="input-user"
          placeholder="address"
          onChange={handleInputChange}
        />

        <Button
          className="btn-add"
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
        >
          Add User
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
