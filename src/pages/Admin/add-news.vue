<template>
  <div class="q-pa-md flex justify-center">
    <q-card
      class="w-full max-w-full sm:max-w-2xl lg:max-w-4xl q-pa-sm sm:q-pa-md lg:q-pa-lg shadow-2"
    >
      <div class="q-gutter-md">
        <q-input filled v-model="text" label="Title" />
        <q-select
          filled
          v-model="category"
          :options="categoryOptions"
          label="Category"
          emit-value
          map-options
        />
        <q-select
          filled
          v-model="tag"
          :options="tagOptions"
          label="Tags"
          multiple
          use-chips
          emit-value
          map-options
        />
        <div class="q-mb-sm">
          <q-badge color="teal"> Publication Date: {{ date }} </q-badge>
        </div>

        <q-btn icon="event" round color="primary">
          <q-popup-proxy
            @before-show="updateProxy"
            cover
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="proxyDate">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>

        <q-editor
          v-model="qeditor"
          :dense="$q.screen.lt.md"
          @paste="onPaste"
          :toolbar="[
            ['save', 'upload'],
            ['left', 'center', 'right', 'justify'],
            ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
            ['token', 'hr', 'link', 'custom_btn'],
            ['print', 'fullscreen'],
            [
              {
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
              },
              {
                label: $q.lang.editor.fontSize,
                icon: $q.iconSet.editor.fontSize,
                fixedLabel: true,
                fixedIcon: true,
                list: 'no-icons',
                options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7'],
              },
              {
                label: $q.lang.editor.defaultFont,
                icon: $q.iconSet.editor.font,
                fixedIcon: true,
                list: 'no-icons',
                options: [
                  'default_font',
                  'arial',
                  'arial_black',
                  'comic_sans',
                  'courier_new',
                  'impact',
                  'lucida_grande',
                  'times_new_roman',
                  'verdana',
                ],
              },
              'removeFormat',
            ],
            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
            ['undo', 'redo'],
            ['viewsource'],
          ]"
          :fonts="{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana',
          }"
          :definitions="{
            save: {
              tip: 'Save your work',
              icon: 'save',
              label: 'Save',
              handler: saveWork,
            },
            upload: {
              tip: 'Upload file',
              icon: 'cloud_upload',
              label: 'Upload',
              handler: uploadIt,
            },
          }"
        />

        <div class="flex justify-end">
          <q-btn class="glossy" color="teal" label="Save" @click="submitNews" />
        </div>

        <input
          ref="fileInput"
          type="file"
          accept="image/*,video/*,.gif"
          style="display: none"
          @change="onFileChange"
        />
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface SelectOption {
  label: string;
  value: number;
}

const $q = useQuasar();
const text = ref('');
const category = ref<number | null>(null);
const categoryOptions = ref<SelectOption[]>([]);
const tag = ref<number[]>([]);
const tagOptions = ref<SelectOption[]>([]);
const today = new Date().toISOString().slice(0, 10);
const date = ref(today);
const proxyDate = ref(today);
const qeditor = ref(localStorage.getItem('news-content') || '');
const fileInput = ref<HTMLInputElement | null>(null);

const updateProxy = () => {
  proxyDate.value = date.value;
};

const save = () => {
  date.value = proxyDate.value;
};

const uploadIt = () => {
  fileInput.value?.click();
};

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target?.result;
    if (typeof result !== 'string') return;
    let tag = '';
    if (file.type.startsWith('image/')) {
      tag = `
        <div class="editor-img-wrapper" contenteditable="false" draggable="true" style="resize: both; overflow: auto; display: inline-block;">
          <img src="${result}" alt="${file.name}" style="width: 100%; height: auto; display: block;" />
          <button class="editor-img-remove" onclick="this.parentNode.remove()">✖</button>
        </div>
      `;
    } else if (file.type.startsWith('video/')) {
      tag = `<video controls style="max-width:100%;"><source src="${result}" type="${file.type}"></video>`;
    } else {
      $q.notify({
        message: 'Unsupported file type.',
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
      });
      return;
    }
    qeditor.value += tag;
    $q.notify({
      message: 'File uploaded!',
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
    });
    input.value = '';
  };
  reader.readAsDataURL(file);
};

const saveWork = () => {
  localStorage.setItem('news-content', qeditor.value);
  $q.notify({
    message: 'Saved your text to local storage',
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
  });
};

const onPaste = (evt: ClipboardEvent) => {
  if ((evt.target as HTMLElement).nodeName === 'INPUT') return;
  evt.preventDefault();
  evt.stopPropagation();
  let text = '';
  if (evt.clipboardData && evt.clipboardData.getData) {
    text = evt.clipboardData.getData('text/plain');
  }
  qeditor.value += text;
};

onMounted(() => {
  void fetchOptions();
  const editor = document.querySelector('.q-editor__content');
  if (!editor) return;
  let dragged: HTMLElement | null = null;
  editor.addEventListener('dragstart', (e) => {
    const event = e as DragEvent;
    const target = event.target as HTMLElement;
    if (target.classList.contains('editor-img-wrapper')) {
      dragged = target;
      event.dataTransfer?.setData('text/plain', '');
    }
  });
  editor.addEventListener('dragover', (e) => {
    if (dragged) e.preventDefault();
  });
  editor.addEventListener('dragover', (e) => {
    const event = e as DragEvent;
    if (dragged) {
      event.preventDefault();
    }
  });
  editor.addEventListener('drop', (e) => {
    const event = e as DragEvent;
    if (dragged) {
      event.preventDefault();
      let range: Range | null = null;
      if ('caretRangeFromPoint' in document && typeof document.caretRangeFromPoint === 'function') {
        range = document.caretRangeFromPoint(event.clientX, event.clientY);
      } else if (
        'caretPositionFromPoint' in document &&
        typeof (
          document as Document & {
            caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number };
          }
        ).caretPositionFromPoint === 'function'
      ) {
        const pos = (
          document as Document & {
            caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number };
          }
        ).caretPositionFromPoint!(event.clientX, event.clientY);
        if (pos) {
          range = document.createRange();
          range.setStart(pos.offsetNode, pos.offset);
        }
      }
      if (range) {
        range.insertNode(dragged);
      }
      dragged = null;
    }
  });
});

const fetchOptions = async () => {
  try {
    const { data } = await api.get('/news/options'); // Use the new endpoint
    categoryOptions.value = data.categories.map((c: Category) => ({
      label: c.name,
      value: c.id,
    }));
    tagOptions.value = data.tags.map((t: Tag) => ({
      label: t.name,
      value: t.id,
    }));
} catch (err) {
  console.error('Error loading options:', err);
  $q.notify({
    message: 'Failed to load options',
    color: 'red-5',
    textColor: 'white',
    icon: 'error',
  });
}

};


const submitNews = async () => {
  try {
    await api.post('/news', {
      title: text.value,
      content: qeditor.value,
      category_id: category.value,
      tags: tag.value,
      publication_date: date.value,
    });

    $q.notify({
      message: 'News submitted successfully',
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
    });
  } catch (error: unknown) {
    const err = error as { response?: { data?: { message?: string } } };
    $q.notify({
      message: err.response?.data?.message || 'Submission failed',
      color: 'red-5',
      textColor: 'white',
      icon: 'error',
    });
  }
};
</script>

<style>
.editor-img-wrapper {
  position: relative;
  min-width: 40px;
  min-height: 40px;
  max-width: 100%;
  max-height: 400px;
  margin: 4px;
  display: inline-block;
  vertical-align: middle;
  resize: both;
  overflow: auto;
}
.editor-img-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  pointer-events: none;
  user-select: none;
}
.editor-img-remove {
  position: absolute;
  top: 2px;
  right: 2px;
  background: #f44336;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 14px;
  cursor: pointer;
  z-index: 2;
  opacity: 0.85;
  transition: opacity 0.2s;
}
.editor-img-remove:hover {
  opacity: 1;
}
</style>
