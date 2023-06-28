<script lang="ts">
export let classStyles:string | null= null
</script>

<p class={`leading-7 [&:not(:first-child)]:mt-6 ${classStyles}` }>
<slot/>
</p>