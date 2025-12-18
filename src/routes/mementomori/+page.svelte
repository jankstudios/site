<script lang="ts">
    let width;

    const images = ["1.jpeg", "2.png", "3.jpg", "4.png"];
    let currentPic = images[0];
  
    const changePic = (file) => {
      currentPic = file;
    };
</script>

<svelte:window bind:innerWidth={width} />

  
<div id="headerbox" class="flex-640px">
{#if (width <= 640)}
    <img id="currentpic" src={`/mementomori/${currentPic}`} alt=""/>
    <div class="micropics ">
        {#each images as img}
            <img
            class="micropic {currentPic === img ? 'active' : ''}"
            src={`/mementomori/${img}`}
            alt=""
            on:mouseenter={() => changePic(img)}
            />
        {/each}
    </div>
{:else}
    <div class="micropics ">
        {#each images as img}
        <img
            class="micropic {currentPic === img ? 'active' : ''}"
            src={`/mementomori/${img}`}
            alt=""
            on:mouseenter={() => changePic(img)}
        />
        {/each}
    </div>
    
    <img id="currentpic" src={`/mementomori/${currentPic}`} alt=""/>
{/if}

    <div>
        <h2>Memento Mori</h2>
        <h5>Goat Skull Lamp</h5>
        <br>
        <h3>$666</h3>
        <p id="status">Preorder - Ships in 16-20 weeks</p>
        <input type="number" min="1" max="9" value="1" />
        <input type="submit" value="Add To Cart">
        <input type="submit" value="Buy Now">
        <br><br>
        <p>
            Memento Mori is an industrial lamp/sculpture that uses a real goat skull as a light diffuser.
            <br><br>
            It gets about as bright as one of those salt lamps and is primarily constructed of 5051 aluminium, zinc-plated steel, and polycarbonate.
            <br><br>
            As of Jan 2026 it is completing package design devlopment and will ship when complete.
            <br><br>
            Memento Mori is assembled in New Jersey with global materials.
            <br><br>
            Jank products undergo a continuous integration, continuous deployment cycle, so there may be small modifications to Memento Mori over time that improve the product.
            <br><br>
            Dimensions: 16"W 16"H 14"L
            <br>
            Weight: 15 lbs
        </p>
    </div>
</div>
  
  <style>
    #headerbox{
        padding-left: 2.5vw;
        padding-right: 2.5vw;
    }

    #currentpic {
        width: 50vw;
        margin-right: 2.5vw;
        /* background-color: green; */
        object-fit: contain;
    }
  
    .micropic {
        width: 6.5vw;
        display: block;
        cursor: pointer;
        border: 3px solid transparent;
        transition: border-color 0.15s ease;
        object-fit: contain;
    }

    /* Extra small phones */
    @media (min-width: 376px) and (max-width: 480px) {
        #currentpic{

        }

        #micropic{

        }
    }

    /* Phones */
    @media (min-width: 481px) and (max-width: 640px) {
        #currentpic{

        }

        #micropic{
            
        }
    }

    /* Large phones / small tablets */
    @media (min-width: 641px) and (max-width: 768px) { 
        #currentpic{

        }

        #micropic{
            
        }
    }

    /* Tablets / small laptops */
    @media (min-width: 769px) and (max-width: 1024px) {
        #currentpic{

        }

        #micropic{
            
        }
    }

    /* Laptops */
    @media (min-width: 1025px) and (max-width: 1280px) {
        #currentpic{

        }

        #micropic{
            
        }
    }

    /* Desktops */
    @media (min-width: 1281px) and (max-width: 1440px) {
        #currentpic{

        }

        #micropic{
            
        }
    }

    /* Large desktops */
    @media (min-width: 1441px) {
        #currentpic{

        }

        #micropic{
            
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