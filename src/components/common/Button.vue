<template>
  <button
    :class="[
      'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{
  click: []
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-emerald text-white hover:bg-emerald/90'
    case 'secondary':
      return 'bg-navy text-white hover:bg-navy/90'
    case 'outline':
      return 'border-2 border-emerald text-emerald hover:bg-emerald hover:text-white'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'md':
      return 'px-6 py-3 text-base'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return ''
  }
})
</script>
