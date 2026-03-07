<script lang="ts">
    let width;

    const images = ["stand.webp", "icepopwstand.webp", "stand_sideview.webp", "stand_topview.webp", "components.webp"];
    let currentPic = images[0];
  
    const changePic = (file) => {
      currentPic = file;
    };

    let productqty = 1;
    let isCheckingOut = false;
    let checkoutError = "";

    async function buy() {
        checkoutError = "";

        // basic sanity
        const quantity = Math.max(1, Math.min(99, Number(productqty) || 1));

        try {
            isCheckingOut = true;

            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ sku: "ICEPOP_STAND", quantity })
            });

            if (!res.ok) {
                const msg = await res.text();
                checkoutError = msg || "Checkout failed. Please try again.";
                alert("Checkout failed. Please try again.\n\n" + checkoutError);
                return;
            }

            const data = await res.json();
            if (!data?.url) {
                checkoutError = "Checkout failed: missing redirect URL.";
                alert(checkoutError);
                return;
            }

            window.location.href = data.url;
        } catch (e) {
            checkoutError = "Checkout failed due to a network or server error.";
            alert(checkoutError);
        } finally {
            isCheckingOut = false;
        }
    }
</script>

<svelte:window bind:innerWidth={width} />

  
<div id="headerbox" class="flex-640px">
    <div>
        <img id="currentpic" src={`/icepopstand/${currentPic}`} alt=""/>
        <div class="micropics">
            {#each images as img}
                <img
                    class="micropic {currentPic === img ? 'active' : ''}"
                    src={`/icepopstand/${img}`}
                    alt=""
                    on:mouseenter={() => changePic(img)}
                    on:click={() => changePic(img)}
                />
            {/each}
        </div>
        <br>
    </div>

    <div>
        <h2>ICE Pop Stand</h2>
        <h5>$19.99</h5>
        <p id="status">Preorder - Ships in 4-8 weeks</p>
        <br>
        <input
            type="number"
            min="1"
            max="99"
            bind:value={productqty}
        />      
        <!-- <input type="submit" value="Add To Cart"> -->
        <input
            type="button"
            value={isCheckingOut ? "Redirecting..." : "Buy Now"}
            disabled={isCheckingOut}
            on:click={buy}
        >
        <br><br><br>
        <p>
            This is a stand to display your ICE Pop.
            <br><br>
            Made with powder coated aluminium.
            <br><br>
            Manufactured in Kentucky, Nevada, and Texas, USA.
            <br><br>
            Dimensions: 2.5"W 2.5"H 3.5"L
            <br>
            Weight: 0.2 lbs
            <br><br>
            To donate to NIJC, click <a href="https://immigrantjustice.salsalabs.org/donate-26/index.html">here</a>.
        </p>
    </div>
</div>
  
<style>
    #headerbox{
        padding-left: var(--pagemargin);
        padding-right: var(--pagemargin);
    }

    #currentpic {
        width: calc(100vw - (2 * var(--pagemargin)));
        height: calc(100vw - (2 * var(--pagemargin)));
        object-fit: contain;
    }

    .micropics{
        display: flex;
        width: calc(100vw - (2 * var(--pagemargin)));
        flex-wrap: wrap;
    }

    @media (min-width: 641px){
        #currentpic{
            margin-right: 5vw;
        }
    }
  
    .micropic {
        width: calc(((100vw - (2 * var(--pagemargin)))/5));
        display: block;
        cursor: pointer;
        border: calc(var(--p-size)/2.5) solid transparent;
        transition: border-color 0.15s ease;
        object-fit: contain;
    }

    /* Extra small phones */
    @media (min-width: 376px) and (max-width: 480px) {
    }

    /* Phones */
    @media (min-width: 481px) and (max-width: 640px) {
    }

    /* Large phones / small tablets */
    @media (min-width: 641px) and (max-width: 768px) { 
        #currentpic{
            width: 350px;
            height: 350px;
        }

        .micropics{
            width: 350px;
        }

        .micropic{
            width: 70px;
            height: 70px;
        }
    }

    /* Tablets / small laptops */
    @media (min-width: 769px) and (max-width: 1024px) {
        #currentpic{
            width: 400px;
            height: 400px;
        }

        .micropics{
            width: 400px;
        }

        .micropic{
            width: 80px;
            height: 80px;
        }
    }

    /* Laptops */
    @media (min-width: 1025px) and (max-width: 1280px) {
        #currentpic{
            width: 500px;
            height: 500px;
        }

        .micropics{
            width: 500px;
        }

        .micropic{
            width: 100px;
            height: 100px;
        }
    }

    /* Desktops */
    @media (min-width: 1281px) and (max-width: 1440px) {
        #currentpic{
            width: 575px;
            height: 575px;
        }

        .micropics{
            width: 575px;
        }

        .micropic{
            width: 115px;
            height: 115px;
        }
    }

    /* Large desktops */
    @media (min-width: 1441px) {
        #currentpic{
            width: 650px;
            height: 650px;
        }

        .micropics{
            width: 650px;
        }

        .micropic{
            width: 130px;
            height: 130px;
        }
    }
  
    /* When selected, give it the orange border */
    .micropic.active {
        border-color: orange;
    }

    #status{
        margin-bottom: 1.5vh;
    }
  </style>