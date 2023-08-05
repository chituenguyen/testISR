import Image from "next/image";

function BodyTable({ data, columns }: { data: any; columns: any }) {
    data = data.sort(
        (a: any, b: any) =>
          (b.statistics?.rating ?? 0) - (a.statistics?.rating ?? 0)
      );
      
  return (
    <tbody>
      {data.map((item: any, index: number) => (
        <tr key={index}>
          <td className="border border-solid border-black">
            <Image
              src={`https://apisf.p2pcdn.xyz/api/v1/team/${item.player.idOfTeam}/image`}
              width={20}
              height={20}
              alt="home"
            />
          </td>
          <td className="border border-solid border-black">{item.player.name}</td>
          {columns.map((column: any, index: number) => {
            const accessorKeys = column.accessorKey.split(".");
            const accessorKeySecond = column.accessorKeySecond?.split(".");
            let cellData = item;
            let cellDataSecond = item
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
            if(accessorKeySecond && cellDataSecond) {
                if(column.header === "Acc.passes"){
                    cellData = `${cellData}/${cellDataSecond} (${(cellData/cellDataSecond)*100}%)`
                }
                if(column.header === "Duels(won)"){
                    cellData = `${cellData+cellDataSecond}(${cellData})`
                }
            }

            return <td key={index} className="border border-solid border-black">{cellData ? cellData : "-"}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;
