<script>

</script>

<div class="pagemargin">
    <div id="productparentbox" class="flex">
        <div id="productchildbox">
            <a href="/mementomori">
                <div class="productimgbox">
                    <img id="productimg" src="/mementomori/1.png" alt="">
                </div>
                <br>
                <h5>Memento Mori</h5>
                <p>Goat Skull Lamp</p>
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
        <!-- <div id="productchildbox">
            <a href="">
                <div class="productimgbox">

                </div>
                <br>
                <h5>F-35S</h5>
                <p>Combustion Powered Skateboard</p>
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
        </div> -->
    </div>

    <p id="yep">Yep, that's all I've got for now!</p>
</div>

<style>
    #productparentbox{
        /* background-color: red; */
    }

    #productchildbox{
        /* background-color: yellow; */
        width: 30vw;
    }

    .productimgbox{
        width: 25vw;
        height: 25vw;
        /* background-color: green; */
        /* border: 2px blue dashed; */
    }

    #productimg{
        width: 100%;
    }

    #orderbox{
        margin-top: 1vh;
        display: flex;
        /* background-color: yellow; */
    }

    #pricebox{
        position: relative;
        /* background-color: green; */
        width: 25%;
    }

    #price{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.75vw;
    }

    #yep{
        text-align: center;
        margin-top: 5vw;
        margin-bottom: 5vw;
    }
</style>