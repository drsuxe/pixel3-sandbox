<script setup lang="ts">
import { MpBadge, MpFlex, MpText, css } from '@mekari/pixel3'
import { routes } from 'vue-router/auto/routes'

console.log(routes)
</script>

<template>
  <MpFlex height="100vh" bg="background" p="8">
    <div style="width: 100%;">
      <div
        :class="css({
          display: 'grid',
          gridTemplateColumns: '4',
          gap: 4,
        })"
      >
        <div
          v-for="index in 1" :key="index"
          :class="css({
            rounded: 'xl',
            bg: 'white',
            width: 'full',
            cursor: 'pointer',
            _hover: {
              transition: 'box-shadow 300ms',
              shadow: 'sm',
            },
          })"
        >
          <img
            :class="css({
              roundedTop: 'xl',
              objectFit: 'cover',
            })" src="/cover/templates/jurnal/report-index.jpg" alt=""
          >

          <div
            :class="css({
              padding: 4,
              borderRightWidth: '1px',
              borderLeftWidth: '1px',
              borderBottomWidth: '1px',
              borderColor: 'gray.100',
              roundedBottom: 'xl',
            })"
          >
            <MpBadge>
              Templates
            </MpBadge>

            <MpText
              weight="semiBold" size="h2" :class="css({
                mt: 2,
              })"
            >
              Sales index
            </MpText>
          </div>
        </div>
      </div>
    </div>
  </MpFlex>
</template>
