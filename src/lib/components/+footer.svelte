<script>
    function handleSubmit(e) {
        const input = document.querySelector('input[name="entry.2136646451"]');
        
        // Convert to digits only before submission
        input.value = input.value.replace(/\D/g, '');

        if (input.value.length < 10) {
            alert("Hmm... Not understanding that number. Try again?");
            e.preventDefault();
            return false;
        }

        alert("Thanks! You'll be the first to know any exciting things happening :)");
    }
</script>

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

        <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSc27pBlJFiyhGYJZhtDHKSGxvznhbNWCRcBimDVFXJ-hJRH_w/formResponse"
            method="POST"
            target="hidden_iframe"
            on:submit={handleSubmit()}
        >
            <p>Stay updated, enter your phone number:</p>
            <input
                type="tel"
                name="entry.2136646451"
                required
            >
            <input type="submit" value="Submit">

            <iframe name="hidden_iframe" style="display:none;"></iframe>
        </form>
    </div>
</footer>

<style>
    footer{
        position: relative;
        padding: var(--pagemargin);
        height: 50vh;
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
        line-height: 0.85;
        color: blue;
    }

    @media (min-width: 641px) { 
        pre{
            line-height: .8;
        }
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