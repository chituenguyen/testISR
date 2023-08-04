import type { NextPage } from "next";
import Rectangle from "../components/skeleton/Rectangle/Rectangle";
import Circle from "../components/skeleton/circle/Circle";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-300">
      <div className="w-96 h-60 bg-white px-5 py-6 flex flex-col gap-7">
        <div className="flex items-center gap-10">
          <Circle classes={"w-14 h-14"} />
          <div className="flex flex-col gap-2">
            <Rectangle classes={"w-52 h-3"} />
            <Rectangle classes={"w-20 h-3"} />
          </div>
        </div>
        <Rectangle classes={"w-full h-3"} />
        <Rectangle classes={"w-8/12 h-3"} />
      </div>
    </div>
  );
};

export default Home;
