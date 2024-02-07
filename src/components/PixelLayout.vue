<script setup lang="tsx">
import { MpFlex, MpIcon, Pixel, css } from '@mekari/pixel3'
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
  logoUrl: String as PropType<string>,
})

// Navbar
const navbarEl = ref<HTMLElement>()
const navbarHeight = ref(56)

// Sidebar
const sidebarEl = ref<HTMLElement>()
const { width: sidebarWidth } = useElementSize(sidebarEl)
const isSidebarCollapsed = ref(false)
function handleSidebarCollapse() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

onMounted(() => {
  navbarHeight.value = navbarEl.value?.clientHeight || 0
})
</script>

<template>
  <div
    :class="css({
      bg: 'background',
      minH: '100svh',
    })"
    :style="{
      '--pixel-navbar-height': `${navbarHeight}px`,
      '--pixel-sidebar-width': `${sidebarWidth}px`,
    }"
  >
    <!-- Navbar -->
    <div
      ref="navbarEl"
      data-pixel-component="PixelNavbar"
      :class="css({
        position: 'fixed',
        zIndex: 'sticky',
        width: 'full',
        bg: 'white',
        px: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: '1px',
        borderColor: 'gray.100',
        py: 2,
        height: '56px',
      })"
    >
      <MpFlex>
        <img :src="props.logoUrl" alt="" height="56" width="auto">
      </MpFlex>

      <MpFlex>
        <div>
          Right content
        </div>
      </MpFlex>
    </div>

    <!-- Sidebar -->
    <div
      ref="sidebarEl"
      data-pixel-component="PixelSidebar"
      :style="{
        position: 'fixed',
        minHeight: '100svh',
        paddingTop: 'var(--pixel-navbar-height)',
        transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
      }"
      :class="css({
        width: isSidebarCollapsed ? '60px' : '216px',
        zIndex: 'sticky',
      })"
    >
      <Pixel.div pt="4" px="2" position="relative">
        <!-- Main menu -->
        <!-- <MpFlex
          class="group" px="2" py="2" rounded="sm" alignItems="center" gap="2" cursor="pointer"
          transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
        >
          <MpIcon
            name="table-view-field" :class="css({
              _groupHover: {
                color: 'blue.400',
              },
            })"
          />
          <MpText
            :class="css({
              _groupHover: {
                color: 'blue.400',
              },
            })"
          >
            Beranda
          </MpText>
        </MpFlex> -->

        <!-- Bottom -->
        <Pixel.div
          position="fixed" bottom="0" left="0" p="2" borderTopWidth="1px" borderColor="gray.100"
          style="width: var(--pixel-sidebar-width);"
        >
          <MpFlex alignItems="center" gap="2">
            <Pixel.div
              py="2"
              px="2" border-radius="sm" transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              cursor="pointer"
              class="group"
              :class="css({
                _groupHover: {
                  backgroundColor: 'blue.100',
                  color: 'blue.400',
                  cursor: 'pointer',
                },
              })"
              @click="handleSidebarCollapse()"
            >
              <MpIcon
                :name="isSidebarCollapsed ? 'arrow-expand' : 'arrow-collapse'" size="sm" :class="css({
                  _groupHover: {
                    color: 'blue.400',
                  },
                })"
              />
            </Pixel.div>

            <!-- <MpText size="body-small">
              Company ID : 999999
            </MpText> -->
          </MpFlex>
        </Pixel.div>
      </Pixel.div>
    </div>

    <!-- Sub sidebar -->
    <main data-pixel-component="PixelContent" style="padding-left: var(--pixel-sidebar-width); padding-top: var(--pixel-navbar-height);">
      <slot />
    </main>
  </div>
</template>
