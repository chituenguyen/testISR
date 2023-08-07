import columns from "../../../const/Group";
import { useEffect, useState } from "react";
import Headertable from "../HeaderTable/Headertable";
import BodyTable from "../BodyTable/BodyTable";
function TableMatch({ statistic, team }: { statistic: any; team: any }) {
  const [group, setGroup] = useState(columns[0].id);
  const [selectTeam, setSelectteam] = useState("total");
  const [data, setData] = useState<any[]>([]);
  const [sorted, setSorted] = useState("statistics.rating");

  const handleChangeSelectTeam = (value: string) => {
    setSelectteam(value);
  };
  const handleChangeSorted = (value: string) => {
    if (sorted ===  value) {
      setSorted("-"+value);
    } else {
      setSorted(value);
    }
  };
  const sortData = (data: any[], sortingKey: string) => {
    return data.sort((a: any, b: any) => {
      const getValue = (obj: any, path: string) => {
        if (path[0] === "-") {
          path = path.substring(1);
        }
        const properties = path.split(".");
        if (properties[properties.length - 1] === "duelLost") {
          return (obj.statistics.duelLost || 0) + (obj.statistics.duelWon || 0);
        }
        if (properties[properties.length - 1] === "aerialLost") {
          return (
            (obj.statistics.aerialLost || 0) + (obj.statistics.aerialWon || 0)
          );
        }
        if (properties[properties.length - 1] === "position") {
          switch (obj.player.position) {
            case "F":
              return 4;
            case "M":
              return 3;
            case "D":
              return 2;
            case "G":
              return 1;
          }
        }
        let value = obj;
        for (const prop of properties) {
          value = value?.[prop];
          if (value === undefined) break;
        }
        return value ?? 0;
      };
      const aValue = getValue(a, sortingKey);
      const bValue = getValue(b, sortingKey);
      return sortingKey[0] === "-" ? aValue - bValue : bValue - aValue; // Sort in descending order
    });
  };
  const homePlayersWithId = statistic.home.players
    .map((player: any) => ({
      ...player,
      player: {
        ...player.player,
        idOfTeam: team.event.homeTeam.id,
        teamCheck: "home",
      },
    }))
    .filter((item: any) => item?.statistics?.rating !== undefined);
  const homeGoalKeeper = statistic.home.players
    .map((player: any) => ({
      ...player,
      player: {
        ...player.player,
        idOfTeam: team.event.homeTeam.id,
        teamCheck: "home",
      },
    }))
    .filter(
      (item: any) =>
        item?.player?.position === "G" && item?.statistics?.rating !== undefined
    );
  const awayPlayersWithId = statistic.away.players
    .map((player: any) => ({
      ...player,
      player: {
        ...player.player,
        idOfTeam: team.event.awayTeam.id,
        teamCheck: "away",
      },
    }))
    .filter((item: any) => item?.statistics?.rating !== undefined);
  const awayGoalKeeper = statistic.away.players
    .map((player: any) => ({
      ...player,
      player: {
        ...player.player,
        idOfTeam: team.event.awayTeam.id,
        teamCheck: "away",
      },
    }))
    .filter(
      (item: any) =>
        item?.player?.position === "G" && item?.statistics?.rating !== undefined
    );
  const handleGroupClick = (id: number) => {
    setGroup(id);
    setSorted("statistics.rating");
  };
  useEffect(() => {
    if (selectTeam === "total") {
      setData([...homePlayersWithId, ...awayPlayersWithId]);
    }
    if (selectTeam === "home") {
      setData([...homePlayersWithId]);
    }
    if (selectTeam === "away") {
      setData([...awayPlayersWithId]);
    }
    if (sorted) {
      setData((prevData) => sortData(prevData, sorted));
    }
    if (group === 5) {
      if(selectTeam === "total"){
        setData([...homeGoalKeeper, ...awayGoalKeeper]);
      }
      else if (selectTeam === "home"){
        setData([...homeGoalKeeper]);
      }
      else{
        setData([...awayGoalKeeper]);
      }
    }
  }, [
    selectTeam,
    data,
    homePlayersWithId,
    awayPlayersWithId,
    sorted,
    group,
    homeGoalKeeper,
    awayGoalKeeper,
  ]);
  return (
    <div>
      <div className="flex items-center pb-3.5 gap-2 p-6">
        {columns.map((item) => (
          <button
            key={item.id}
            className={group === item.id ? "button-active" : "button"}
            onClick={() => handleGroupClick(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <table className="w-full">
        <Headertable
          columns={columns[group].data}
          home={team.event.homeTeam}
          away={team.event.awayTeam}
          selectTeam={selectTeam}
          sorted={sorted}
          onChange={handleChangeSelectTeam}
          onChangeSorted={handleChangeSorted}
        />
        <BodyTable data={data} columns={columns[group].data} />
      </table>
    </div>
  );
}

export default TableMatch;
