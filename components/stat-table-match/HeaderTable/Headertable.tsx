import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Headertable({
  columns,
  home,
  away,
  selectTeam,
  onChange,
  sorted,
  onChangeSorted,
}: {
  columns: any;
  home: any;
  away: any;
  selectTeam: string;
  onChange: (value: string) => void;
  sorted: string;
  onChangeSorted: (value: string) => void;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <thead>
      <tr className={`border-t border-l s${resolvedTheme === "dark"?"bg-[#121214] border-[#696f75] border-opacity-30":"bg-surface-1 border-white "}`}>
        <th className=" text-xs leading-4 ">
          <div className="w-10"></div>
        </th>
        <th className={`flex gap-3 px-2 py-3 items-center justify-center border border-solid text-xs leading-4 w-[170px] max-w-[170px] min-w-[160px] border-r-0 border-b-0 border-t-0 ${resolvedTheme === "dark"?"border-[#696f75] border-opacity-30":""}`}>
          <button
            className={`flex gap-1 items-center p-1 px-2 ${
              selectTeam === "total" ? "bg-rega-blue rounded-full" : ""
            } `}
            onClick={() => onChange("total")}
          >
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
              alt="away"
            />
          </button>
          <button
            className={`p-1 ${
              selectTeam === "home" ? "bg-rega-blue rounded-full" : ""
            }`}
            onClick={() => onChange("home")}
          >
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${home.id}/image`}
              width={24}
              height={24}
              alt="home"
            />
          </button>
          <button
            className={`p-1 ${
              selectTeam === "away" ? "bg-rega-blue rounded-full" : ""
            }`}
            onClick={() => onChange("away")}
          >
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${away.id}/image`}
              width={24}
              height={24}
              alt="away"
            />
          </button>
        </th>
        {columns.map((column: any, index: number) => (
          <th
            key={index}
            className={`border border-solid  px-1  text-xs not-italic leading-4 font-semibold relative ${column.header === "Notes"?"":"hover:cursor-pointer"} ${resolvedTheme === "dark"?"text-[#7C7E83] border-[#696f75] border-opacity-30":"text-surface-2"}`}
            onClick={column.header !== "Notes" ? () => onChangeSorted(column.accessorKey) : undefined}
          >
            <p>{column.header}</p>
            {column.header === "Notes" ? <></>: <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              className={`absolute bottom-1 left-1/2 translate-x-[-50%] ${`-${column.accessorKey}` === `${sorted}` ? "rotate-180":""}`}
            >
              <path
                d="M7.525 0L8 0.546875L4 5L0 0.546875L0.475 0L4 3.90625L7.525 0Z"
                fill={`${column.accessorKey === sorted || `-${column.accessorKey}` === `${sorted}` ?"#2187E5":"#555"}`}
              />
            </svg>}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Headertable;
