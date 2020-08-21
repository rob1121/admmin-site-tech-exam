import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { COLUMNS } from "./UserTable.constant";
import { useDispatch, useSelector } from "react-redux";
import { selectUserList } from "../../state/selector";
import { fetchUsers } from "../../state/slice";

const UserTable = () => {
  const dispatch = useDispatch();
  const dataSource = useSelector(selectUserList);

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, []);

  const handleTableChange = (paginationSetting) => {
    dispatch(fetchUsers(paginationSetting.current));
  };

  return (
    <Table
      dataSource={dataSource.data}
      columns={COLUMNS}
      pagination={{
        current: dataSource.page,
        pageSize: dataSource.per_page,
        total: dataSource.total,
      }}
      scroll={{ y: 450 }}
      onChange={handleTableChange}
    />
  );
};

export default UserTable;
