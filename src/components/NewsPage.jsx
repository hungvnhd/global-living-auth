import Header from "./Header";

function NewsPage() {
  return (
    <div className="newsPage">
      <div>
        <Header />
        <p>TIN TỨC</p>
      </div>
      <div className="latestNews">
        <div>
          <p>TIN TỨC MỚI NHẤT VỀ</p>
          <select>
            <option value="1">Hungary</option>
            <option value="2">1 Noi nao do</option>
          </select>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assits/Rectangle175.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/assits/Rectangle175.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assits/Rectangle175.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="questions">
        <img src="/assits/Rectangle152.png" alt="photo" />
        <img src="/assits/test1.png" alt="photo" />
        <p>NHỮNG CÂU HỎI PHỔ BIẾN VỀ </p>
        <div>
          <select>
            <option>Quy trình - Thủ tục</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Chi phí - Thuế</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Dịch vụ từ Global Living</option>
            <option disabled> Thông tin cần render</option>
          </select>
          <select>
            <option>Câu hỏi chi tiết</option>
            <option disabled> Thông tin cần render</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
