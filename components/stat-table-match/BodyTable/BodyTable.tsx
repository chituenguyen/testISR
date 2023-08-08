import Image from "next/image";
import mapping from "../../../const/mapping";
import { useTheme } from "next-themes";
type ColumnAccessorKey = keyof typeof mapping;

function BodyTable({ data, columns }: { data: any; columns: any }) {
  const { resolvedTheme } = useTheme();

  return (
    <tbody className="text-xsm">
      {data.map((item: any, index: number) => (
        <tr
          key={index}
          className={`border border-solid ${resolvedTheme === "dark"?"border-[#696f75]":"border-surface-3"} ${
            index % 2 === 1 && resolvedTheme === "light"
              ? "bg-surface-1"
              : index % 2 === 1 && resolvedTheme !== "light"
              ? "bg-[#181D26]"
              : index % 2 !== 1 && resolvedTheme === "light"
              ? "bg-white"
              : "bg-[#1C2632]"
          }`}
        >
          <td className="h-full flex justify-center items-center border-r-0">
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${item.player.idOfTeam}/image`}
              width={22}
              height={22}
              alt="home"
              className="mt-2"
            />
          </td>
          <td className={`px-2 border ${resolvedTheme === "dark"?"border-[#696f75]":""}`}>{item.player.name}</td>
          {columns.map((column: any, index: number) => {
            const accessorKeys = column.accessorKey.split(".");
            const accessorKeySecond = column.accessorKeySecond?.split(".");
            const accessorKeyThird = column.accessorKeyThird?.split(".");
            const accessorKeyFourth = column.accessorKeyFourth?.split(".");
            let cellData = item;
            let cellDataSecond = item;
            let cellDataThird = item;
            let cellDataFourth = item;
            accessorKeys.forEach((key: any) => {
              if (cellData) {
                cellData = cellData[key];
              }
            });
            accessorKeySecond?.forEach((key: any) => {
              if (cellDataSecond) {
                cellDataSecond = cellDataSecond[key];
              }
            });
            accessorKeyThird?.forEach((key: any) => {
              if (cellDataThird) {
                cellDataThird = cellDataThird[key];
              }
            });
            accessorKeyFourth?.forEach((key: any) => {
              if (cellDataFourth) {
                cellDataFourth = cellDataFourth[key];
              }
            });
            if (accessorKeySecond) {
              if (column.header === "Acc.passes") {
                cellData = `${cellData}/${cellDataSecond} (${Math.floor(
                  (cellData / cellDataSecond) * 100
                )}%)`;
              }
              if (column.header === "Duels(won)") {
                cellData = `${(cellData || 0) + (cellDataSecond || 0)}(${
                  cellDataSecond || 0
                })`;
              }
              if (column.header === "Aerial duels(won)") {
                cellData = `${(cellData || 0) + (cellDataSecond || 0)}(${
                  cellDataSecond || 0
                })`;
              }
              if (column.header === "Dribble attempts(succ.)") {
                cellData = `${cellData || 0}(${cellDataSecond || 0})`;
              }
              if (column.header === "Crosses(acc.)") {
                cellData = `${cellData || 0}(${cellDataSecond || 0})`;
              }
              if (column.header === "Long balls(acc.)") {
                cellData = `${cellData || 0}(${cellDataSecond || 0})`;
              }
            }
            if (column.header === "Minutes played") {
              cellData = `${cellData}'`;
            }
            if (column.header === "Notes") {
              let notes = [];

              if (column.accessorKey && cellData !== undefined) {
                notes.push(
                  `${
                    mapping[column.accessorKey as ColumnAccessorKey]
                  } ${cellData}`
                );
              }
              if (column.accessorKeySecond && cellDataSecond !== undefined) {
                notes.push(
                  `${
                    mapping[column.accessorKeySecond as ColumnAccessorKey]
                  } ${cellDataSecond}`
                );
              }
              if (column.accessorKeyThird && cellDataThird !== undefined) {
                notes.push(
                  `${
                    mapping[column.accessorKeyThird as ColumnAccessorKey]
                  } ${cellDataThird}`
                );
              }
              if (column.accessorKeyFourth && cellDataFourth !== undefined) {
                notes.push(
                  `${
                    mapping[column.accessorKeyFourth as ColumnAccessorKey]
                  } ${cellDataFourth}`
                );
              }

              // Join the notes with line breaks
              const notesWithLineBreaks = notes.join("<br />");

              if (notesWithLineBreaks) {
                cellData = (
                  <div
                    dangerouslySetInnerHTML={{ __html: notesWithLineBreaks }}
                  />
                );
              } else {
                cellData = "-";
              }
            }

            return (
              <td
                key={index}
                className={` text-center py-2 px-2 whitespace-nowrap  border border-solid ${
                  resolvedTheme === "dark" ? "border-[#696f75]" : "border-surface-3"
                } ${
                  column.accessorKey === "statistics.rating"
                    ? cellData >= 9
                      ? "text-[#3498DB]"
                      : cellData >= 8
                      ? "text-[#47C152]"
                      : cellData >= 7
                      ? "text-[#A2B719]"
                      : cellData >= 6
                      ? "text-[#D8B62A]"
                      : "text-[#FA5151]"
                    : ""
                }`}
              >
                {cellData ? cellData : "0"}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;
