# A Webflow DevLink to Svelte example project.

If you prefer to watch a video, I recorded a [Loom](https://www.loom.com/share/e888c57bda0f49aea81aca3ebb057545?sid=a0584581-69af-484d-b2dd-6946077c508f) explaining the steps.

1. In your Svelte project, open a terminal and install svelte-preprocess-react and Webflow CLI:

```bash
npm i --save-dev svelte-preprocessor-react
npm i @webflow/webflow-cli
```

2. In your Webflow project, got to your  components tab, click export components, then copy the .webflowrc but modify it like so:

```javascript
// .webflowrc.cjs (change the extension)

module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./src/lib/devlink",
  siteId: "yoursiteid",
  authToken: process.env.WF_AUTH_TOKEN,
  cssModules: true,
  fileExtensions: {
    js: "jsx"
  },
}
```

Remember to create a `.env` file for your API token



3. Sync your components. If you are using this project as a template, you may want to delete my devlink folder first to get a fresh one.
```bash
npx webflow devlink sync
```

You have your components in. But you can't use them yet.

4. Go to your `+layout.svelte` file, add these imports:
```javascript
// src/routes/+layout.svelte

import '$lib/devlink/global.css'
import { DevLinkProvider } from '$lib/devlink';
```

and then wrap your app with the DevLinkProvider like this (this is necessary for the interactions)

```javascript
<react:DevLinkProvider>
    <slot />
</react:DevLinkProvider>
```



Now you can start importing your devlink components by prepending them with "react:", but there is a catch. You don't get that sweet auto-complete for your props. If you don't mind, you can skip the rest, otherwise, here's how I solved that: 

5. Create a `/components` folder inside your `/lib` folder. 

6. Create a component, for example `Card.svelte`. Then import your component (mine was called SvelteCard) into that file, and hovering that import will show you the props. I used that information to copy the props, add them as props of this svelte component, then add them to the react component, like this:
```html
<!-- src/lib/components/Card.svelte -->

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
```

7. Use that component anywhere. Now you can import it and use it like a regular Svelte component without worrying about forgetting the props.

```html
<!-- src/routes/+page.svelte -->

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
```