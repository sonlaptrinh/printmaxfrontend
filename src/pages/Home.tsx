
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-red-500">Trang Home</h1>
      <p className="text-lg text-green-600 mt-4">Nếu đoạn này màu xanh lá thì Tailwind đang hoạt động!</p>
      <a href="/login" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Đăng nhập</a>
    </div>
  );
};

export default Home;