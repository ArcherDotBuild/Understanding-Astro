Astro Beginner Project:

- https://github.com/understanding-astro/astro-beginner-project
- https://astro-beginner-project.vercel.app/

## 01. The Astro Install Wizard

- `npm create astro@latest`
- empty project YES
- Install dependencies YES
- npm run start

`npm run build`  
`npm run preview`

## 02. Astro's Template Flow of Data

`<style define:vars={{gradientFrom, gradientTo}}>`: Passes serializable server-side variables into a client-side style elementgit log

Code before doing the Astro.glob

```javascript
<ol>
  <li class='blogs__list'>
    <a class='blog__link' href='blogs/typescript-is-the-new-javascript'>
      Typescript is the new JavaScript
    </a>
  </li>
  <li class='blogs__list'>
    <a class='blog__link' href='blogs/rust-javascript-tooling'>
      Why Rust is the future of JavaScript tooling
    </a>
  </li>
  <li class='blogs__list'>
    <a class='blog__link' href='blogs/sleep-more'>
      Why you should sleep more
    </a>
  </li>
</ol>
```

## 03. 9. Revisiting the Component Script Section

Images will be optimized in the src/ folder, but not in the public folder

```markdown
# About us

[A cat](https://www.photos.com/cat.png)
[A cat](/cat.png) This will refer to public/cat.png
```

## 04 11. Revisiting the Component Template Section

```html
<ul>
  { data.map((user) => { const { gender } = user // Non-binary return (
  <li>
    <span>{`${user.first_name} ${user.last_name}`}</span>
    <span>{gender == 'Non-binary' ? 'Non-binary 😎' : '😃'}</span>
    // Only shows if it is true
    <span>{gender == 'Non-binary' && 'Non-binary 😎'}</span>
  </li>
  ) }) }
</ul>
```

## 05 14. Similarities and Differences to JSX

- `<div class="astro"></div>` ----> ASTRO
- `<div className="jsx"></div>` ----> JSX

- `<div data-value="astro"></div>` ----> ASTRO
- `<div dataValue="jsx"></div>` ----> ASTRO

- `// This is a javaScript comment in astro.js` ----> ASTRO
- `<!-- This is an HTML style comment in astro.js -->` ----> ASTRO
- `{/** This is a JavaScript style comment in astro.js */}` ----> ASTRO

JavaScript style comment won't show up in the browser or development mode, so if you want to write comments for developers only, stick to JS comments

## 06 12. Getting Started with Mini-island

`npx local-web-server` installs a local web server

## 07 13. The Content Template element

```html
<mini-island>
  <p>Hello future island</p>
  <script type="module">
    console.log('THIS IS A WARNING FROM AN ISLAND')
  </script>
</mini-island>
```

## 08 14. Hydration Implementation

```html
<mini-island client:visible>
  <p>Hello future island</p>
  <template data-island>
    <script type="module">
      console.log('THIS IS A WARNING FROM AN ISLAND')
    </script>
  </template>
</mini-island>
```

## 09 4. Step 2 Install the Framework Integration

`npx astro add react` Install's React Astro integration

## 10 5. Steps 3 & 4 Write and Render the Framework Component

## 11 7. The Clientload Directive

`<UpvoteContent client:load  />`

## 12 8. The Clientonly Directive

`<UpvoteContent client:only  />`

## 13 9. The Clientidle Directive

`<UpvoteContent client:idle  />`

## 14 10. The Clientvisible Directive

`<UpvoteContent client:visible  />`

## 15 11. The Clientmedia Directive

`<UpvoteContent client:media="(max-width: 30em)"  />`

# 16 12. Using Multiple Frameworks in Astro

`npx astro add vue` Install's Vue Astro integration

# 17 13. 1 Signals from Preact

# 18 13.2 Signia from tldraw.html


