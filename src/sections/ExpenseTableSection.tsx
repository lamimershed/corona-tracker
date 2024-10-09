import { DataTable } from "@/components/common/DataTable";
// import LoadingUI from "@/components/common/LoadingUI";
import { indiaStatesCoordinates } from "@/service/statedata";

export type TtransactionData = {
  loc: string;
  latitude: number;
  longitude: number;
  confirmedCasesIndian: number;
  discharged: number;
  deaths: number;
}[];

const ExpenseTableSection = () => {
  return (
    <div>
      <DataTable
        columns={[
          {
            accessorKey: "loc",
            header: "State",
            // header: ({ column }) => {
            //   return (
            //     <Button
            //       variant="ghost"
            //       onClick={() =>
            //         column.toggleSorting(column.getIsSorted() === "asc")
            //       }
            //     >
            //       Date
            //       <ArrowUpDown className="ml-2 h-4 w-4" />
            //     </Button>
            //   );
            // },
          },
          {
            accessorKey: "confirmedCasesIndian",
            header: "Total Cases",
            // header: ({ column }) => {
            //   return (
            //     <Button
            //       variant="ghost"
            //       onClick={() =>
            //         column.toggleSorting(column.getIsSorted() === "asc")
            //       }
            //     >
            //       Name
            //       <ArrowUpDown className="ml-2 h-4 w-4" />
            //     </Button>
            //   );
            // },
          },
          {
            accessorKey: "deaths",
            header: "Deaths Reported",
          },
          {
            accessorKey: "discharged",
            header: "Discharged cases",
          },
        ]}
        data={indiaStatesCoordinates ?? []}
      />
    </div>
  );
};

export default ExpenseTableSection;
