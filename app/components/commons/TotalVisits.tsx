import { TrendingUp } from "lucide-react";
import React from "react";

const TotalVisits = () => {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white" >Total de visitas</span>
      <div className=" flex items-center gap-2 text-accent-green">
        <span className="text-3xl fonte-bold">12344</span>
        <TrendingUp/>
      </div>
      {/* <div className="flex items-center gap-2">
        <button>Sair</button>
        <button>Portal</button>
      </div> */}
    </div>
  );
};

export default TotalVisits;
