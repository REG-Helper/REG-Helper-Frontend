export type GetSkillsResponse = {
  nameEn: string;
  nameTh: string;
  weight: number;
};

export type TopJob = {
  nameTh: string;
  nameEn: string;
  relevancyScore: number;
};

export type GetTopJobsResponse = {
  topJobs: TopJob[];
};
