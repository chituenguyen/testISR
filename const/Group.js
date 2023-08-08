let columns = [
  {
    id: 0,
    name: "Summary",
    data: [
      {
        header: "Goals",
        accessorKey: "statistics.goals",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "statistics.goalAssist",
        sorted: true,
      },
      {
        header: "Tackles",
        accessorKey: "statistics.totalTackle",
        sorted: true,
      },
      {
        header: "Acc.passes",
        accessorKey: "statistics.accuratePass",
        accessorKeySecond: "statistics.totalPass",
        sorted: true,
      },
      {
        header: "Duels(won)",
        accessorKey: "statistics.duelLost",
        accessorKeySecond: "statistics.duelWon",
        sorted: true,
      },
      {
        header: "Minutes played",
        accessorKey: "statistics.minutesPlayed",
      },
      {
        header: "Ground duels(won)",
        accessorKey: "statistics.aerialWon",
        accessorKeySecond: "statistics.aerialLost",
        accessorKeyThird: "statistics.duelLost",
        accessorKeyFourth: "statistics.duelWon",
      },
      {
        header: "Aerial duels(won)",
        accessorKey: "statistics.aerialLost",
        accessorKeySecond: "statistics.aerialWon",
      },
      {
        header: "Position",
        accessorKey: "player.position",
      },
      {
        header: "Rating",
        accessorKey: "statistics.rating",
      },
    ],
  },
  {
    id: 1,
    name: "Attack",
    data: [
      {
        header: "Shot on target",
        accessorKey: "statistics.onTargetScoringAttempt",
        sorted: true,
      },
      {
        header: "Shot off target",
        accessorKey: "statistics.shotOffTarget",
        sorted: true,
      },
      {
        header: "Shot blocked",
        accessorKey: "statistics.blockedScoringAttempt",
        sorted: true,
      },
      {
        header: "Dribble attempts(succ.)",
        accessorKey: "statistics.totalContest",
        accessorKeySecond: "statistics.wonContest",
        sorted: true,
      },
      {
        header: "Notes",
        accessorKey: "statistics.penaltyWon",
        accessorKeySecond: "statistics.hitWoodwork",
        accessorKeyThird : "statistics.bigChanceMissed",
        accessorKeyFourth : "statistics.penaltyMiss"
      },
      {
        header: "Position",
        accessorKey: "player.position",
      },
      {
        header: "Rating",
        accessorKey: "statistics.rating",
      },
    ],
  },
  {
    id: 2,
    name: "Defence",
    data: [
      {
        header: "Clearances",
        accessorKey: "statistics.totalClearance",
        sorted: true,
      },
      {
        header: "Blocked shots",
        accessorKey: "statistics.outfielderBlock",
        sorted: true,
      },
      {
        header: "Interceptions",
        accessorKey: "statistics.interceptionWon",
        sorted: true,
      },
      {
        header: "Tackles",
        accessorKey: "statistics.totalTackle",
        sorted: true,
      },
      {
        header: "Dribbled past",
        accessorKey: "statistics.challengeLost",
      },
      {
        header: "Notes",
        accessorKey: "statistics.penaltyConceded",
      },
      {
        header: "Position",
        accessorKey: "player.position",
      },
      {
        header: "Rating",
        accessorKey: "statistics.rating",
        sorted: true,
      },
    ],
  },
  {
    id: 3,
    name: "Passing",
    data: [
      {
        header: "Touches",
        accessorKey: "statistics.touches",
        sorted: true,
      },
      {
        header: "Acc.passes",
        accessorKey: "statistics.accuratePass",
        accessorKeySecond: "statistics.totalPass",
        sorted: true,
      },
      {
        header: "Key passes",
        accessorKey: "statistics.keyPass",
        sorted: true,
      },
      {
        header: "Crosses(acc.)",
        accessorKey: "statistics.totalCross",
        accessorKeySecond:"statistics.accurateCross",
        sorted: true,
      },
      {
        header: "Long balls(acc.)",
        accessorKey: "statistics.totalLongBalls",
        accessorKeySecond:"statistics.accurateLongBalls",
        sorted: true,
      },
      {
        header: "Notes",
        accessorKey: "statistics.bigChanceCreated",
      },
      {
        header: "Position",
        accessorKey: "player.position",
      },
      {
        header: "Rating",
        accessorKey: "statistics.rating",
        sorted: true,
      },
    ],
  },
  {
    id:4,
    name:"Duels",
    data:[
      {
        header:"Ground duels(won)",
        accessorKey:"",
        sorted: true,
      },
      {
        header: "Aerial duels(won)",
        accessorKey: "statistics.aerialLost",
        accessorKeySecond: "statistics.aerialWon",
      },
      {
        header:"Possession lost",
        accessorKey:"statistics.possessionLostCtrl",
        sorted:true
      },
      {
        header:"Fouls",
        accessorKey:"statistics.fouls",
        sorted:true
      },
      {
        header:"Was fouled",
        accessorKey:"statistics.wasFouled",
        sorted:true
      },
      {
        header:"Offsides",
        accessorKey:"statistics.totalOffside",
        sorted:true
      },
      {
        header:"Position",
        accessorKey:"player.position",
        sorted:true
      },
      {
        header:"Rating",
        accessorKey:"statistics.rating",
        sorted:true
      },
    ]
  },
  {
    id: 5,
    name: "Goalkeeper",
    data: [
      {
        header: "Saves",
        accessorKey: "statistics.saves",
        sorted: true,
      },
      {
        header: "Goals prevented",
        accessorKey: "goalsPrevented",
        sorted: true,
      },
      {
        header: "Punches",
        accessorKey: "savedShotsFromInsideTheBox",
        sorted: true,
      },
      {
        header: "Runs out(succ.)",
        accessorKey: "runsOut",
        sorted: true,
      },
      {
        header: "High claims",
        accessorKey: "",
      },
      {
        header: "Notes",
        accessorKey: "statistics.savedShotsFromInsideTheBox",
        accessorKeySecond:"statistics.penaltySave"
      },
      {
        header: "Rating",
        accessorKey: "statistics.rating",
        sorted: true,
      },
    ],
  },
];

export default columns;
