// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import ExpenseTableSection from "@/sections/ExpenseTableSection";
import FilterSection from "@/sections/FilterSection";
import GeneralDataSection from "@/sections/GeneralDataSection";
import { cn } from "@/utils/cn";
import { lazy, memo, Suspense, useState } from "react";
const MapLazy = lazy(() => import("@/sections/Map"));
const Map = memo(MapLazy);
const ExpenseTableSectionLazy = lazy(
  () => import("@/sections/ExpenseTableSection"),
);
const ExpenseTableSection = memo(ExpenseTableSectionLazy);

const DashBoardPage = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-4 xl:p-8 flex flex-col gap-8 ">
      <GeneralDataSection />
      <FilterSection />

      {/* HEADING FOR MAP / TABLE */}
      <h2 className="text-2xl font-semibold text-center">
        Covid Data Map and Table View
      </h2>
      <div className="flex gap-4 justify-center">
        <button
          className={cn(
            "bg-blue-600 text-white p-2 rounded-md",
            show && "bg-gray-400",
          )}
          onClick={() => setShow(false)}
        >
          Show Table
        </button>
        <button
          className={cn(
            "bg-blue-600 text-white p-2 rounded-md",
            !show && "bg-gray-400",
          )}
          onClick={() => setShow(true)}
        >
          Show Map
        </button>
      </div>
      <div>
        {show ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Map />
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <ExpenseTableSection />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default DashBoardPage;
