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
                    <h5 id="price">$49.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input
                        type="submit" 
                        value="Buy Now" 
                        on:click={alert("Before you buy:\n\nUnderstand that any unintended use of ICE Pop can cause serious damage.\nICE Pop is a satirical art piece, but the steel packaged inside is very real.\nAt best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\nThe only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer.")}
                    >
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
                    <h5 id="price">$29.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input 
                        type="submit" 
                        value="Buy Now"
                        on:click={alert("Before you buy:\n\nUnderstand that any unintended use of ICE Pop can cause serious damage.\nICE Pop is a satirical art piece, but the steel packaged inside is very real.\nAt best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\nThe only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer.")}
                    >
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="/icepop">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>ICE Pop With Stand (2 Pack)</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$69.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input 
                        type="submit" 
                        value="Buy Now"
                        on:click={alert("Before you buy:\n\nUnderstand that any unintended use of ICE Pop can cause serious damage.\nICE Pop is a satirical art piece, but the steel packaged inside is very real.\nAt best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\nThe only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer.")}
                    >
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="/icepop">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>ICE Pop With Stand</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$44.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input 
                        type="submit" 
                        value="Buy Now"
                        on:click={alert("Before you buy:\n\nUnderstand that any unintended use of ICE Pop can cause serious damage.\nICE Pop is a satirical art piece, but the steel packaged inside is very real.\nAt best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\nThe only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer.")}
                    >
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="/icepop">
                <div class="productimgbox">
                    <img id="productimg" src="/goatlamp/1.png" alt="">
                </div>
                <br>
                <h5>ICE Pop Stand</h5>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <h5 id="price">$19.99</h5>
                </div>
                <div id="buttons">
                    <input type="number" min="1" max="9" value="1" />
                    <input 
                        type="submit" 
                        value="Buy Now"
                    >
                </div>
            </div>
        </div>
    </div>

    <br>

    <p id="yep">Yep, that's all we've got for now!</p>
</div>

<style>
    .pagemargin{
        box-sizing: border-box;
    }

    #productparentbox{
        --colgap: clamp(12px, 2.5vw, 28px);
        --rowgap: clamp(18px, calc(2.5vw + 2.5vh), 48px);

        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        column-gap: var(--colgap);
        row-gap: var(--rowgap);

        margin: 0;
        max-width: 100%;
        box-sizing: border-box;
    }

    #productchildbox{
        flex: 0 0 calc((100% - (1 * var(--colgap))) / 2);
        width: auto;
    }

    /* 3 columns */
    @media (min-width: 641px) and (max-width: 1024px){
        #productchildbox{
            flex-basis: calc((100% - (2 * var(--colgap))) / 3);
        }
    }

    /* 4 columns */
    @media (min-width: 1025px) and (max-width: 1280px){
        #productchildbox{
            flex-basis: calc((100% - (3 * var(--colgap))) / 4);
        }
    }

    /* 5 columns */
    @media (min-width: 1281px){
        #productchildbox{
            flex-basis: calc((100% - (4 * var(--colgap))) / 5);
        }
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
        width: calc(var(--h5-size) * 3.75);
    }

    #price{
        font-weight: 200;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);        
    }

    #buttons{
    }

    #yep{
        text-align: center;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
</style>