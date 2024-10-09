// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FilterSection from "@/sections/FilterSection";
import GeneralDataSection from "@/sections/GeneralDataSection";
import { lazy, memo, Suspense } from "react";
const MapLazy = lazy(() => import("@/sections/Map"));
const Map = memo(MapLazy);

const DashBoardPage = () => {
  return (
    <div className="p-4 xl:p-8 flex flex-col gap-8 ">
      <GeneralDataSection />
      <FilterSection />
      <Suspense fallback={<div>Loading...</div>}>
        <Map />
      </Suspense>
    </div>
  );
};

export default DashBoardPage;

// const Card = ({
//   heading,
//   amount,
//   buttonTitle,
//   form,
// }: {
//   heading: string;
//   amount: number;
//   buttonTitle: string;
//   form?: React.ReactNode;
// }) => {
//   return (
//     <div className="bg-white shadow-[0px_0px_20px_#00000040] p-4 rounded-md gap-3 flex flex-col">
//       <h1 className="text-xl font-medium text-gray-800">{heading}</h1>
//       <p className="text-md text-gray-800">{amount}</p>
//       {!!form && (
//         <Dialog>
//           <DialogTrigger asChild>
//             <button className="bg-blue-600 w-full text-white p-2 rounded-md">
//               {buttonTitle}
//             </button>
//           </DialogTrigger>
//           <DialogContent className="xl:w-[400px] p-5">{form}</DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };
