import { fetcher } from "@/lib";
import useSWR, { SWRResponse } from "swr";

export const useHTTP = <T>(url: string): SWRResponse<T> => {
  return useSWR<T>(url, fetcher);
};
