<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <button
        class="fixed hidden lg:block bottom-36 right-16 inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 rounded-full w-16 h-16 cursor-pointer border border-pop-secondary normal-case leading-5 text-pop-secondary hover:text-pop-primary bg-black"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <i class="fa-solid fa-comment-dots text-3xl"></i>
      </button>

      <div
        class="grid grid-col-1 md:grid-cols-3 xl:grid-cols-5 font-mono text-md"
      >
        <div
          class="col-start-1 md:col-start-1 md:col-end-4 xl:col-start-1 xl:col-end-6"
        >
          <div
            class="mt-10 bg-pop-secondary/70 p-6 rounded-lg border border-pop-primary"
          >
            <!-- Chat Container -->
            <div class="h-[50vh] overflow-y-auto scrollbar">
              <div v-for="item in conversation">
                <div id="question" class="place-self-start">
                  <!--  User Chat Message/Question -->
                  <div class="flex flex-1 gap-3 my-4 text-dull-secondary">
                    <span
                      class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"
                    >
                      <div class="rounded-full bg-gray-100 border px-2 py-1.4">
                        <i class="fa-solid fa-user text-pop-primary"></i>
                      </div>
                    </span>
                    <p class="leading-relaxed">
                      {{ item.question }}
                    </p>
                  </div>
                </div>

                <div id="answer" class="place-self-end">
                  <!-- AI Chat Message/Answer -->
                  <div class="flex flex-1 gap-2 my-4">
                    <div class="leading-relaxed">
                      <span class="italic text-pop-primary text-pretty">
                        {{ item.answer }}
                      </span>
                    </div>

                    <span
                      class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"
                    >
                      <div class="rounded-full bg-gray-100 border px-1.5 py-1">
                        <i
                          class="fa-solid fa-wand-magic-sparkles text-pop-primary"
                        ></i>
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <div ref="scroll_to" class="scroll-mb-36 snap-y snap-end"></div>
            </div>

            <!-- Input box  -->
            <div class="relative flex flex-col my-4">
              <input
                v-model="question"
                placeholder="Type your message"
                @keyup.enter.native="chatDirect()"
                class="flex h-20 w-full rounded-md border border-dull-secondary px-3 py-2 placeholder-pop-primary/50 text-pop-primary focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2"
              />

              <i
                class="fa-solid fa-paper-plane text-pop-primary pointer-events-none absolute inset-y-8 right-0 items-center pr-3"
                aria-hidden="true"
              ></i>

              <label for="file_input">
                <span>
                  <i
                    class="fa-solid fa-paperclip text-pop-primary cursor-pointer absolute inset-y-8 right-8 items-center pr-3"
                    aria-hidden="true"
                  ></i
                ></span>
                <input
                  hidden
                  id="file_input"
                  ref="file_input"
                  type="file"
                  @change="handleFileUpload()"
                  accept=".pdf, .doc, .txt, .jpg, .jpeg, .png, .ppt, .pptx, .xls, .xlsx, .svg, .mov, .mp4"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { base_url } from '@/helpers/constants';
import { UseOpenAi } from '@/composables/useOpenAi';
// import { UseAnthropic } from '@/composables/useAnthropic';
import { PageDivisionLayout } from '@am-ogs/vue-ui';

// const { useChatStream } = UseAnthropic();

defineProps<{
  title: string;
  description: string;
}>();

const question = ref(undefined);
const conversation = ref([]);
const scroll_to = ref();
const chatSSE = async () => {
  const provider = 'rag'; // openai | ollama | rag
  const eventSource = new EventSource(
    `${base_url}/${provider}/completion/${question.value}`,
  );

  const new_entry = ref({
    question: question.value,
    answer: undefined,
  });
  question.value = undefined;
  conversation.value.push(new_entry.value);

  eventSource.onmessage = (event) => {
    console.log('onmessage:', event.data);
    new_entry.value.answer = `${new_entry.value.answer ?? ''} ${event.data}`;
  };

  eventSource.onerror = (error) => {
    // console.error("SSE Error:", error);
    eventSource.close();
  };
};

const chatDirect = async () => {
  const new_entry = ref({
    question: question.value,
    answer: undefined,
  });
  question.value = undefined;
  conversation.value.push(new_entry.value);

  const stream = []; //await useChatStream(new_entry.value.question);
  for await (const chunk of stream) {
    console.log(chunk.content);
    new_entry.value.answer = `${new_entry.value.answer ?? ''} ${chunk.content}`;
  }

  scroll_to.value?.scrollIntoView({ behavior: 'smooth' });
};

const file_input = ref<HTMLInputElement | null>(null);
const files = ref();
const handleFileUpload = async () => {
  // const { summarizeWithAnthropic, privateSummarize } = useRecipes();

  files.value = file_input.value?.files;
  const file = file_input.value.files[0];

  const new_entry = ref({
    question: `summarize document ${file.name}`,
    answer: undefined,
  });
  question.value = undefined;
  conversation.value.push(new_entry.value);

  // const summary = await summarizeWithAnthropic(file);
  // const stream = await privateSummarize(file);
  // const readableStream = streamToReadableStream(stream);
  // const reader = readableStream.getReader();

  // while (true) {
  //   const { done, value } = await reader.read();
  //   if (done) break;

  //   // Process the chunk of data
  //   const chunk = new TextDecoder().decode(value);
  //   const jsonData = JSON.parse(chunk);
  //   const content = jsonData.choices[0].delta.content;
  //   new_entry.value.answer = `${new_entry.value.answer ?? ''} ${content}`;
  // }

  // new_entry.value.answer = summary.text;
};
</script>
