// import { DataTable } from "@/components/common/DataTable";
// import LoadingUI from "@/components/common/LoadingUI";
// import { Button } from "@/components/ui/button";
// import { collection, orderBy, query, where } from "firebase/firestore";
// import { ArrowUpDown } from "lucide-react";
// import { useState } from "react";

// export type TtransactionData = {
//   date: string;
//   name: string;
//   type: string;
//   amount: string;
//   tag: string;
//   id: string;
// }[];

// const ExpenseTableSection = () => {

//   return (
//     <div className="flex flex-col">
//       <h1 className="text-[30px] mb-[20px] font-semibold text-gray-800 text-center">
//         Transactions
//       </h1>
//       <h2 className="text-[20px] mb-[12px] font-semibold text-gray-800 text-center">
//         Transaction Filters
//       </h2>

//       <h2 className="text-[20px] mb-[12px] font-semibold text-gray-800 text-center">
//         Transaction Table
//       </h2>
//       <DataTable
//         columns={[
//           {
//             accessorKey: "date",
//             header: ({ column }) => {
//               return (
//                 <Button
//                   variant="ghost"
//                   onClick={() =>
//                     column.toggleSorting(column.getIsSorted() === "asc")
//                   }
//                 >
//                   Date
//                   <ArrowUpDown className="ml-2 h-4 w-4" />
//                 </Button>
//               );
//             },
//           },
//           {
//             accessorKey: "name",
//             // header: "Name",
//             header: ({ column }) => {
//               return (
//                 <Button
//                   variant="ghost"
//                   onClick={() =>
//                     column.toggleSorting(column.getIsSorted() === "asc")
//                   }
//                 >
//                   Name
//                   <ArrowUpDown className="ml-2 h-4 w-4" />
//                 </Button>
//               );
//             },
//           },
//           {
//             accessorKey: "type",
//             header: "Type",
//           },
//           {
//             accessorKey: "amount",
//             header: "Amount",
//           },
//           {
//             accessorKey: "tag",
//             header: "Tag",
//           },
//         ]}
//         data={tdata ?? []}
//       />
//     </div>
//   );
// };

// export default ExpenseTableSection;

// const FilterButton = ({
//   title,
//   onClick,
// }: {
//   title: string;
//   onClick: () => void;
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="p-[10px_14px] shadow-[0px_0px_5px_#00000040] rounded-lg"
//     >
//       {title}
//     </button>
//   );
// };
