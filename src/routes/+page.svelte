<script>

</script>

<div class="pagemargin">
    <div id="productparentbox">
        <div id="productchildbox" class="upcoming" on:click={() => alert("Pssst... So impatient! This product is coming sooner than you think.")}>
            <a href="/goatlamp">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>Goat Lamp</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$666</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input type="submit" value="Pre-Order">
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="/icepop">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>ICE Pop (2 Pack)</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$59.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input type="submit" value="Buy Now">
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="/icepop">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>ICE Pop</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$34.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input type="submit" value="Buy Now">
                </div>
            </div>
        </div>
    </div>

    <p id="yep">Yep, that's all we've got for now!</p>
</div>

<style>
    .pagemargin{
        padding-left: var(--pagemargin);
        padding-right: var(--pagemargin);
        box-sizing: border-box;
    }

    #productparentbox{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        gap: calc(2.5vw + 2.5vh) 2.5vw;
        margin: 0;      
        max-width: 100%;
        box-sizing: border-box;
    }

    /* Ensure children can actually shrink inside flex (prevents overflow from long content) */
    #productparentbox > #productchildbox{
        min-width: 0;
    }

    /* Base: PHONES = 2 per row */
    #productchildbox{
        /* columns = 2 */
        flex: 0 0 calc((100% - (1 * clamp(10px, 2.5vw, 28px))) / 2);
        width: auto; /* override your vw widths without changing HTML */
    }

    /* Keep the image box perfectly square and fitted to the card width */
    .productimgbox{
        width: 100%;
        height: auto;        /* override fixed heights */
        aspect-ratio: 1 / 1; /* square */
        box-sizing: border-box;
    }

    /* Make the image fill without causing overflow */
    #productimg{
        display: block;
        width: 100%;
        height: 100%;
        background-color: lightgray;
        border: 2px blue dashed;
        object-fit: cover; /* keeps it clean; remove if you want full uncropped */
    }

    /* --- TABLETS = 3 per row --- */
    @media (min-width: 641px) and (max-width: 1024px){
        #productchildbox{
            flex-basis: calc((100% - (2 * clamp(10px, 2.5vw, 28px))) / 3);
        }
    }

    /* --- LAPTOPS = 4 per row --- */
    @media (min-width: 1025px) and (max-width: 1280px){
        #productchildbox{
            flex-basis: calc((100% - (3 * clamp(10px, 2.5vw, 28px))) / 4);
        }
    }

    /* --- LARGE DESKTOPS = 5 per row --- */
    @media (min-width: 1281px){
        #productchildbox{
            flex-basis: calc((100% - (4 * clamp(10px, 2.5vw, 28px))) / 5);
        }
    }

    /* Safety: prevent long text/links from forcing overflow */
    #productchildbox a,
    #productchildbox h5,
    #productchildbox p{
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .upcoming{
        filter: blur(10px);
    }

    .upcoming > * {
        pointer-events: none;
    }

    #orderbox{
        margin-top: 1vh;
        display: flex;
    }

    @media (min-width: 641px) { 
        #orderbox{
            display: flex;
        }
    }

    #pricebox{
        position: relative;
        width: calc(var(--h5-size) * 3.5);
    }

    #price{
        font-weight: 200;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);        
    }

    #yep{
        text-align: center;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
</style>