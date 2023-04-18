function Login() {
  const checkValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <select onChange={checkValue}>
        <option>Khu vực</option>
        <option value="1">Hà Nội</option>
        <option value="2">TPHCM</option>
        <option value="3">Nha Trang</option>
      </select>
    </div>
  );
}

export default Login;
