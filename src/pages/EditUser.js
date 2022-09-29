import { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser, listUsers } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  console.log("edit state:", state);
  let dispatch = useDispatch();
  let history = useNavigate();
  let { id } = useParams();
  console.log(">>>>", id);

  useEffect(() => {
    dispatch(listUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let { users } = useSelector((state) => state.data);

  console.log("check edit", users);
  // eslint-disable-next-line eqeqeq
  const result = users.filter((user) => user.id == id);
  console.log("check filter edit:", result);

  useEffect(() => {
    if (result[0]) {
      setState({ ...result[0] });
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, id: id, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !address) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      dispatch(editUser(state));
      history("/");
    }
  };

  let { firstName, lastName, email, address } = state;
  console.log("check state edit >>> :", state);

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

export default EditUser;
