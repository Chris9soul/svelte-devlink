<script lang="ts">
  import { SvelteCard } from '$lib/devlink';

  export let image: string
  export let title: string
  export let description: string
  export let link: {href: string}
</script>

<react:SvelteCard 
  {image}
  {title}
  {description}
  {link}
/>