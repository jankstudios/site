<nav>
    <div class="flex">
        <div id="asciibox">
            <a href="/">
                <p id="asciilogo">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_========_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_===.........@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_====............@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    &nbsp;&nbsp;&nbsp;_===................@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@@@@%........._===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@@@@@....._====_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@..@@..@@.._===....@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@..@@..@@===........@_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@..............._=====_&nbsp;&nbsp;<br>
                    @@@@@@@..........._===......@&nbsp;<br>
                    @@...@@@......._===..........@<br>
                    @@....@@@..._===.............@<br>
                    @@@@==&nbsp;@@@@@@@@..............@<br>
                    %@@@&nbsp;&nbsp;&nbsp;&nbsp;@@@@@@@@..........._@&nbsp;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_==@@%..%@@........_===&nbsp;&nbsp;<br>
                    &nbsp;&nbsp;_===..@@....@@....._===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    %@@@....@@%..%@@.._===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@....@@@@@@@@===.@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@.....@@@@@@@@....@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@....@@@.........@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@@@.........@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@@........_@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@@....._===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@@..._===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    @@@@_====&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                    *@@==&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                </p>
            </a>
        </div>
        <div>
            <a href="/"><h3>Jank</h3></a>
            <p id="classification">adjective &nbsp; /ˈjaNGk/</p>
            <p id="definition">Of extremely poor or unreliable quality.</p>
        </div>        
    </div>
    <div id="menuitems">
        <p class="menuitem"><a href="/">Home</a></p>
        <p class="menuitem"><a href="/about">About</a></p>
        <p class="menuitem"><a href="/collaborative">Collaborative</a></p>
    </div>
</nav>

<style>
    nav{
        width: 100vw;
        /* background-color: red; */
        padding-top: 1vh;
        margin-bottom: 2.5vh;
        position: relative;
    }

    #asciibox{
        margin-left: 2.5vw;
        margin-right: 2vw;
        /* background-color: red; */
        height: 100%;
    }

    #asciilogo{
        font-family: "Noto Sans Mono", monospace;
        font-size: calc(.2 * var(--p-size) + .02 * var(--h3-size));
        line-height: .8;
        /* color: blue; */
    }

    #classification{
        font-size: calc(var(--p-size) * .75);
        font-weight: 350;
        color: grey;
    }

    #definition{
        margin-top: calc(0.5 * var(--p-size));
    }

    #menuitems{
        position: absolute;
        top: 1vh;
        right: 2.5vw;
        /* background-color: green; */
    }

    .menuitem{
        display: inline-block;
        margin-left: 2.5vw;
    }
</style>