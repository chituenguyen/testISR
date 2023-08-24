import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div className="flex flex-col gap-4 p-5">
  <a href="/tin-tuc/pages/1">Trang tin tuc</a>
  <a href="/soi-keo/pages/1">Trang soi keo</a>
  </div>;
};

export default Home;
