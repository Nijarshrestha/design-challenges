<script>
  import AddToCard from "../components/buttons/AddToCard/AddToCard.svelte";
  import Like from "../components/buttons/Like/Like.svelte";
  import MediaPlayer from "../components/buttons/MediaPlayer/MediaPlayer.svelte";

</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<style>
    .app-container{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 56px;
        background: #dadee7;
        font-family: Arial;
    }
</style>
<body>
    <div class="app-container">
       <AddToCard /><Like />
       <MediaPlayer />
    </div>
</body>
</html>

