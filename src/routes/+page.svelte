<script>

</script>

<div class="pagemargin">
    <div id="productparentbox">
        <div id="productchildbox">
            <a href="/mementomori">
                <div class="productimgbox">
                    <img id="productimg" src="/mementomori/1.png" alt="">
                </div>
                <br>
                <h5>Memento Mori</h5>
                <p id="description">Goat Skull Lamp</p>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <p id="price">$666</p>
                </div>
                <div>
                    <input type="number" min="1" max="9" value="1" />
                    <input type="submit" value="Pre-Order">
                </div>
            </div>
        </div>
        <div id="productchildbox">
            <a href="">
                <div class="productimgbox">

                </div>
                <br>
                <h5>F-35S</h5>
                <p id="description">Combustion Powered Skateboard</p>
            </a>
            <div id="orderbox">
                <div id="pricebox">
                    <p id="price">$3500</p>
                </div>
                <div>
                    <input type="number" min="1" max="9" value="1" />
                    <input type="submit" value="Pre-Order">
                </div>
            </div>
        </div>
    </div>

    <p id="yep">Yep, that's all I've got for now!</p>
</div>

<style>
    #productparentbox{
        display: flex;
        align-items: flex-start;
        gap: 2.5vw;
    }

    #productchildbox{
        /* background-color: yellow; */
        width: 46.25vw;
    }

    .productimgbox{
        width: 46.25vw;
        height: 46.25vw;
        /* background-color: green; */
        /* border: 2px blue dashed; */
    }

    @media (min-width: 641px) { 
        #productchildbox{
            width: 30vw;
        }

        .productimgbox{
            width: 30vw;
            height: 30vw;
            /* border: 2px blue dashed; */
        }
    }

    #productimg{
        width: 100%;
    }

    #description{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #orderbox{
        margin-top: 1vh;
        /* background-color: yellow; */
    }

    @media (min-width: 641px) { 
        #orderbox{
            display: flex;
        }
    }

    #pricebox{
        position: relative;
        width: 25%;
    }

    #price{
        font-size: calc(var(--p-size) * 1.53);
    }

    @media (min-width: 641px) { 
        #price{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);        
        }
    }

    #yep{
        text-align: center;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
</style>