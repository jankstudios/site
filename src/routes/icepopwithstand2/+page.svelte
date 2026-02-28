<script lang="ts">
    let width;

    const images = ["1.PNG"];
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

        // warning (ICE Pop variants only — this page is ICE Pop)
        alert(
            "Before you buy:\n\n" +
            "Understand that any unintended use of ICE Pop can cause serious damage.\n" +
            "ICE Pop is a satirical art piece, but the steel packaged inside is very real.\n" +
            "At best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\n" +
            "The only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer."
        );

        try {
            isCheckingOut = true;

            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ sku: "ICEPOP_W_STAND_X2", quantity })
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
        <img id="currentpic" src={`/icepopwstand2/${currentPic}`} alt=""/>
        <div class="micropics">
            {#each images as img}
                <img
                    class="micropic {currentPic === img ? 'active' : ''}"
                    src={`/icepopwstand2/${img}`}
                    alt=""
                    on:mouseenter={() => changePic(img)}
                    on:click={() => changePic(img)}
                />
            {/each}
        </div>
        <br>
    </div>

    <div>
        <h2>ICE Pop w/ Stand (x2)</h2>
        <h5>$69.99</h5>
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
            Includes 2x ICE Pop and 2x ICE Pop Stand.
            <br><br>
            -------------------------
            <br><br>
            ICE Pop is an art piece that supports the <a href="https://immigrantjustice.org/">National Immigrant Justice Center</a>.
            <br><br>
            Each ICE Pop includes:
            <br>
            - 20 steel tabs that assemble into 10 spikes
            <br>
            - 11 rubber bands for spike assembly
            <br>
            - A popsicle stick with an ICE related joke
            <br>
            - Packaging with some ICE factoids
            <br><br>
            You might get a SUPER MEGA RARE GOLDEN ICE POP when you purchase!
            <br><br>
            Every part of ICE Pop is made in America.
            <br>
            - Design: New Jersey
            <br>
            - Spikes: Nevada, Kentucky, Texas
            <br>
            - Popsicle Stick: Nevada, Kentucky, Texas, New Jersey
            <br>
            - Rubber Band: Wisconsin
            <br>
            - Bread Tie: Minnesota
            <br>
            - Packaging: New Jersey, Texas
            <br>
            - Final assembly: New Jersey
            <br><br>
            ICE Pop is available until April 1, 2025.
            <br><br>
            Dimensions: 2"W 2"H 6.5"L
            <br>
            Weight: 1 lbs
            <br><br>
            -------------------------
            <br><br>
            ICE Pop Stand is a stand to display your ICE Pop.
            <br><br>
            Made with powder coated aluminium.
            <br><br>
            Manufactured in Kentucky, Nevada, and Texas, USA.
            <br><br>
            Dimensions: 2.5"W 2.5"H 3.5"L
            <br>
            Weight: 0.2 lbs
            <br><br>
            -------------------------
            <br><br>
            ICE Pop is designed as an art piece for display only. Jank is not responsible for results of any unintended use or misuse caused by ICE Pop.
            <br><br>
            To directly donate to NIJC, click <a href="https://immigrantjustice.salsalabs.org/donate-26/index.html">here</a>.
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