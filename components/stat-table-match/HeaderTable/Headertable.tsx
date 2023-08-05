import React from "react";
import Image from "next/image";

function Headertable({
  columns,
  home,
  away,
}: {
  columns: any;
  home: any;
  away: any;
}) {
  return (
    <thead>
      <tr>
        <th className="border border-solid border-black">
          <div className="w-10"></div>
        </th>
        <th className="flex gap-2 px-2 py-3 items-center justify-center border border-solid border-black">
          <button className="flex gap-1 items-center">
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${home.id}/image`}
              width={24}
              height={24}
              alt="home"
            />
            <span> + </span>
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${away.id}/image`}
              width={24}
              height={24}
              alt="home"
            />
          </button>
          <button>
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${home.id}/image`}
              width={24}
              height={24}
              alt="home"
            />
          </button>
          <button>
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${away.id}/image`}
              width={24}
              height={24}
              alt="home"
            />
          </button>
        </th>
        {columns.map((column: any, index: number) => (
          <th key={index} className="border border-solid border-black">{column.header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Headertable;
