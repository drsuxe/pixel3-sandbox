<script setup lang="ts">
import { computed, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import {
  MpAvatar,
  MpBadge,
  MpButton,
  MpFlex,
  MpIcon,
  MpPopover,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpPopoverTrigger,
  MpProgress,
  MpTable,
  MpTableBody,
  MpTableCell,
  MpTableContainer,
  MpTableHead,
  MpTableRow,
  MpText,
  MpTooltip,
  css,
} from '@mekari/pixel3'
import swapi from './swapi.json'

const timeToRender = ref(0)
const firstInputDelay = ref(0)
const timeToUpdate = ref(0)
const numberOfData = ref(0)
const startBenchmark = ref(0)

const swapiData = computed(() => {
  return swapi.results.slice(numberOfData.value)
})

onBeforeUpdate(() => {
  console.log('before updated')
  startBenchmark.value = window.performance.now()
})

onMounted(() => {
  console.log('mounted')
  perfObserver()
})

onUpdated(() => {
  console.log('updated')
  domBenchmark()
})

function perfObserver() {
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      timeToRender.value = entry.loadEventEnd - entry.responseEnd
      console.log('TIME TO RENDER', timeToRender.value)
    }
  }).observe({ type: 'navigation', buffered: true })

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      firstInputDelay.value = entry.processingStart - entry.startTime
      console.log('TIME TO INTERACTIVE', firstInputDelay.value)
    }
  }).observe({ type: 'first-input', buffered: true })
}

function domBenchmark() {
  const end = window.performance.now()
  timeToUpdate.value = end - startBenchmark.value
  console.log('TIME TO UPDATE', timeToUpdate.value)
}

function handleBadgeColor(gender) {
  let color = 'gray'
  if (gender === 'male')
    color = 'blue'

  if (gender === 'female')
    color = 'red'

  return color
}

function handleRemoveData() {
  numberOfData.value += 10
}
</script>

<template>
  <MpFlex m="4" direction="column">
    <MpText size="h1" weight="semiBold">
      Table Advance Pixel Vue 3 1231
    </MpText>
    <MpFlex direction="column" mt="2" mb="4" bg="brand.mekari">
      <MpText size="body">
        Star Wars Character:
        <b><code>{{ `${swapiData.length}` }}</code></b>
      </MpText>
      <MpText size="body">
        Time to render:
        <b><code>{{ `${timeToRender}ms` }}</code></b>
      </MpText>
      <MpText size="body">
        First input delay:
        <b><code>{{ `${firstInputDelay}ms` }}</code></b>
      </MpText>
      <MpText size="body">
        Time to update:
        <b><code>{{ `${timeToUpdate}ms` }}</code></b>
      </MpText>
    </MpFlex>
    <MpFlex gap="2" mb="8">
      <MpButton @click="handleRemoveData">
        Remove 10 data
      </MpButton>
    </MpFlex>
    <MpTableContainer
      :class="
        css({
          height: '600px',
          overflow: 'scroll',
        })
      "
    >
      <MpTable>
        <MpTableHead is-fixed>
          <MpTableRow :class="css({ cursor: 'pointer' })">
            <MpTableCell
              as="th"
              :class="css({ width: '30px', minWidth: '30px' })"
            >
              No.
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '240px', minWidth: '240px' })"
            >
              Name
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            >
              Birth date
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            >
              Gender
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            >
              Eye Color
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            >
              Skin Color
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '200px', minWidth: '200px' })"
            >
              Body Mass
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            >
              Last updated
              <MpIcon name="sort-default" />
            </MpTableCell>
            <MpTableCell
              as="th"
              :class="css({ width: '100px', minWidth: '100px' })"
            />
          </MpTableRow>
        </MpTableHead>
        <MpTableBody>
          <MpTableRow v-for="(item, index) in swapiData" :key="index">
            <MpTableCell as="td">
              <MpText>{{ index + 1 }}</MpText>
            </MpTableCell>
            <MpTableCell as="td">
              <MpFlex display="inline-flex" align="center">
                <MpAvatar :name="item.name" variant-color="stone" />
                <MpFlex direction="column" align="flex-start">
                  <MpText :class="css({ ml: '4' })">
                    {{ item.name }}
                  </MpText>
                  <MpText
                    :class="css({ ml: '4' })"
                    color="gray.600"
                    size="label-small"
                  >
                    {{ `${item.height}cm` }}
                  </MpText>
                </MpFlex>
              </MpFlex>
            </MpTableCell>
            <MpTableCell as="td">
              <MpText>{{ item.birth_year }}</MpText>
            </MpTableCell>
            <MpTableCell as="td">
              <MpBadge
                variant="subtle"
                :variant-color="handleBadgeColor(item.gender)"
              >
                <MpTooltip
                  v-if="item.gender === 'n/a'"
                  label="Character has no gender"
                >
                  <MpText>
                    {{ item.gender }}
                  </MpText>
                </MpTooltip>
                <MpFlex v-else>
                  {{ item.gender }}
                </MpFlex>
              </MpBadge>
            </MpTableCell>
            <MpTableCell as="td">
              <MpText>{{ item.eye_color }}</MpText>
            </MpTableCell>
            <MpTableCell as="td">
              <MpText>{{ item.skin_color }}</MpText>
            </MpTableCell>
            <MpTableCell as="td">
              <MpFlex justify-content="flex-end" mb="1">
                <MpText size="label-small" ml="4">
                  {{ item.mass }}%
                </MpText>
              </MpFlex>
              <MpProgress :value="item.mass" color="sky.400" size="sm" />
            </MpTableCell>
            <MpTableCell as="td">
              <MpText>
                {{
                  new Date(item.edited).toDateString()
                }}
              </MpText>
            </MpTableCell>
            <MpTableCell as="td" :class="css({ textAlign: 'right' })">
              <MpPopover use-portal is-close-on-select>
                <MpPopoverTrigger>
                  <MpButton variant="secondary" right-icon="caret-down">
                    Films
                  </MpButton>
                </MpPopoverTrigger>
                <MpPopoverContent
                  :class="
                    css({
                      width: 65,
                      maxWidth: 65,
                    })
                  "
                >
                  <MpPopoverList>
                    <MpPopoverListItem
                      v-for="item in item.films"
                      :key="item"
                      :to="item"
                    >
                      {{ item }}
                    </MpPopoverListItem>
                  </MpPopoverList>
                </MpPopoverContent>
              </MpPopover>
            </MpTableCell>
          </MpTableRow>
        </MpTableBody>
      </MpTable>
    </MpTableContainer>
  </MpFlex>
</template>
