export interface ResponsePayload<T = any> {
  message: string;
  data: T;
}
