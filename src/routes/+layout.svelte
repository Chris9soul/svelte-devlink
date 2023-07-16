<script lang="ts">
    import '$lib/devlink/global.css'
    import { DevLinkProvider } from '$lib/devlink';
	import Nav from '$lib/components/Nav.svelte';
</script>

<react:DevLinkProvider>
    <Nav
        link1={{ href: '/'}}
        link1Text="Home"
        link2={{ href: '/about'}}
        link2Text="About"
        link3={{ href: '/contact'}}
        link3Text="Contact"
    />
    <slot />
</react:DevLinkProvider>