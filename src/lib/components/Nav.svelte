<script lang="ts">
  import { SvelteNav } from '$lib/devlink';

  export let link1: { href: string}
  export let link2: { href: string}
  export let link3: { href: string}
  export let link3Text: string
  export let link2Text: string
  export let link1Text: string
</script>

<react:SvelteNav
  {link1}
  {link2}
  {link3}
  {link3Text}
  {link2Text}
  {link1Text}
/>