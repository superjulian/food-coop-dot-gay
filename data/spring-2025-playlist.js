const playlistData = [
    {   
        dj: "Mr. Anderson",
        songs:
            [
                { title: "The Catastrophe", artist: "Car Seat Headrest" },
                { title: "How Bad Do U Want Me", artist: "Lady Gaga" },
                { title: "Somebody That I Used to Know", artist: "Gotye" },
                { title: "Happier Than Ever", artist: "Billie Eilish" }
            ]
    },
    { 
        dj: "frederick",
        songs:
            [
                { title: "Floating On Salt Water", artist: "A Sagittariun" },
                { title: "Body Move", artist: "Dizzy Fae" },
                { title: "CAN'T TELL ME NOTHING", artist: "Kalisway" },
                { title: "Piano Concerto 1 in E minor, Op 11", artist: "Frédéric Chopin" },
            ]
    },
    { 
        dj: "sue me",
        songs:
            [
                { title: "Heat", artist: "Toni Braxton" },
                { title: "Move 4 Fire", artist: "Trancemaster" },
                { title: "Marry Me", artist: "DJ Call Me" },
                { title: "All Night Long", artist: "Faith Evans ft P Diddy unfortunately" },
            ]
    },
    // trasnliterated 無常 to wú cháng in pinyin
    // bc it was breaking rendering
    { 
        dj: "keyian",
        songs:
            [
                { title: "Wú Cháng", artist: "Faye Wong" },
                { title: "Grass", artist: "XTC" },
                { title: "Kiedy Snie Swoj Maly Sen", artist: "Surowa Kara Za Grzechy" },
                { title: "Wherever You Are (I Feel Love)", artist: "Laava" },
            ]
    },
    { 
        dj: "honeylocust",
        songs:
            [
                { title: "spring is coming with a...", artist: "Caroline Polachek" },
                { title: "In Bloom", artist: "Sturgil Simpson" },
                { title: "God Turn Me Into A Flower", artist: "Weyes Blood" },
                { title: "Listen To The Grass Grow", artist: "Seckou Keith" },
            ]
    },    
    { 
        dj: "DK",
        songs:
            [
                { title: "Strawberry Letter #23", artist: "Brothers Johnson" },
                { title: "April in Paris", artist: "Charlie Parker (with strings!)" },
                { title: "Gardening At Night", artist: "REM" },
                { title: "I Can See Clearly Now", artist: "Johnny Nash" },
            ]
    },
    { 
        dj: "Big bootz",
        songs:
            [
                { title: "Nuevayol", artist: "Bad Bunny" },
                { title: "Hands2myself", artist: "KH" },
                { title: "Me Pongo Colorada", artist: "Papá Levante" },
                { title: "San Antonio Rose", artist: "Willie Nelson" },
            ]
    },
    { 
        dj: "Hazelnut",
        songs:
            [
                { title: "Ladyflash", artist: "The Go! Team" },
                { title: "Jitensya", artist: "ORESKABAND" },
                { title: "There She Goes", artist: "Sixpence None the Richer" },
                { title: "San Antonio Marigold", artist: "Relient K" },
            ]
    },
    { 
        dj: "NUEVAYoL by Bad Bunny",
        songs:
            [
                { title: "Father Figure", artist: "George Michael" },
                { title: "Immaculate", artist: "Shygirl" },
                { title: "Fyrrverandi", artist: "Una Torfa" },
                { title: "Digging Around", artist: "chlothegod" },
            ]
    },
    { 
        dj: "Shrine",
        songs:
            [
                { title: "Blawan", artist: "Dismantled Into Juice" },
                { title: "Shlohmo", artist: "Looking at Plants" },
                { title: "Clark", artist: "Green Breaking" },
                { title: "Lorn", artist: "ENTROPYYY" },
            ]
    },   
    { 
        dj: "but Enufaboutme",
        songs:
            [
                { title: "Swangin' and Bangin'", artist: "E.S.G." },
                { title: "I'm Happy But You Don't Like Me", artist: "Asobi Seksu" },
                { title: "Your Tears Drop From The Sky", artist: "Suishou no Fune" },
                { title: "Plastic Dreams", artist: "Jaydee" },
            ]
    },    
    { 
        dj: "???",
        songs:
            [
                { title: "Bang", artist: "Melenas" },
                { title: "Give Me a Reason", artist: "Boy Harsher" },
                { title: "NuevaYOL", artist: "Bad Bunny" },
                { title: "Twilight", artist: "Electric Light Orchestra" },
            ]
    },    
    { 
        dj: "Primitive Accumulation",
        songs:
            [
                { title: "All in Good Time", artist: "Iron & Wine, Fiona Apple" },
                { title: "DtMF", artist: "Bad Bunny" },
                { title: "Calling Your Name", artist: "Jon Batiste" },
                { title: "Latin Thugs", artist: "Cypress Hill, Tego Calderón" },
            ]
    },
        { 
        dj: "Bakery Garbage",
        songs:
            [
                { title: "Gnaw", artist: "Alex G" },
                { title: "Jigsaw Falling Into Place ", artist: "Radiohead" },
                { title: "Abracadabra", artist: "Borgore" },
                { title: "Wifey Riddim", artist: "Shygirl, Club Shy, Jorja Smith, SadBoi" },
            ]
    },
]
    //  { 
    //     dj: "",
    //     songs:
    //         [
    //             { title: "", artist: "" },
    //             { title: "", artist: "" },
    //             { title: "", artist: "" },
    //             { title: "", artist: "" },
    //         ]
    // }, 
const colors = [
    {
        background_color: "#ff0000",
        text_color: "#00ff00",
    },
    {
        background_color: "#00ffff",
        text_color: "#ffff00",
    },
    {
        background_color: "#ff00ff",
        text_color: "#00ffff",
    },
    {
        background_color: "#ffffff",
        text_color: "#000000",
    },
    {
        background_color: "#808080",
        text_color: "#800000",
    },
    {
        background_color: "#008000",
        text_color: "#000080",
    },
    {
        background_color: "#808000",
        text_color: "#800080",
    },
    {
        background_color: "#008080",
        text_color: "#ffffff",
    },
        {
        text_color: "#ff0000",
        background_color: "#00ff00",
    },
    {
        text_color: "#00ffff",
        background_color: "#ffff00",
    },
    {
        text_color: "#ff00ff",
        background_color: "#00ffff",
    },
    {
        text_color: "#ffffff",
        background_color: "#000000",
    },
    {
        text_color: "#808080",
        background_color: "#800000",
    },
    {
        text_color: "#008000",
        background_color: "#000080",
    },
    {
        text_color: "#808000",
        background_color: "#800080",
    },
    {
        text_color: "#008080",
        background_color: "#ffffff",
    }
]