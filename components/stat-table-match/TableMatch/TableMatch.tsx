import columns from "../../../const/Group";
import { useState } from "react";
import Headertable from "../HeaderTable/Headertable";
import BodyTable from "../BodyTable/BodyTable";
function TableMatch({ statistic, team }: { statistic: any; team: any }) {
  const [group, setGroup] = useState(columns[0].id);
  const homePlayersWithId = statistic.home.players.map((player:any) => ({
    ...player,
    player: { ...player.player, idOfTeam: team.event.homeTeam.id },
  }));
  
  // Add id 35 to players from away team
  const awayPlayersWithId = statistic.away.players.map((player:any) => ({
    ...player,
    player: { ...player.player, idOfTeam: team.event.awayTeam.id },
  }));
  const handleGroupClick = (id:number) =>{
    setGroup(id)
  }
  return (
    <div>
      <div className="flex items-center pb-3.5 border-b border-[#cdded] gap-2">
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
      <table>
        <Headertable columns = {columns[group].data} home={team.event.homeTeam} away = {team.event.awayTeam}/>
        <BodyTable data = {[...homePlayersWithId,...awayPlayersWithId]} columns = {columns[group].data}/>
      </table>
    </div>
  );
}

export default TableMatch;
