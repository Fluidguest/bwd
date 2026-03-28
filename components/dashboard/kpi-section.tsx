import { DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { KPICard } from "./kpi-card";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$124,592",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Total Expenses",
    value: "$45,231",
    change: "+4.3%",
    changeType: "negative" as const,
    icon: TrendingDown,
    description: "from last month",
  },
  {
    title: "Net Profit",
    value: "$79,361",
    change: "+18.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "from last month",
  },
  {
    title: "Cash Flow",
    value: "$32,450",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Wallet,
    description: "from last month",
  },
];

export function KPISection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}
