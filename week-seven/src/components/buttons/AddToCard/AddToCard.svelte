
<script>
    let showCounter = false;
    let addToCartCount = 0;

</script>

{#if showCounter}
<button class="counter-btn-wrapper">  
    <svg on:click={()=> addToCartCount > 0 ? addToCartCount -=1: showCounter = false} role= "none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 24h28"/></svg>
    <span> 
        {addToCartCount}
    </span>
    <svg on:click={()=> addToCartCount +=1} role= "none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.75 7.75h-10m5-5v10"></path></svg>
</button>
{:else}
<button class="cart-btn-wrapper" on:click={()=> showCounter = true} aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M5 5h17l-2 9H7L4 2H0m7 12l1 4h13m-2 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM9 23a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"/></svg>
    Add To Cart
</button>
{/if}


<style lang="scss">
    .cart-btn-wrapper{
            all: unset;
            padding: 16px 24px;
            background-color: #1029D1; 
            text-transform: uppercase;
            color: white;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 14px;
            gap: 8px;
            transition: background-color 0.3s;
            &:hover{
                background-color: #081672;
            svg{
                path{
                    fill: #FEF7F6;                   
                }
            }
        }
    }

    .counter-btn-wrapper{
            all: unset;
            padding: 16px;
            background-color: #d3c5cb; 
            text-transform: uppercase;
            border-radius: 4px;
            display: flex;
            align-items: center;
            font-size: 16px;
            user-select: none;

            span{
                margin: 0px 24px;
            }

            svg{
                cursor: pointer;
            }
        }
</style>