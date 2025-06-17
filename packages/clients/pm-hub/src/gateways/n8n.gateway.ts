import { useExternalApi } from '@/composables/useExternalApi';

// just for debugging purposes
export const getWorkflow = async () => {
  const config = {
    url: `http://localhost/api/v1/workflows`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'X-N8N-API-KEY': import.meta.env.VITE_N8N_API_KEY,
    },
  };

  const { data, error } = await useExternalApi({ config });
  console.log(data, error);
};
