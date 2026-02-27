<script lang="ts">
    let width;

    const images = ["1.jpeg", "2.png", "3.jpg", "4.png", "5.png", "6.png", "7.png"];
    let currentPic = images[0];
  
    const changePic = (file) => {
      currentPic = file;
    };
</script>

<svelte:window bind:innerWidth={width} />

  
<div id="headerbox" class="flex-640px">
    <div>
        <img id="currentpic" src={`/icepop/${currentPic}`} alt=""/>
        <div class="micropics">
            {#each images as img}
                <img
                    class="micropic {currentPic === img ? 'active' : ''}"
                    src={`/icepop/${img}`}
                    alt=""
                    on:mouseenter={() => changePic(img)}
                    on:click={() => changePic(img)}
                />
            {/each}
        </div>
        <br>
    </div>

    <div>
        <h2>ICE Pop</h2>
        <h5>$34.99</h5>
        <p id="status">Preorder - Ships in 4-8 weeks</p>
        <br>
        <input type="number" min="1" max="9" value="1" />
        <!-- <input type="submit" value="Add To Cart"> -->
        <input
            type="submit"
            value="Buy Now"
            on:click={alert("Before you buy:\n\nUnderstand that any unintended use of ICE Pop can cause serious damage.\nICE Pop is a satirical art piece, but the steel packaged inside is very real.\nAt best, it will ruin your neighbor's day. At worst, it will seriously hurt someone.\nThe only intended use of ICE Pop is as a sculptural display and all responsibility for use of ICE Pop after purchase rests on the customer.")}
        >
        <br><br><br>
        <p>
            ICE Pop is an art piece that supports the <a href="https://immigrantjustice.org/">National Immigrant Justice Center</a>.
            <br><br>
            2/3 of profits go to NIJC. 1/3 helps us continue making projects like these.
            <br><br>
            Each ICE Pop includes:
            <br>
            - 20 stainless steel tabs that assemble into 10 spikes
            <br>
            - 12 rubber bands for spike assembly
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
            Dimensions: 16"W 16"H 14"L
            <br>
            Weight: 15 lbs
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