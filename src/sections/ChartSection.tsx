import { useGetCovidData } from "@/service/service";
import { TcovidData, Toptions } from "@/types";
import Plot, { PlotParams } from "react-plotly.js";

type Props = {
  values: Toptions;
};
/* eslint-disable */
const ChartSection = ({ values }: Props) => {
  const { data } = useGetCovidData();
  const acumulateData = data?.data?.regional?.filter((item) =>
    values.map((item) => item.label).includes(item.loc),
  );

  const total: TcovidData["data"]["regional"][0] | undefined =
    acumulateData?.length
      ? acumulateData?.reduce((acc, item) => {
          return {
            confirmedCasesIndian:
              acc.confirmedCasesIndian + item.confirmedCasesIndian,
            confirmedCasesForeign:
              acc.confirmedCasesForeign + item.confirmedCasesForeign,
            discharged: acc.discharged + item.discharged,
            deaths: acc.deaths + item.deaths,
            totalConfirmed: acc.totalConfirmed + item.totalConfirmed,
            loc: "Total",
          };
        })
      : undefined;

  const pieGraph: PlotParams["data"] = [
    {
      type: "pie",
      values: [
        total?.totalConfirmed!,
        total?.totalConfirmed! - total?.deaths! - total?.discharged!,
        total?.discharged!,
        total?.deaths!,
      ],
      labels: [
        "Total Cases",
        "Active Cases",
        "Recoverd Cases",
        "Death Reported",
      ],
      texttemplate: "%{label}: %{value} (%{percent})",
      textposition: "inside",
    },
  ];
  const barGraph: PlotParams["data"] = [
    {
      type: "bar",
      y: [
        total?.totalConfirmed!,
        total?.totalConfirmed! - total?.deaths! - total?.discharged!,
        total?.discharged!,
        total?.deaths!,
      ],
      x: ["Total Cases", "Active Cases", "Recoverd Cases", "Death Reported"],
      marker: {
        color: "#C8A2C8",
        line: {
          width: 2.5,
        },
      },
    },
  ];

  const config: PlotParams["config"] = {
    //   responsive: true,
    displayModeBar: false,
  };
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-2xl font-semibold">Data </h2>
        <p className="text-[20px] font-medium ">
          total:case {total?.confirmedCasesIndian}
        </p>
        <p className="text-[20px] font-medium ">
          Discharged: {total?.discharged}
        </p>
        <p className="text-[20px] font-medium ">Deaths: {total?.deaths}</p>
        <p className="text-[20px] font-medium ">
          Total active:{" "}
          {total
            ? total?.totalConfirmed! - total?.deaths! - total?.discharged!
            : ""}
        </p>
      </div>
      <div className="flex gap-4 max-xl:flex-col overflow-hidden">
        <div className=" xl:w-[50%]">
          <Plot
            data={pieGraph}
            layout={{
              title: "Pie Chart",
              showlegend: false,
            }}
            config={config}
          />
        </div>
        <div className="xl:w-[50%]">
          <Plot
            data={barGraph}
            layout={{
              title: "Bar Graph",
              showlegend: false,
            }}
            config={config}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
