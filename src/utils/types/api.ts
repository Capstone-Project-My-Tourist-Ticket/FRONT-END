export interface ResponsePayload<T = any> {
  message: string;
  data: T;
}

export interface ResponsePayloadPagination<T = any> {
  message: string;
  total_page: number;
  data: T;
}
