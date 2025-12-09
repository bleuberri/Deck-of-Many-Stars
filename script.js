document.addEventListener('DOMContentLoaded', () => {
    const generatedNameElement = document.getElementById('generatedName');
    const generateWorld = document.getElementById('generateWorld');
    let namesData = []; // To store the loaded names

    // Function to fetch the JSON data
    async function fetchNames() {
        try {
            const response = await fetch('names.json'); // Path to your JSON file
            namesData = await response.json();
            console.log('Names loaded:', namesData);
        } catch (error) {
            console.error('Error fetching names:', error);
            generatedNameElement.textContent = 'Error loading names.';
        }
    }

    // RANDOM NAME GENERATION
    function generateRandomName() {
        if (namesData.length === 0) {
            return 'No names loaded yet.';
        }
        const randomIndex = Math.floor(Math.random() * namesData.length);
        return namesData[randomIndex];
    }

    // Event listener for the button
    generateWorld.addEventListener('click', () => {
        const newName = generateRandomName();
        generatedNameElement.textContent = newName;
    });

    // Load names when the page loads
    fetchNames();
});

// 1. Define lists of name components
const prefixes = ["Adder", "Alder", "Ant", "Antler", "Aphid", "Apple", "Apricot", "Arch", "Aspen", "Aster", 
    "Badger", "Barley", "Basil", "Bass", "Bay", "Beam", "Bear", "Beaver", "Bee", "Beech", "Beetle", "Berry", "Big", "Billow", "Birch", 
    "Bird", "Bite", "Bitter", "Bittern", "Blazing", "Bliss", "Blizzard", "Bloom", "Blossom", "Blotch", "Bluebell", "Bluff", "Bog", "Borage", 
    "Bough", "Boulder", "Bounce", "Bracken", "Bramble", "Brave", "Breeze", "Briar", "Bright", "Brindle", "Bristle", "Broken", "Brook", 
    "Brush", "Bubbling", "Bud", "Bug", "Bumble", "Burdock", "Burr", "Burrow", "Bush", "Butterfly", "Buzzard", 
    "Carnation", "Carp", "Caterpillar", "Cave", "Cedar", "Chaffinch", "Chasing", "Cherry", "Chervil", "Chestnut", "Chirp", "Chive",
    "Cicada", "Claw", "Clay", "Clear", "Cliff", "Clover", "Comfrey", "Condor", "Cone", "Conifer", "Conker", "Copse", "Cougar", 
    "Coyote", "Crag", "Crane", "Creek", "Cress", "Crest", "Crested", "Cricket", "Crooked", "Crouch", "Curl", "Curlew", "Curly", 
    "Current", "Cypress", "Dahlia", "Daisy", "Dancing", "Dapple", "Dappled", "Dart", "Dash", "Dawn", "Dazzle", "Dew", "Dog", "Down", 
    "Downy", "Dream", "Drift", "Drizzle", "Droplet", "Dry", "Duck", "Dusk", "Eagle", "Echo", "Edelweiss", "Eel", "Egret", "Elder", "Elm", 
    "Ermine", "Faith", "Falcon", "Fallen", "Falling", "Fallow", "Fawn", "Feather", "Fennel", "Fern", "Ferret", "Fickle", "Fidget", 
    "Fierce", "Fin", "Finch", "Fir", "Fish", "Flail", "Flash", "Flax", "Flea", "Fleck", "Fleet", "Flicker", "Flight", "Flint", "Flip", 
    "Flit", "Float", "Flood", "Flower", "Fluff", "Fluffy", "Flutter", "Fly", "Fog", "Foggy", "Freckle", "Frill", "Frilled", "Fringe", "Frog",   
    "Frond", "Fruit", "Fumble", "Furled", "Furze", "Fuzz", "Fuzzy", "Gale", "Gander", "Gardenia", "Garlic", "Gentle", "Gill", "Glacier", "Glade",   
    "Goose", "Gorge", "Gorse", "Grass", "Gravel", "Grouse", "Gull", "Guppy", "Gust", "Hail", "Half", "Hare", "Hatch", "Haven", "Hawk", "Hay", "Hazel", 
    "Hazy", "Heart", "Heath", "Heavy", "Hemlock", "Heron", "Hibiscus", "Hill", "Hollow", "Holly", "Honey", "Hoot", "Hop", "Hope", "Hornet", 
    "Hound", "Howl", "Humming", "Hush", "Hyacinth", "Iris", "Ivy", "Jackdaw", "Jagged", "Jay", "Jumble", "Jump", "Junco", "Juniper", 
    "Kestrel", "Kink", "Kite", "Lake", "Larch", "Lark", "Laurel", "Lavender", "Leaf", "Leap", "Leopard", "Lichen", "Light", "Lightning", "Lilac", 
    "Lily", "Lion", "Little", "Lizard", "Locust", "Long", "Lotus", "Loud", "Low", "Luck", "Lupine", "Lynx", "Mallow", "Mantis", 
    "Maple", "Marigold", "Marsh", "Meadow", "Mellow", "Midge", "Milk", "Milkweed", "Mink", "Minnow", "Mistle", "Mite", "Mole", "Moon",
    "Moor", "Morning", "Moss", "Mossy", "Moth", "Mottle", "Mottled", "Mouse", "Mumble", "Murk", "Myrtle", "Nectar", "Needle",
    "Nettle", "Newt", "Nightingale", "Nimble", "Nut", "Oak", "Oat", "Odd", "One", "Oriole", "Osprey", "Pansy", "Panther", "Parsley",
    "Partridge", "Patch", "Patchouli", "Peak", "Pear", "Peat", "Perch", "Petal", "Petunia", "Pheasant", "Pigeon", "Pike", "Pine",
    "Piper", "Plover", "Plum", "Pod", "Pond", "Pool", "Pop", "Poppy", "Posy", "Pounce", "Prance", "Prickle", "Prim", "Primrose",
    "Puddle", "Python", "Quail", "Quick", "Quiet", "Quill", "Quiver", "Rabbit", "Raccoon", "Ragged", "Rain", "Rainbow", "Rat",
    "Rattle", "Raven", "Reed", "Ridge", "Rift", "Rindle", "Ripple", "River", "Roach", "Roar", "Rook", "Root", "Rose", "Rosy",
    "Rowan", "Rubble", "Runnel", "Running", "Rush", "Rustle", "Rye", "Sable", "Sapling", "Scorch", "Scratch", "Seed", "Serpent", "Shard",
    "Sharp", "Shell", "Shimmer", "Shine", "Shining", "Shivering", "Short", "Shrew", "Shrub", "Shy", "Silent", "Silk", "Silky", "Silt", "Skulk",
    "Skip", "Sky", "Slate", "Sleek", "Sleepy", "Sleet", "Slight", "Slip", "Sloe", "Slope", "Slumber", "Small", "Snail", "Snake", "Snap", 
    "Sneeze", "Snip", "Snowy", "Soft", "Song", "Sorrel", "Spark", "Sparrow", "Speckle", "Spider", "Spike", "Splash", "Splinter",
    "Spore", "Spot", "Spotted", "Spring", "Sprout", "Spruce", "Squirrel", "Starling", "Stem", "Stoat", "Stork", "Streak", "Stream", "Stretch", 
    "Strike", "Stripe", "Stumpy", "Sunny", "Swallow", "Swamp", "Swarm", "Sweet", "Swift", "Sycamore", "Tadpole", "Tall", "Talon", "Tangle", 
    "Tansy", "Tawny", "Tempest", "Termite", "Thistle", "Thorn", "Thrift", "Thrush", "Thunder", "Thyme", "Tiger", "Timber", "Tiny", "Toad", 
    "Torn", "Tremble", "Trickle", "Trout", "Tuft", "Tulip", "Tumble", "Turtle", "Valley", "Vine", "Vixen", "Wasp", "Weasel", "Weaver", "Web", 
    "Weed", "Weevil", "Wet", "Wheat", "Whimsy", "Whirl", "Whisker", "Whisper", "Whispering", "Whistle", "Whorl", "Wild", "Willow", 
    "Wind", "Wing", "Wish", "Wisteria", "Wolf", "Wolverine", "Wood", "Worm", "Wren", "Yarrow", "Yew", 
    "Zap", "Zinnia"];
const suffixes = ["fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur", "fur",
    "tuft", "tuft", "tuft", "tuft", "tuft", "tooth", "tooth", "tooth", "tooth", "tooth",
    "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", "pelt", 
    "tail", "tail", "tail", "tail", "tail", "tail", "tail", "claw", "claw", "claw", "claw", "claw", "claw",
    "foot", "foot", "foot", "foot", "foot", "whisker", "whisker", "whisker", "whisker", "whisker", "whisker",
    "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart",
    "arch", "ash", "aster", "back", "badger", "bark", "bat", "beak", "beam", "bee", "beetle", "bellow", "belly", "berry", 
    "billow", "bird", "bite", "blaze", "blink", "bloom", "blossom", "blotch", "blur", "bone", "bounce", "bracken", "bramble", 
    "branch", "break", "breeze", "briar", "bright", "brook", "bubble", "bud", "bumble", "burn", "burr", "burst", "bush", "buzz", 
    "call", "catcher", "chase", "chaser", "chasm", "chest", "chill", "chirp", "chomp", "cinder", "clash", "cloud", "clover",
    "crackle", "crash", "crawl", "creek", "crest", "cry", "curl", "current", "daisy", "dance", "dapple", "dart", "dash", "dawn", 
    "daze", "dazzle", "dew", "dream", "drift", "drizzle", "drop", "dusk", "dust", "eagle", "ear", "ears", "echo", "egg", "ember", 
    "eye", "eyes", "face", "falcon", "fall", "fang", "feather", "fern", "fin", "fire", "fish", "flake", "flame", "flare", "flash", 
    "fleck", "flick", "flicker", "flight", "flip", "flit", "flood", "flow", "flower", "fluff", "fog", "fox", "freeze", "frost", "fruit", 
    "fuzz", "frill", "gale", "gaze", "ghost", "glare", "gleam", "glide", "glint", "glow", "goose", "gorse", "grass", "growl", "hail", "hare", 
    "haven", "hawk", "haze", "heather", "hiss", "hollow", "holly", "honey", "hope", "howl", "husk", "ice", "iris", "ivy", "jaw", 
    "jay", "joy", "jumble", "jump", "kestrel", "kick", "kite", "knoll", "lake", "larch", "laurel", "leaf", "leap", "leg", "leopard", 
    "light", "lightning", "lilac", "lily", "lion", "lotus", "mallow", "mane", "mark", "mask", "meadow", "mimic", "minnow", "mist", 
    "moon", "moor", "moss", "moth", "mouse", "munch", "murk", "muzzle", "needle", "nest", "nettle", "newt", "nibble", "night", "nip", 
    "noise", "nose", "nudge", "nut", "pad", "patch", "path", "peak", "petal", "plume", "pond", "pool", "poppy", "pounce", "prance", 
    "prickle", "puddle", "purr", "quill", "quiver", "rain", "rapid", "raven", "reed", "rip", "ripple", "rise", "rise", "river", 
    "roach", "roar", "rock", "root", "rose", "rumble", "rump", "run", "runner", "rush", "rustle", "scar", "scratch", "screech", 
    "seed", "seeker", "shade", "shadow", "shard", "shell", "shimmer", "shine", "shiver", "shock", "shriek", "sight", "silk", "skip", 
    "skitter", "sky", "slash", "slip", "snap", "snarl", "snout", "snow", "soar", "song", "spark", "speck", "speckle", "spider", 
    "spike", "spirit", "splash", "splinter", "spore", "spot", "spots", "spring", "sprout", "stalk", "stem", "step", "sting", "stone", 
    "storm", "streak", "stream", "strike", "stride", "stripe", "sun", "swarm", "swipe", "swoop", "talon", "tangle",
    "thistle", "thorn", "thrift", "throat", "thrush", "thud", "thunder", "tiger", "timber", "toe", "tooth", "trail", "tree", 
    "trot", "tumble", "twist", "valley", "watcher", "water", "wave", "web", "weaver", "whisper", "whistle", "willow", "wind", "wing", "wish", "wisp", 
    "zoom"];

// 2. Create a function to generate a random name
function generateRandomName() {
    // Get a random first name
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    // Get a random last name
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Combine them into a full name
    return `${randomPrefix}${randomSuffix}`;
}

// 3. Automatically generate and display the name without user input
// This code runs as soon as the script is loaded by the browser
const nameDisplayElement = document.getElementById('generated-name');
if (nameDisplayElement) {
    nameDisplayElement.textContent = generateRandomName();
}