<script setup lang="ts">
import { MpFlex, MpFormControl, MpFormLabel, MpIcon, MpInput, MpInputGroup, MpInputLeftAddon, MpInputRightAddon, MpPopover, MpPopoverContent, MpPopoverList, MpPopoverListItem, MpPopoverTrigger, MpText, css } from '@mekari/pixel3'
</script>

<template>
  <MpFlex p="4" gap="2">
    <MpFormControl>
      <MpFormLabel>
        Additional period
      </MpFormLabel>

      <MpInputGroup size="md">
        <MpInputLeftAddon
          has-background :class="css({
            cursor: 'pointer',
          })"
        >
          <MpPopover isAdaptiveWidth>
            <MpPopoverTrigger>
              <div
                style="padding: 0 12px"
                :class="css({
                  display: 'flex',
                })"
              >
                <MpText weight="semiBold">
                  Months
                </MpText>
                <MpIcon
                  name="chevrons-down" :class="css({
                    ml: 2,
                  })"
                />
              </div>
            </MpPopoverTrigger>

            <MpPopoverContent>
              <MpPopoverList>
                <MpPopoverListItem isActive>
                  Months
                </MpPopoverListItem>
                <MpPopoverListItem>
                  Years
                </MpPopoverListItem>
              </MpPopoverList>
            </MpPopoverContent>
          </MpPopover>
        </MpInputLeftAddon>
        <MpInput is-clearable />
      </MpInputGroup>
    </MpFormControl>

    <MpFormControl>
      <MpFormLabel>
        Additional period
      </MpFormLabel>

      <MpInputGroup size="md">
        <MpInput is-clearable />
        <MpInputRightAddon
          has-background :class="css({
            cursor: 'pointer',
          })"
        >
          <MpPopover isAdaptiveWidth>
            <MpPopoverTrigger>
              <div
                style="padding: 0 12px"
                :class="css({
                  display: 'flex',
                })"
              >
                <MpText weight="semiBold">
                  Months
                </MpText>
                <MpIcon
                  name="chevrons-down" :class="css({
                    ml: 2,
                  })"
                />
              </div>
            </MpPopoverTrigger>

            <MpPopoverContent>
              <MpPopoverList>
                <MpPopoverListItem isActive>
                  Months
                </MpPopoverListItem>
                <MpPopoverListItem>
                  Years
                </MpPopoverListItem>
              </MpPopoverList>
            </MpPopoverContent>
          </MpPopover>
        </MpInputRightAddon>
      </MpInputGroup>
    </MpFormControl>
  </MpFlex>
</template>
