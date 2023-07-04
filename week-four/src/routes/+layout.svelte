<script>
	import Menu from '../components/Menu.svelte';
	import './styles.css';

</script>

<div class="app">
	<main>
		<slot />
	</main>
	<footer>
		<Menu />
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background: #cab9f1;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 12px;
		background: #cab9f1;


	}

	footer a {
		font-weight: bold;
	}

	
</style>
