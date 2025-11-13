<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { site } = useData()

const changelogMeta = ref([])
const changelogs = ref([])
const fromVersion = ref('')
const toVersion = ref('')
const errorMessage = ref('')
const loading = ref(true)

async function detectChangelogs() {
  try {
    const files = import.meta.glob('./changelogs/*.md', { query: '?raw', import: 'default' })

    const entries = []
    for (const path in files) {
      const version = path.match(/(\d+(?:\.\d+)+)\.md$/)?.[1]
      if (version) {
        entries.push({ version, path, loader: files[path] })
      }
    }

    changelogMeta.value = entries.sort((a, b) => compareVersions(b.version, a.version))
  } catch (e) {
    console.error('Failed to detect changelog files:', e)
  }
}

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  const versionRange = params.get('versions') || params.get('v')

  if (versionRange) {
    const parts = versionRange.split('-')
    if (parts.length === 2) {
      fromVersion.value = parts[0]
      toVersion.value = parts[1]
    } else if (parts.length === 1) {
      toVersion.value = parts[0]
    }
  }

  await detectChangelogs()
  await loadChangelogs()
})

async function loadChangelogs() {
  loading.value = true
  const loaded = []

  for (const meta of changelogMeta.value) {
    try {
      const markdown = await meta.loader()
      const html = renderMarkdown(markdown)
      loaded.push({ ...meta, content: html })
    } catch (error) {
      console.error(`Failed to load ${meta.path}:`, error)
    }
  }

  changelogs.value = loaded
  loading.value = false
}

function renderMarkdown(markdown) {
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\s*[-]{3,}\s*$/gim, '<hr>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/^\s*[-*]\s+(.*)$/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gim, '<ul>$&</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')

  if (!html.startsWith('<p>') && !html.startsWith('<h')) {
    html = '<p>' + html + '</p>'
  }

  return html
}

function compareVersions(a, b) {
  const aParts = a.split('.').map(Number)
  const bParts = b.split('.').map(Number)
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aVal = aParts[i] || 0
    const bVal = bParts[i] || 0
    if (aVal > bVal) return 1
    if (aVal < bVal) return -1
  }
  return 0
}

const filteredChangelogs = computed(() => {
  errorMessage.value = ''

  if (!fromVersion.value && !toVersion.value) {
      return [...changelogs.value].sort((a, b) => compareVersions(a.version, b.version))
    }

  const from = fromVersion.value
  const to = toVersion.value

  let filtered = changelogs.value.filter(log => {
    if (from && to) {
      return compareVersions(log.version, from) > 0 &&
             compareVersions(log.version, to) <= 0
    } else if (from) {
      return compareVersions(log.version, from) > 0
    } else if (to) {
      return compareVersions(log.version, to) <= 0
    }
    return true
  })

  if (filtered.length === 0 && changelogs.value.length > 0) {
    errorMessage.value = `No changelogs found for version range ${from ? from + ' to ' : ''}${to || ''}`
  }

  return filtered.sort((a, b) => compareVersions(a.version, b.version))
})
</script>

<template>
  <div class="changelog-viewer">
    <div class="version-selector">
      <h2>Changelog Viewer</h2>

      <div class="inputs">
        <div class="input-group">
          <label for="from">From Version:</label>
          <select id="from" v-model="fromVersion">
            <option value="">-- none --</option>
            <option v-for="meta in changelogMeta" :key="meta.version" :value="meta.version">
              {{ meta.version }}
            </option>
          </select>
        </div>

        <div class="input-group">
          <label for="to">To Version:</label>
          <select id="to" v-model="toVersion">
            <option value="">-- none --</option>
            <option v-for="meta in changelogMeta" :key="meta.version" :value="meta.version">
              {{ meta.version }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="loading" class="loading">Loading changelogs...</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    <div class="changelogs">
      <div
        v-for="log in filteredChangelogs"
        :key="log.version"
        class="changelog-entry"
      >
        <h2 id="version-{{ log.version }}">Version {{ log.version }}</h2>
        <div class="content" v-html="log.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.changelog-viewer {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.version-selector {
  background: var(--vp-c-bg-soft);
  padding: 0 16px 16px 16px;
  border-radius: 8px;
  margin-bottom: 32px;
}

.inputs {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.input-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.loading, .error {
  text-align: center;
  padding: 20px;
}

.changelogs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.changelog-entry {
  background: var(--vp-c-bg-soft);
  padding: 0 16px 16px 16px;
  border-radius: 8px;
}

.changelog-entry h2 {
  margin-top: 0;
  padding-top: 16px;
  color: var(--vp-c-brand);
}

.content {
  line-height: 1.6;
}

.content :deep(hr) {
  border: none;
  border-top: 1px solid var(--vp-c-border);
  margin: 16px 0;
}
</style>
