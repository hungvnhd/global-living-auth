import CardNews from "./CardNews";

function DetailContent() {
  return (
    <div className="detailContent">
      <p>Chỗ này render chi tiết bài viết</p>
      <div className="detailBtns">
        <button>Bài viết trước</button>
        <button>Bài viết kế tiếp</button>
      </div>
      <div className="relatedNews">
        <p>TIN TỨC LIÊN QUAN</p>
        <div>
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
