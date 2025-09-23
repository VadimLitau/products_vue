<script setup>

const emits = defineEmits(["handlerClick"])
const handlerClick = () => {
  emits('handlerClick')
}
</script>

<template>
	<button class="btn br-10 w-100"
    @click="handlerClick"
  >
    <div class="btn-text">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
} 
.btn{
  background: var(--bg-yellow);
  transition: var(--duration);
  border: 1px solid transparent;

  &:hover{
    background: var(--bg-yellow-light);
  }

  &:active{
    background: transparent;
    border: 1px solid var(--text-blue);
  }

  &:disabled{
    background: var(--bg-btn-grey);
  }
}

.btn-text{
  color: var(--text-blue);
}
</style>
