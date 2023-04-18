import DetailContent from "./DetailContent";
import Header from "./Header";
function DetailPage() {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const day = dateNow.getDay();
  console.log(dateNow);
  return (
    <div className="detailPage">
      <div className="headerDetail">
        <img src="/assits/Rectangle134.png" alt="photo" />
        <Header />
        <div className="companyName">
          <p>Tin tức thị trường</p>
          <p>BẤT ĐỘNG SẢN GLOVAL LIVING</p>
          <div className="user-time">
            <p>admin</p>
            <p className="timeDetail">
              <img src="/assits/Clock.png" alt="" />
              {day}/{month}/{year}
            </p>
          </div>
        </div>
      </div>
      <div>
        <select>
          <option value="0">DOANH MỤC NỘI DUNG</option>
        </select>
      </div>

      <DetailContent />
    </div>
  );
}

export default DetailPage;
