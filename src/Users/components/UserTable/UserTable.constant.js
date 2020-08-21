import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import LinkModal from "../../../common/LinkModal";
import { Divider } from "antd";

export const COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (image) => <Avatar src={image} />,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "First name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "actions",
    render: (id) => (
      <>
        <LinkModal pathname={`/users/${id}/edit`} title="Edit" />
        <Divider type="vertical" />
        <LinkModal pathname={`/users/${id}/delete`} title="Delete" />
      </>
    ),
  },
];
