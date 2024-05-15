"use client";
function UserList() {
  const routerArr = [];
  //数据库获取数据然后展示
  return routerArr.map((v) => {
    return <div key={v.id}>{v.value}</div>;
  });
}
export default UserList;
