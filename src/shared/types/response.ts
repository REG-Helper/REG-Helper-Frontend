export type PaginationResponse<T> = {
  data: T[];
  metadata: PaginationMetaData;
};

type PaginationMetaData = {
  perPage: number;
  prevPage: number;
  currentPage: number;
  nextPage: number;
  lastPage: number;
};
