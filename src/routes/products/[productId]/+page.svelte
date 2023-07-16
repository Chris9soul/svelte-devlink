<script lang="ts">
	import Section from '$lib/components/Section.svelte';

    export let data;
    console.log(data);
</script>

<div class="hero">
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <img src={data.thumbnail} alt={data.title} />
</div>

<Section>
    <div class="gallery">
        {#each data.images as image}
        <img src={image} alt={data.title} />
        {/each}
    </div>
</Section>

<style>
    .hero {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        color: white;
        background-color: rgba(0, 0, 0, 0.25);
        min-height: 100vh;
    }
    .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
</style>