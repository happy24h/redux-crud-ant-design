import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";
import { Space, Table, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, userDelete } from "../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Home() {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  console.log("data users", { users });
  let history = useNavigate();

  const columns = [
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
      // render: (text) => <Link>{text}</Link>,
    },
    {
      title: "Last name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditUser(record)}>
            {/* <EditOutlined /> */}
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDeleteUser(record)}
          >
            {/* <DeleteOutlined /> */}
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleDeleteUser = (user) => {
    console.log("id delete", user.id);
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng không ?")) {
      dispatch(userDelete(user.id));
    }
  };

  const handleEditUser = (user) => {
    console.log("id edit", user.id);
    history(`/edit-user/${user.id}`);
  };

  useEffect(() => {
    dispatch(listUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Form.Item label=" ">
        <Link to={"/add-user"}>
          <Button
            style={{ display: "flex", margin: "20px auto 0" }}
            type="primary"
            htmlType="submit"
          >
            Add User
          </Button>
        </Link>
      </Form.Item>
      <Table
        columns={columns}
        dataSource={users}
        rowKey={(users) => users.id}
        // {...this.state.tableConfiguration}
      />
    </div>
  );
}

export default Home;
