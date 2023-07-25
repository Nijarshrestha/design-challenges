<script>
    let mediaPlay = false

    function handleMediaPlay(){
        if(!mediaPlay){
            return mediaPlay = true
        }
        return mediaPlay = false
    }
</script>

<div class="media-player-btn-wrapper" on:click={handleMediaPlay} role="none" style={`width: ${mediaPlay? '160px': '98px'}`}>
    {#if mediaPlay}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z"/></svg>
    <span>  
    Pause
    </span>
    <span class="timer-wrapper">
        <span>
            0:35
        </span>
        <span>
            /
        </span>
        <span>
            5:23
        </span>
    </span>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5l-6 4.5z"/></svg>
        <span>
            Play
        </span>
        <span class="timer-wrapper">
            5:23
        </span>   
    {/if }  
</div>

<style lang="scss">
    .media-player-btn-wrapper{
        border-radius: 50px;
        color: white;
        background-color: #16161d;
        padding: 10px 12px;
        font-size: 14px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;        
        transition: background-color 0.3s, width 0.3s;
        user-select: none;
        overflow: hidden;

        &:hover{
            background-color: #413f3f;
        }

        .timer-wrapper{
            color: #576075;
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
</style>