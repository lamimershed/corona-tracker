export type TcovidData = {
  success: boolean;
  data: {
    summary: {
      total: number;
      confirmedCasesIndian: number;
      confirmedCasesForeign: number;
      discharged: number;
      deaths: number;
      confirmedButLocationUnidentified: number;
    };
    "unofficial-summary": {
      source: string;
      total: number;
      recovered: number;
      deaths: number;
      active: number;
    }[];
    regional: {
      loc: string;
      confirmedCasesIndian: number;
      confirmedCasesForeign: number;
      discharged: number;
      deaths: number;
      totalConfirmed: number;
    }[];
  };
  lastRefreshed: string;
  lastOriginUpdate: string;
};

export type Toptions = { label: string; value: string }[];
