import { useGetCovidData } from "@/service/service";
import { cn } from "@/utils/cn";

const GeneralDataSection = () => {
  const { data } = useGetCovidData();
  /* eslint-disable */
  return (
    <div className="flex max-xl:flex-col gap-[20px]">
      <DisplayCard title="Total Cases" caseNo={data?.data.summary.total} />
      <DisplayCard
        title="Total Active Cases"
        caseNo={
          data?.data.summary.confirmedCasesIndian! -
          data?.data?.summary?.discharged! -
          data?.data?.summary?.deaths!
        }
      />
      <DisplayCard
        title="Total Discharged"
        caseNo={data?.data.summary.discharged}
      />
      <DisplayCard
        death
        title="Total Deaths"
        caseNo={data?.data.summary.deaths}
      />
    </div>
  );
};

export default GeneralDataSection;

const DisplayCard = ({
  caseNo,
  title,
  death = false,
}: {
  title: string;
  caseNo?: number;
  death?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full border border-gray-500 rounded-lg overflow-hidden",
      )}
    >
      <p
        className={cn(
          "p-2 bg-blue-600 text-white font-semibold ",
          death && "bg-red-500 ",
        )}
      >
        {title}
      </p>
      <p className={cn("p-2   font-semibold ", death && "text-red-600")}>
        No of Cases: {caseNo}
      </p>
    </div>
  );
};
