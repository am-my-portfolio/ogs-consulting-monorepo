import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

import { useExternalApi } from '@/composables/useExternalApi';
import { base_url } from '@/helpers/constants';
import CONFIG from '@/helpers/config';

export const UseOpenAi = () => {
  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    apiKey: CONFIG.API_KEY_OPENAI,
  });

  const useChatInvoke = async (prompt: string) => {
    const messages = [
      new SystemMessage('Translate the following from English into Italian'),
      new HumanMessage('hi!'),
    ];

    await model.invoke(messages);
  };

  const useChatStream = async (prompt: string) => {
    const messages = [
      new SystemMessage('Translate the following from English into Italian'),
      new HumanMessage(prompt),
    ];
    console.log({ model, messages });
    return await model.stream(messages);
  };

  const useRag = async (prompt: string) => {
    const config = {
      url: `${base_url}/rag/completion/${prompt}`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await useExternalApi({ config });
    return data;
  };
  return {
    useRag,
    useChatInvoke,
    useChatStream,
    // useAgent,
    // useWorkflow,
    // useSummarization,
  };
};
