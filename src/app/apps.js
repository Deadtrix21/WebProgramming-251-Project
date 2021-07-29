const app1 =  Vue.createApp({})
let active = false


function tune_menu (val) {
    $("#app1").css('width', val)
}


app1.component(
    "timers",
    {
        data () {
           
        },
        methods:{
           
        },
        template:
        `   
            <div id="core">
                <div class="background">
                    <h2 class="inline">Phase 1</h1>
                    <div class="inline" id="clockdiv_1">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                    <h2 class="inline">Time To Register</h1>
                    <div id="clockdiv_5">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                </div>
                <div class="background">
                    <h2 class="inline">Phase 2</h1>
                    <div id="clockdiv_2">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                    <h2 class="inline">Time To Register</h1>
                    <div id="clockdiv_6">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                </div>
                <div class="background">
                    <h2 class="inline">Phase 3</h1>
                    <div id="clockdiv_3">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                    <h2 class="inline">Time To Register</h1>
                    <div id="clockdiv_7">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                </div>
                <div class="background">
                    <h2 class="inline">Phase 4</h1>
                    <div id="clockdiv_4">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                    <h2 class="inline">Time To Register</h1>
                    <div id="clockdiv_8">
                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                    </div>
                </div>
            </div>
        `
    }
)


app1.component(
    "navi",
    {
        data () {
            return {
            }
        },
        methods:{
            Press(page) {
                window.location.href = page
            },
            openMenu () {
                
                if (active == !true) {
                    active = !active  
                    tune_menu("100%")                      
                } else {
                    active = !active
                    tune_menu("0%")
                }
            }
            

        },
        template:
        `
        <section id="nav">
            <button   v-on:click="openMenu()">&#9776;</button>
            <button v-on:click="Press('index.html')">Home</button>
            <button v-on:click="Press('signup.html')">Sign Up</button>
        </section>
        <div>
            <section id="app1" class="Overlay">
                <section class="Overlay-content">
                    <timers></timers>
                </section>
            </section>
        </div>
        `
    }
)

app1.mount('#demo')