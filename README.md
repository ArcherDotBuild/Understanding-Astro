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
		<li class="blogs__list">
			<a class="blog__link" href="blogs/typescript-is-the-new-javascript">
				Typescript is the new JavaScript
			</a>
		</li>
		<li class="blogs__list">
			<a class="blog__link" href="blogs/rust-javascript-tooling">
				Why Rust is the future of JavaScript tooling
			</a>
		</li>
		<li class="blogs__list">
			<a class="blog__link" href="blogs/sleep-more">
				Why you should sleep more
			</a>
		</li>
	</ol>
```