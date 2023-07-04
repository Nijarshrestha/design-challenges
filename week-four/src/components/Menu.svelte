<script>
    import { page } from '$app/stores';
    import {setContext} from 'svelte';
    import {getContext} from 'svelte';

    let path = "home"

    /**
	 * Trigger form logic in response to a keydown event, so that
	 * desktop users can use the keyboard to play the game
	 * @param {string} item
	 */
    function handleMenuItem(item){
        path = item
    }

</script>

<nav>
    <ul>
        <a on:click={()=>handleMenuItem("home")} class:is-active={path==='home'} href="/home">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z" stroke={path==='home'?'#fc7f7f':'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </span>
            {#if path === 'home'}
                <span>
                    Home  
                </span> 
            {/if}
            </a>
        <a on:click={()=>handleMenuItem("likes")} class:is-active={path==='likes'} href="/likes">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke={path==="likes"? '#008cff':'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg >
            {#if path === 'likes'}
                <span>
                    Likes  
                </span> 
            {/if}
        </a>
        <a on:click={()=>handleMenuItem("search")} class:is-active={path==='search'} href="/search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={path==='search'?'#398245':'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                {#if path === 'search'}
                <span>
                    Search  
                </span> 
            {/if}
        </a>
        <a on:click={()=>handleMenuItem("profile")} class:is-active={path==='profile'} href="/profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke={path==="profile"?'#B93BD7':'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                {#if path === 'profile'}
                <span>
                    Profile  
                </span> 
            {/if}
        </a>
    </ul>
</nav>

<style>
    nav{
        background-color: azure;
        padding: 16px 24px;
        border-radius: 20px;
        
    }

    ul{
        display: flex;
        gap: 0px;
        list-style: none;
        margin: 0px;
        padding: 0px;
        position: relative;
    }

    a{
        display: flex;
        gap: 6px;
        cursor: pointer;
        padding: 4px 12px;
        border-radius: 12px;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
        transition:  .2s  ease-out;
        text-decoration: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    a:hover{
        text-decoration: none;;
    }

    a:nth-child(1).is-active{
        background: #FCE7E7;
        color: #fc7f7f
    }
    a:nth-child(2).is-active{
        background: #4dabf754;
        color: #008cff
    }
    a:nth-child(3).is-active{
        background: #69DB7C;
        color: #398245
    }
    a:nth-child(4).is-active{
        background: #DA77F2;
        color: #B93BD7
    }

    
    span{
        display: flex;
        align-items: center;
        
    }

    .slide{
        position: absolute;
        height: 100%;
        width:100px;
        top: 0;
        left: 0;
        z-index: -1;
        background: blue;
        border-radius: 8px;
        transition: 0.5s;
        opacity: 0;;
    }

</style>