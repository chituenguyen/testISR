import type { NextPage } from "next";
import { useState } from "react";
import useTeam from "../hooks/useFetchTeam";
import useStatisticMatch from "../hooks/useFetchStatistic";
import { useQueryClient } from "react-query";
import TableMatch from "../components/stat-table-match/TableMatch/TableMatch";

const Home: NextPage = () => {
  const [showLineUp, setShowLineUp] = useState(true);
  const [showStatistic, setShowStatistic] = useState(false);
  const queryClient = useQueryClient();

  const { data: team, isLoading: loadingTeam } = useTeam();
  const { data: statistic, isLoading: loadingStatistic } = useStatisticMatch();
  if (loadingTeam || loadingStatistic) {
    return <div></div>;
  }
  return (
    <div className="containerPage font-beVietNam flex flex-col gap-3 w-[880px]">
      <h3 className="text-basic text-base font-bold not-italic uppercase text-center">players</h3>
      <div className="flex gap-2 px-6">
        <button
          onClick={() => {
            setShowLineUp(true);
            setShowStatistic(false);
          }}
          className={`button capitalize ${showLineUp ? "button-active-border":""} `}
        >
          lineups
        </button>
        <button
          onClick={() => {
            setShowStatistic(true);
            setShowLineUp(false);
          }}
          className={`button capitalize ${showStatistic ? "button-active-border":""} `}

        >
          player statistic
        </button>
      </div>
      <div>
        <div className={`${showLineUp ? "block" : "hidden"}`}>
          <h4 className="text-xsm">Show anything to load api player statistic</h4>
        </div>
        <div className={`${showStatistic ? "block" : "hidden"}`}>
          <TableMatch statistic = {statistic?.data} team ={team?.data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
