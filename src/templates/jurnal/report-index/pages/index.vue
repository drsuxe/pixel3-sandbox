<script setup lang="ts">
import { MpFlex, MpText, css } from '@mekari/pixel3'
import PixelLayout from '@/components/PixelLayout.vue'

const mainContentClass = css({
  bg: 'white',
  borderTopWidth: '1px',
  borderLeftWidth: '1px',
  borderColor: 'gray.100',
  roundedTopLeft: 'md',
  p: 6,
  minH: '100svh',
})
</script>

<template>
  <PixelLayout logoUrl="https://cdn.mekari.design/logo/jurnal/default.svg">
    <MpFlex justify="space-between" alignItems="center" px="6" py="1.063rem">
      <MpText size="h1" weight="semiBold">
        Title
      </MpText>
    </MpFlex>

    <div :class="mainContentClass">
      Content
    </div>
  </PixelLayout>
</template>
