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

    // RANDOM TRAIT GENERATOR
    function generateRandomClanTrait() {
        if (namesData.length === 0) {
            return 'Clan traits error.';
        }
        const randomIndex = Math.floor(Math.random() * clantraitsData.length);
        return clantraitsData[randomIndex];
    }

    // Event listener for the button
    generateWorld.addEventListener('click', () => {
        const newClanTrait = generateRandomClanTrait();
        generatedClanTraitElement.textContent = newClanTrait;
    });

    // Load names when the page loads
    fetchClanTrait();
    });
    
    const ClanTraits = ["Absent-minded", "Casual", "Dry", "Chummy", "Folksy", "Hypnotic", 
      "Maternal", "Old-fashioned", "Neutral", "Alert", "Farsighted", "Gallant", "Free-thinking", 
      "Hardworking", "Genuine", "High-minded", "Incisive", "Incorruptible", "Leaderly",
      "Many-sided", "Hefty", "Organized", "Patient", "Persuasive", "Principled", "Practical",
      "Responsible", "Romantic", "Scholarly", "Self-reliant", "Spontaneous", "Stable", "Strong",
      "Fox-hearted", "Sympathetic", "Teacherly", "Tolerant", "Unfoolable", "Witty", "Enigmatic",
      "Ordinary", "Private", "Loud", "Questioning", "Predictable", "Airy", "Anxious",
      "Argumentative", "Artifical", "Bizarre", "Blunt", "Calculating", "Colorless", "Crude",
      "Cruel", "Devious", "Messy", "Misguided", "Obnoxious", "One-sided", "Opinionated",
      "Overimaginative", "Power-hungry", "Quirky", "Reactive", "Resentful", "Regretful",
      "Ritualistic", "Ruined", "Selfish", "Sadistic", "Scheming", "Small-thinking", "Suspicious",
      "Thievish", "Transparent", "Wishful", "Venomous", "Amusing", "Artful", "Athletic",
      "Attentive", "Balanced", "Benevolent", "Breezy", "Bright", "Capable", "Challenging",
      "Convincing", "Courteous", "Dependable", "Cultured", "Deep", "Diplomatic", "Dignified",
      "Driven", "Efficient", "Encouraging", "Esthetic", "Ethical", "Expressive", "Flexible",
      "Fun-loving", "Giving", "Innovative", "Mellow", "Persistent", "Rational", "Reserved",
      "Subtle", "Youthful", "Envious", "Monstrous", "Plodding", "Sloppy", "Glamorous", "Unruly",
      "Shy", "Impulsive", "Bullying", "Attention-seeking", "Charming", "Fearless", "Noisy",
      "Skittish", "Quiet", "Self-conscious", "Daydreamer", "Sweet", "Polite", "Know-it-all",
      "Bossy", "Abnormal", "Abrasive", "Abrupt", "Absurd", "Academic", "Accepting", "Accessible",
      "Accommodating", "Accomplished", "Accountable", "Accurate", "Active", "Activist",
      "Adamant", "Adaptable", "Admirable", "Affable", "Affectionate", "Afraid", "Aggressive",
      "Agile", "Agitated", "Agreeable", "Aimless", "Airy", "Alert", "Allocentric", "Alluring",
      "Aloof", "Altruistic", "Ambiguous", "Amenable", "Amicable", "Amoral", "Amusing",
      "Analytical", "Angry", "Animated", "Annoying", "Antagonistic", "Anticipative",
      "Antisocial", "Antsy", "Anxious", "Apathetic", "Appalling", "Appreciative", "Apprehensive",
      "Approachable", "Apologetic", "Argumentative", "Arrogant", "Artful", "Articulate",
      "Artificial", "Artistic", "Artsy", "Asocial", "Aspiring", "Assertive", "Assuring",
      "Astigmatic", "Astute", "Athletic", "Attentive", "Audacious", "Authentic", "Authoritative",
      "Autonomous", "Avid", "Aware", "Awkward", "Bashful", "Belligerent", "Benevolent",
      "Boisterous", "Bitter", "Bizarre", "Bland", "Blasphemous", "Blissful", "Blunt", "Boastful",
      "Boisterous", "Boring", "Bothersome", "Braggart", "Brainy", "Brash", "Brave", "Brazen",
      "Breezy", "Bright", "Brilliant", "Brooding", "Brutal", "Bubbly", "Bureaucratic",
      "Businesslike", "Busy", "Calculating", "Callous", "Candid", "Cantankerous", "Capable",
      "Carefree", "Careless", "Caring", "Casual", "Cautious", "Cerebral", "Certain", "Charitable",
      "Charmless", "Chatty", "Cheeky", "Cheerful", "Cheery", "Chivalrous", "Chummy", "Civil",
      "Classy", "Clever", "Clingy", "Clueless", "Clumsy", "Coarse", "Collaborative",
      "Colorful", "Colorless", "Combative", "Comfortable", "Comforting", "Comical", "Commanding",
      "Committed", "Communicative", "Companionly", "Compassionate", "Compelling", "Competent",
      "Complacent", "Complaining", "Complaintive", "Compliant", "Complicated", "Complimentary",
      "Composed", "Compromising", "Compulsive", "Conceited", "Concerned", "Condemnatory",
      "Condescending", "Conformist", "Confrontational", "Confused", "Conniving", "Conscientious",
      "Considerate", "Consistent", "Conspiring", "Constructive", "Contemplative", "Contemptuous",
      "Content", "Contradictory", "Contrarian", "Contrite", "Controlled", "Controlling",
      "Conventional", "Convincing", "Cool", "Cooperative", "Cordial", "Corrupt", "Courageous",
      "Courteous", "Cowardly", "Crabby", "Crafty", "Cranky", "Crass", "Creative", "Cerebral",
      "Critical", "Crooked", "Crude", "Cruel", "Cultured", "Curious", "Cynical", "Dainty",
      "Daredevil", "Dauntless", "Dazzling", "Deceitful", "Decisive", "Dedicated", "Defenseless",
      "Defensive", "Defiant", "Delicate", "Delightful", "Demanding", "Demeaning", "Demure", "Dense",
      "Dependable", "Dependent", "Deplorable", "Despairing", "Desperate", "Despicable", "Destructive",
      "Detached", "Detailed", "Determined", "Deviant", "Devious", "Devoted", "Difficult",
      "Dignified", "Diligent", "Diplomatic", "Direct", "Disagreeable", "Disbelieving", "Discerning",
      "Disciplined", "Discontented", "Discouraging", "Discourteous", "Discreet", "Discriminatory",
      "Disdainful", "Disgraceful", "Dishonest", "Dishonorable", "Disingenuous", "Disinterested",
      "Disloyal", "Dismissive", "Disobedient", "Disorderly", "Disorganized", "Disrespectful",
      "Disruptive", "Distant", "Distinctive", "Distractible", "Distrustful", "Ditzy", "Docile",
      "Dogmatic", "Dominating", "Domineering", "Dormant", "Doubtful", "Dramatic", "Dreadful",
      "Driven", "Dry", "Dubious", "Dull", "Dutiful", "Dynamic", "Eager", "Earnest", "Earthy",
      "Easygoing", "Eccentric", "Educated", "Educational", "Effective", "Efficient", "Effusive",
      "Egalitarian", "Egocentric", "Egoistic", "Elaborate", "Elegant", "Elitist", "Eloquent",
      "Elusive", "Emotional", "Empathetic", "Empowered", "Empowering", "Enchanting", "Encouraging",
      "Endearing", "Enduring", "Energetic", "Engaged", "Engaging", "Enigmatic", "Enlightened",
      "Entertaining", "Enthralling", "Enthusiastic", "Entrancing", "Envious", "Erratic", "Ethical",
      "Euphoric", "Evasive", "Excessive", "Excitable", "Exclusionary", "Experimental", "Exploratory",
      "Exploitive", "Expressionless", "Expressive", "Extra", "Extravagant", "Extreme", "Exuberant",
      "Fabulous", "Fair", "Faithless", "False", "Familiar", "Fanatical", "Fanciful", "Fascinating",
      "Fashionable", "Fatalistic", "Fawning", "Fearful", "Fearsome", "Feisty", "Ferocious",
      "Fervent", "Fickle", "Fiery", "Finicky", "Firm", "Fixated", "Flaky", "Flashy", "Flexible",
      "Flighty", "Flippant", "Fluttery", "Focused", "Folksy", "Foolish", "Forceful", "Forgetful",
      "Forgiving", "Formal", "Formidable", "Forthright", "Frank", "Frantic", "Fraudulent",
      "Free-wheeling", "Freethinking", "Frenzied", "Friendly", "Frightened", "Frightening",
      "Frightful", "Frisky", "Frivolous", "Frugal", "Fun", "Fun-loving", "Funny", "Fussy",
      "Gallant", "Generous", "Genial", "Genius", "Gentle", "Genuine", "Giving", "Glamorous",
      "Glum", "Gluttonous", "Goofy", "Graceful", "Graceless", "Gracious", "Grandiose", "Grateful",
      "Greedy", "Gregarious", "Grim", "Grouchy", "Grounded", "Gruff", "Guarded", "Guiltful",
      "Gullible", "Habitual", "Haggard", "Happy", "Hardworking", "Harmonious", "Harsh", "Hasty",
      "Hateful", "Haughty", "Haunted", "Headstrong", "Healthy", "Hearty", "Hedonistic", "Heedful",
      "Helpful", "Helpless", "Heretical", "Heroic", "Hesitant", "High-spirited", "Honest",
      "Honorable", "Hopeful", "Hopeless", "Hospitable", "Hostile", "Hot-headed", "Huffy",
      "Humane", "Humble", "Humorless", "Humorous", "Hurried", "Hurtful", "Hustling",
      "Hypercritical", "Hypnotic", "Hypocritical", "Hysterical", "Idealistic", "Idiosyncratic",
      "Idle", "Ignorant", "Illogical", "Imaginative", "Imitative", "Immature", "Impartial",
      "Impassive", "Impatient", "Impersonal", "Impolite", "Impractical", "Impressionable",
      "Impulsive", "Inactive", "Inadequate", "Inappropriate", "Inapt", "Inattentive",
      "Incompetent", "Inconsiderate", "Inconsistent", "Indecisive", "Independent", "Indifferent",
      "Indiscreet", "Indiscriminate", "Individualistic", "Indulgent", "Industrious",
      "Inefficient", "Inept", "Inflexible", "Informed", "Infuriating", "Innocent", "Innovative",
      "Inoffensive", "Inquisitive", "Insensitive", "Insightful", "Insincere", "Insistent",
      "Inspiring", "Instinctive", "Insurgent", "Intellectual", "Intense", "Intentional",
      "Intimidating", "Intolerant", "Intrusive", "Intuitive", "Invasive", "Inventive",
      "Investigative", "Invigorated", "Invisible", "Involved", "Invulnerable", "Irrational",
      "Irreligious", "Irresponsible", "Irreverent", "Irritable", "Jaunty", "Jealous",
      "Jittery", "Jolly", "Jovial", "Joyful", "Joyous", "Jubilant", "Judgemental", "Judicious",
      "Jumpy", "Just", "Juvenile", "Keen", "Knowledgeable", "Laid-back", "Lavish", "Lazy",
      "Leisurely", "Lenient", "Lively", "Logical", "Ludicrous", "Magnetic", "Malicious",
      "Malignant", "Managerial", "Manipulative", "Mannered", "Mannerless", "Marvelous",
      "Materialistic", "Meticulous", "Mature", "Mean", "Mechanical", "Meddlesome", "Mediative",
      "Meek", "Melancholic", "Mellow", "Merciful", "Merry", "Messy", "Methodical", "Meticulous",
      "Mild", "Militant", "Mindful", "Mischievous", "Miserable", "Misguided", "Misinformed",
      "Misleading", "Modest", "Moody", "Moralistic", "Morbid", "Motivational", "Mysterious",
      "Mystical", "Nagging", "Naive", "Narcissistic", "Neat", "Needy", "Neglectful", "Negotiating",
      "Neighborly", "Nice", "Nifty", "Nihilistic", "Noble", "Nonchalant", "Noncommittal",
      "Noncompetitive", "Nostalgic", "Nosy", "Nurturing", "Obedient", "Objective", "Obliging",
      "Oblivious", "Obnoxious", "Observant", "Obsessive", "Odd", "Offensive", "Openness",
      "Opinionated", "Opportunistic", "Oppressive", "Optimistic", "Orderly", "Ordinary", 
      "Organized", "Outgoing", "Outlandish", "Outrageous", "Outspoken", "Overachieving",
      "Overbearing", "Overconfident", "Overemotional", "Overreactive", "Oversensitive",
      "Overwhelmed", "Overzealous", "Pacifistic", "Panicky", "Paranoid", "Particular",
      "Passionate", "Passive", "Passive-aggressive", "Pathetic", "Patient", "Patriotic",
      "Patronizing", "Peaceful", "Peppy", "Perceptive", "Perky", "Permissive", "Perplexing",
      "Persistent", "Personable", "Persuasive", "Pessimistic", "Petty", "Petulant", "Pensive",
      "Philanthropic", "Philosophical", "Phony", "Picky", "Pitiable", "Pitiful", "Plain",
      "Pleasant", "Plodding", "Plucky", "Poised", "Polished", "Political", "Pompous", "Popular",
      "Posh", "Positive", "Possessive", "Power-hungry", "Powerful", "Practical", "Pragmatic",
      "Precise", "Predictable", "Prejudiced", "Preoccupied", "Prepared", "Preposterous",
      "Presentable", "Presumptuous", "Pretentious", "Prim", "Principled", "Private", "Proactive",
      "Procrastinator", "Prodigal", "Productive", "Professional", "Profound", "Progressive",
      "Prominent", "Prompt", "Proper", "Prosperous", "Protective", "Proud", "Prudent", "Prying",
      "Punctual", "Pure", "Puritanical", "Purposeful", "Pushy", "Quarrelsome", "Questioning",
      "Quick-witted", "Quirky", "Quizzicle", "Radiant", "Radical", "Rash", "Rational",
      "Reactionary", "Reactive", "Realistic", "Reasonable", "Reassuring", "Reclusive", "Reckless",
      "Refined", "Reflective", "Reforming", "Regimental", "Regretful", "Relatable", "Relational",
      "Relaxed", "Reliable", "Religious", "Remorseful", "Repentant", "Repressed", "Resentful",
      "Reserved", "Resilient", "Resolute", "Resourceful", "Respectable", "Respected",
      "Respectful", "Responsive", "Restless", "Restrained", "Revered", "Reverent",
      "Reverential", "Revolutionary", "Ridiculous", "Righteous", "Rigid", "Ritualistic",
      "Romantic", "Rowdy", "Rude", "Rugged", "Rustic", "Ruthless", "Sacrificial",
      "Sacrilegious", "Sadistic", "Safe", "Sanctimonious", "Sarcastic", "Sardonic", "Sassy",
      "Satisfied", "Scandalous", "Scheming", "Scholarly", "Scornful", "Scruffy", "Scrupulous",
      "Secretive", "Secure", "Sedentary", "Self-absorbed", "Self-assured", "Self-aware",
      "Self-critical", "Self-destructive", "Self-disciplined", "Self-important", "Self-indulgent",
      "Self-pitying", "Self-reliant", "Self-righteous", "Self-sufficient", "Selfish", "Selfless",
      "Sensible", "Sensitive", "Sentimental", "Serene", "Serious", "Shady", "Shallow", "Shameful",
      "Sharing", "Sharp", "Shifty", "Showy", "Shrewd", "Silly", "Simplistic", "Sinister", "Skeptical",
      "Sketchy", "Skittish", "Slandering", "Sloppy", "Slothful", "Sluggish", "Sly", "Smug", "Snappy", "Snarky",
      "Snazzy", "Snobbish", "Snooping", "Snooty", "Sociable", "Solemn", "Solitary", "Sophisticated",
      "Sordid", "Soulful", "Spirited", "Spiritual", "Spiteful", "Spunky", "Spoiled", "Spontaneous", "Stagnant",
      "Steadfast", "Steady", "Stealthy", "Steely", "Stern", "Stiff", "Stingy", "Stoic", "Straightforward", "Strategic",
      "Stressed", "Strict", "Striking", "Stringent", "Striving", "Strong", "Strong-willed",
      "Stubborn", "Studious", "Sturdy", "Stylish", "Suave", "Subjective", "Submissive", "Subservient",
      "Subtle", "Successful", "Sulky", "Sullen", "Sunny", "Superficial", "Superfluous",
      "Superstitious", "Supportive", "Surprising", "Suspicious", "Sympathetic", "Systematic",
      "Tacky", "Tactful", "Tactless", "Talkative", "Tasteful", "Tasteless", "Teachable", "Teacherly",
      "Temperamental", "Tenacious", "Tense", "Thankful", "Thievish", "Thorough", "Thoughtless",
      "Threatened", "Threatening", "Thrifty", "Thrilling", "Tidy", "Timely", "Timid", "Tireless",
      "Tolerant", "Tormented", "Tough", "Traitorous", "Tranquil", "Transparent", "Treacherous",
      "Trendy", "Triumphant", "Troubled", "Trusting", "Trustworthy", "Truthful", "Unaware",
      "Uncertain", "Uncooperative", "Uncultured", "Understanding", "Unfazed", "Unforgiving",
      "Unpredictable", "Unrealistic", "Unreasonable", "Upbeat", "Uplifting", "Upright", "Urbane",
      "Vague", "Vain", "Valiant", "Venomous", "Venturesome", "Versatile", "Vexed", "Vibrant",
      "Vicious", "Victorious", "Vigilant", "Vigorous", "Vile", "Vindictive", "Violent",
      "Virtuous", "Visionary", "Volatile", "Vulgar", "Vulnerable", "Wallowing", "Warm", "Wary",
      "Wasteful", "Weak-willed", "Weird", "Welcoming", "Whimsical", "Whiny", "Wicked", "Wild",
      "Willful", "Willing", "Wishful", "Withdrawn", "Witty", "Wondrous", "Workaholic", "Worrier",
      "Wrathful", "Youthful", "Zany", "Zealous", "Zesty",]

    function generateRandomClanTrait() {
    const randomClanTrait = ClanTraits[Math.floor(Math.random() * clantraits.length)];


    return `${randomClanTrait}$and${randomClanTrait}`;
    }


    // This code runs as soon as the script is loaded by the browser
    const ClanTraitDisplayElement = document.getElementById('generated-clantrait');
    if (ClanTaitDisplayElement) {
        nameDisplayElement.textContent = generateRandomClanTrait();
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