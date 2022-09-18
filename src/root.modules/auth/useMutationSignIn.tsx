import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'root.modules/api';
import { API_SIGN_IN } from 'root.modules/query/queryKey';

export const requestSignIn = async ({ querykey, payload }: any) => {
  const url = querykey;
  const params = { url, data: payload };
  const res = await api.POST(params);
  if (res.data.error) throw res.data.error;
  return res.data;
};

export const useMutaitonSignIn = () => {
  const queryClient = useQueryClient();
  const querykey = API_SIGN_IN;

  const { data, isLoading, mutate } = useMutation((payload: any) => {
    return requestSignIn({ payload, querykey });
  });
  return { data, isLoading, mutate };
};
