<script>
	import '../Header/styles.css'

	export let path;
</script>
<header>
	<div></div>
	<div class="header-inside">
		<a href="/" class="logo-href">
			<h1 class={path === '/' ? 'text-gradient logo': 'logo'}> DΛПI</h1>
		</a>
		<section class="menu">
			<a href="/blog" class={path.includes('/blog') ? 'text-gradient menu-url' : 'menu-url'}>BLOG</a>
			<a href="/projects" class={path === '/projects' ? 'text-gradient menu-url' : 'menu-url'}> PROJECTS</a>
		</section>
	</div>
	<div></div>
</header>