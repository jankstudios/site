<footer>
    <div id="footerflex" class="flex-640px">

        <a href="/">         
<pre>            _____                    _____                    _____                    _____          
           /\    \                  /\    \                  /\    \                  /\    \         
          /::\    \                /::\    \                /::\____\                /::\____\        
          \:::\    \              /::::\    \              /::::|   |               /:::/    /        
           \:::\    \            /::::::\    \            /:::::|   |              /:::/    /         
            \:::\    \          /:::/\:::\    \          /::::::|   |             /:::/    /          
             \:::\    \        /:::/__\:::\    \        /:::/|::|   |            /:::/____/           
             /::::\    \      /::::\   \:::\    \      /:::/ |::|   |           /::::\    \           
    _____   /::::::\    \    /::::::\   \:::\    \    /:::/  |::|   | _____    /::::::\____\________  
   /\    \ /:::/\:::\    \  /:::/\:::\   \:::\    \  /:::/   |::|   |/\    \  /:::/\:::::::::::\    \ 
  /::\    /:::/  \:::\____\/:::/  \:::\   \:::\____\/:: /    |::|   /::\____\/:::/  |:::::::::::\____\
  \:::\  /:::/    \::/    /\::/    \:::\  /:::/    /\::/    /|::|  /:::/    /\::/   |::|~~~|~~~~~     
   \:::\/:::/    / \/____/  \/____/ \:::\/:::/    /  \/____/ |::| /:::/    /  \/____|::|   |          
    \::::::/    /                    \::::::/    /           |::|/:::/    /         |::|   |          
     \::::/    /                      \::::/    /            |::::::/    /          |::|   |          
      \::/    /                       /:::/    /             |:::::/    /           |::|   |          
       \/____/                       /:::/    /              |::::/    /            |::|   |          
                                    /:::/    /               /:::/    /             |::|   |          
                                   /:::/    /               /:::/    /              \::|   |          
                                   \::/    /                \::/    /                \:|   |          
                                    \/____/                  \/____/                  \|___|          </pre>
        </a>
  
        <div id="links">
            <div>
                <a href="https://www.instagram.com/jankjankjankjankjankjank/"><p>Instagram</p></a>
                <a href=""><p>TikTok</p></a>
                <a href="mailto:hello@jank.so"><p>hello@jank.so</p></a>
            </div>
            <div>  
                <a href="/"><p>Home</p></a>
                <a href="/about"><p>About</p></a>
                <a href="/collaborative"><p>Collaborative</p></a>
            </div>
        </div>

        <div>
            <p>Stay updated, enter your phone number:</p>
            <input type="text">
            <input type="submit">
        </div>
    </div>
</footer>

<style>
    footer{
        position: relative;
        padding: 2.5vw;
        height: 40vh;
        background-color: lightgray;
        line-height: calc(2 * var(--p-size));
        margin-top: 10vh;
    }

    #footerflex{
        /* background-color: yellow; */
        justify-content: space-between;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
    }

    @media (min-width: 641px) { 
        footer{
            height: 100%;
        }

        #footerflex{
            position: static;
            top: 0;
            left: 0;
            transform: translate(0 , 0);
        }
    }

    pre{
        font-family: "Noto Sans Mono", monospace;
        font-size: calc(var(--p-size) * .31);
        line-height: .8;
        color: blue;
    }

    #links{
        display: flex;
        align-items: flex-start;
        gap: 12.5vw;
        margin-top: calc(var(--p-size) * 2);
        margin-bottom: calc(var(--p-size) * 2);
    }

    @media (min-width: 641px) { 
        #links{
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    @media (min-width: 641px) and (max-width: 768px) { 
        #links{
            gap: 2.5vw;
        }
    }

</style>