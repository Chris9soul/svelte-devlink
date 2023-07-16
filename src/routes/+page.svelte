<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';

	export let data;
</script>

<Section>
	<div class="grid">
		{#each data.products as post (post.id)}
      <Card 
        title={post.title}
				description={post.description}
				image={post.thumbnail}
				link={{ href: '/products/' + post.id }}
      />
		{/each}
	</div>
</Section>

<style>
	.grid {
    padding: 2rem 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 480px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
