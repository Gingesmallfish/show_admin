<template>
    <div>
        {{ d.num.toFixed(0) }}
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { reactive, watch } from 'vue'

const props = defineProps({
    value: {
        type: Number,
        default: 0
    }
})

const d = reactive({
    num: 0
})

function AnimateToValue() {
    gsap.to(d,{
        duration: 0.5,
        num: props.value
    })
}

AnimateToValue()

// 重新监听动画
watch(() => props.value, () => AnimateToValue())
</script>