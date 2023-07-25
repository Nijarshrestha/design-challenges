<script>
    let likeCount = 492
</script>


<button class="like-btn-wrapper">
   <span class="icon-wrapper" on:click={()=> likeCount += 1} role="none">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z"/></svg>
    <span>Like</span>
   </span>
   <span class="count-wrapper">
    {likeCount}
   </span>
</button>

<style lang="scss">
    .like-btn-wrapper{
        all: unset;
        border: 1px solid grey;
        padding: 0px !important;
        border-radius: 4px;
        padding: 2px;
        font-size: 14px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s;

        .icon-wrapper{
            padding: 12px 16px;
            border-right: 1px solid grey; 
            display:flex;
            align-items: center; 
            gap: 8px; 
        }

        .count-wrapper{
            padding: 0px 16px;
        }

        &:hover{
            background-color: #bfbfbf; 

            svg{
                path{
                    fill: grey;
                    stroke: grey;
                }
            }
        }

        &:focus{
            background-color: none;
            svg{
                path{
                    fill: red;
                    stroke: red;
                }
            }
        }
    }
</style>