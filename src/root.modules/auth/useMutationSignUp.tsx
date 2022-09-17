import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'root.modules/api';
import { API_SIGN_UP } from 'root.modules/query/queryKey';

export const requestSignUp = async ({ querykey, payload }: any) => {
  const url = querykey;
  const params = { url, data: payload };
  const res = await api.POST(params);
  if (res.data.error) throw res.data.error;
  return res.data;
};

export const useMutaitonSignUp = () => {
  const queryClient = useQueryClient();
  const querykey = API_SIGN_UP;

  const mutate = useMutation((payload: any) => {
    return requestSignUp({ payload, querykey });
  });
  return mutate;
};
