import type { NextPage } from "next";
import { useState } from "react";
import useTeam from "../hooks/useFetchTeam";
import useStatisticMatch from "../hooks/useFetchStatistic";
import { useQueryClient } from "react-query";
import TableMatch from "../components/stat-table-match/TableMatch/TableMatch";
import { ThemeSwitch } from "../components/darkmode/ThemeSwitch";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const [showLineUp, setShowLineUp] = useState(true);
  const [showStatistic, setShowStatistic] = useState(false);
  const queryClient = useQueryClient();
  const { resolvedTheme } = useTheme();

  const { data: team, isLoading: loadingTeam } = useTeam();
  const { data: statistic, isLoading: loadingStatistic } = useStatisticMatch();
  if (loadingTeam || loadingStatistic) {
    return <div></div>;
  }
  return (
    <div
      className={`containerPage font-beVietNam flex flex-col gap-3 w-[880px] py-5 border border-solid border-surface-2 rounded-3xl shadow-2xl my-3 ${
        resolvedTheme === "dark" ? "border-[#696f75] bg-[#1C2632]" : ""
      }`}
    >
      <h3
        className={`text-basic text-base font-bold not-italic uppercase text-center ${
          resolvedTheme === "dark" ? "text-white" : ""
        }`}
      >
        players
      </h3>
      <div className="w-fit h-fit absolute top-0 right-0">
        <ThemeSwitch />
      </div>
      <div
        className={`flex gap-2 px-6 ${
          resolvedTheme === "dark" ? "text-white" : ""
        }`}
      >
        <button
          onClick={() => {
            setShowLineUp(true);
            setShowStatistic(false);
          }}
          className={`capitalize ${showLineUp ? "button-active-border" : ""} ${
            resolvedTheme === "dark" ? "button-dark" : "button"
          }`}
        >
          lineups
        </button>
        <button
          onClick={() => {
            setShowStatistic(true);
            setShowLineUp(false);
          }}
          className={`capitalize ${
            showStatistic ? "button-active-border" : ""
          } ${resolvedTheme === "dark" ? "button-dark" : "button"}`}
        >
          player statistic
        </button>
      </div>
      <div>
        <div className={`${showLineUp ? "block" : "hidden"}`}>
          <h4 className="text-xsm px-6">
            Show anything to load api player statistic
          </h4>
        </div>
        <div className={`${showStatistic ? "block" : "hidden"}`}>
          <TableMatch statistic={statistic?.data} team={team?.data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
