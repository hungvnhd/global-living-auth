import { useEffect, useState } from "react";
function Admin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://global-living-backend.vercel.app/api/v1/users"
      );
      const result = await res.json();
      console.log(result);
      setData([...result.users]);
    }
    getData();
  }, []);

  if (data.length === 0) {
    return <div>loading..</div>;
  }
  console.log(data);
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Ho va ten</th>
            <th scope="col">Email</th>
            <th scope="col">So dien thoai</th>
            <th scope="col">Khu vuc</th>
            <th scope="col">Ten dai ly</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            let convertArea;
            if (e.area === 1) {
              convertArea = "Ha Noi";
            } else if (e.area === 2) {
              convertArea = "Tp Ho Chi Minh";
            } else {
              convertArea = "Nha Trang";
            }
            return (
              <tr>
                <th scope="row">{e.id}</th>
                <th scope="row">{e.full_name}</th>
                <th scope="row">{e.email}</th>
                <th scope="row">{e.phone}</th>
                <th scope="row">{convertArea}</th>
                <th scope="row">{e.agent_name}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Admin;
