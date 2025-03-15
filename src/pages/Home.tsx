
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Trang Home</h1>
      <Link to="/login">Đăng nhập</Link>
    </div>
  );
};

export default Home;