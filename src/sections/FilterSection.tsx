import SearchDropDown from "@/components/common/SearchDropDown";
import { useGetCovidData } from "@/service/service";
import { Toptions } from "@/types";
import { X } from "lucide-react";
import { useState } from "react";
import ChartSection from "./ChartSection";

const FilterSection = () => {
  const [values, setValues] = useState<Toptions | []>([]);
  const { data } = useGetCovidData();
  const states = data?.data?.regional?.map((item) => ({
    label: item.loc,
    value: item.loc?.split(" ").join("-"),
  }));

  const handleRemove = (value: string) => {
    const filterValue = values?.filter((item) => item?.value !== value);
    setValues(filterValue);
  };

  return (
    <div className="gap-y-[20px] flex flex-col">
      <h2 className="text-2xl font-semibold">Filter Case By State</h2>
      <div className="flex gap-3 max-xl:flex-col">
        <div className="xl:w-[300px] w-full">
          <SearchDropDown
            options={states!}
            values={values}
            setValues={setValues}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {values.map((item) => (
            <button
              onClick={() => handleRemove(item.value)}
              key={item.value}
              className="shadow-[0px_0px_5px_#00000040] p-2 rounded-full flex items-center gap-1 "
            >
              <X className="h-6 w-6 " />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <ChartSection values={values} />
    </div>
  );
};

export default FilterSection;
