import type { NextPage } from "next";
import Link from "next/link";
import useCategories from '../hooks/useFetchTeam'

const Home: NextPage = () => {
  const category = [
    { id: 1, slug: "soi-keo", name: "Trang soi keo" },
    { id: 2, slug: "nhan-dinh", name: "Trang nhan dinh" },
    { id: 3, slug: "tips", name: "Trang Tips" },
    { id: 4, slug: "tin-tuc", name: "Trang tin tuc" },
  ];
  // const { data ,isLoading } = useCategories();
  // if (isLoading){
  //   return <></>
  // }
  return (
    <div className="flex flex-col gap-4 p-5">
      {category?.map((item: any, index: number) => (
        <Link href={`/${item.slug}/pages/1`} key={index}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
