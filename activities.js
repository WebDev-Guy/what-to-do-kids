// Probability scoring: 1-10
// 1 = least likely to be chosen
// 10 = most likely to be chosen
const activities = [
    {
        "text": "Read a book",
        "emoji": "📖",
        "probability": 8
    },
    {
        "text": "Go to the park",
        "emoji": "🌳",
        "probability": 4
    },
    {
        "text": "Play a board game",
        "emoji": "🎲",
        "probability": 7
    },
    {
        "text": "Draw a picture",
        "emoji": "🎨",
        "probability": 5
    },
    {
        "text": "Watch TV",
        "emoji": "📺",
        "probability": 2
    },
    {
        "text": "Build a fort",
        "emoji": "🏰",
        "probability": 2
    },
    {
        "text": "Go get ice cream",
        "emoji": "🍦",
        "probability": 1
    },
    {
        "text": "Play basketball",
        "emoji": "🏀",
        "probability": 4
    },
    {
        "text": "Playdough",
        "emoji": "🖐️",
        "probability": 6
    },
    {
        "text": "Play catch",
        "emoji": "⚾",
        "probability": 5
    },
    {
        "text": "Clean up toys",
        "emoji": "🧸",
        "probability": 4
    },
    {
        "text": "Play outside",
        "emoji": "🌞",
        "probability": 7
    },
    {
        "text": "Have a snack",
        "emoji": "🍎",
        "probability": 5
    },
    {
        "text": "Walk the dog",
        "emoji": "🐶",
        "probability": 7
    },
    {
        "text": "Build with Lego",
        "emoji": "🧱",
        "probability": 7
    },
    {
        "text": "Play with Barbies",
        "emoji": "👗",
        "probability": 4
    },
    {
        "text": "Coloring pages",
        "emoji": "🖍️",
        "probability": 7
    },
    {
        "text": "Make paper airplanes",
        "emoji": "✈️",
        "probability": 7
    },
    {
        "text": "Computer learning games",
        "emoji": "💻",
        "probability": 3
    },
    {
        "text": "Tablet time",
        "emoji": "📱",
        "probability": 2
    },
    {
        "text": "Paint",
        "emoji": "🖌️",
        "probability": 4
    },
    {
        "text": "Do an art project",
        "emoji": "🎭",
        "probability": 4
    },
    {
        "text": "Nerf guns",
        "emoji": "🔫",
        "probability": 4
    },
    {
        "text": "Sew kit activity",
        "emoji": "🧵",
        "probability": 5
    },
    {
        "text": "Clean your room",
        "emoji": "🧹",
        "probability": 4
    },
    {
        "text": "Go to jumping park",
        "emoji": "🤸",
        "probability": 1
    },
    {
        "text": "Watch a movie",
        "emoji": "🎬",
        "probability": 3
    },
    {
        "text": "Quiet time",
        "emoji": "🤫",
        "probability": 5
    },
    {
        "text": "Go to the arcade",
        "emoji": "🕹️",
        "probability": 1
    },
    {
        "text": "Go get a jumbo pretzel",
        "emoji": "🥨",
        "probability": 1
    },
    {
        "text": "Play gymnastics",
        "emoji": "🤸‍♀️",
        "probability": 5
    },
    {
        "text": "Look at family photos",
        "emoji": "🖼️",
        "probability": 4
    },
    {
        "text": "Clean baseboards",
        "emoji": "🧽",
        "probability": 2
    },
    {
        "text": "Clean basement",
        "emoji": "🏚️",
        "probability": 2
    },
    {
        "text": "Drink some water",
        "emoji": "💧",
        "probability": 7
    },
    {
        "text": "Play with hotwheels cars",
        "emoji": "🚗",
        "probability": 7
    },
    {
        "text": "Play a sport outside",
        "emoji": "⚽",
        "probability": 5
    },
    {
        "text": "Call Grandparents",
        "emoji": "📞",
        "probability": 3
    },
    {
        "text": "Have a tea party",
        "emoji": "🍵",
        "probability": 3
    },
    {
        "text": "Clean toys up in garage",
        "emoji": "🛠️",
        "probability": 1
    },
    {
        "text": "Draw with chalk",
        "emoji": "🖍️",
        "probability": 5
    },
    {
        "text": "Practice reading roll",
        "emoji": "📚",
        "probability": 7
    },
    {
        "text": "Do a word search",
        "emoji": "🔠",
        "probability": 7
    },
    {
        "text": "Complete a maze puzzle",
        "emoji": "🌀",
        "probability": 7
    },
    {
        "text": "Practice math sheets",
        "emoji": "➕",
        "probability": 7
    },
    {
        "text": "Make slime",
        "emoji": "🟢",
        "probability": 3
    },
    {
        "text": "Create a treasure hunt",
        "emoji": "🗺️",
        "probability": 6
    },
    {
        "text": "Learn magic tricks",
        "emoji": "🎩",
        "probability": 5
    },
    {
        "text": "Make friendship bracelets",
        "emoji": "💎",
        "probability": 5
    },
    {
        "text": "Science experiment",
        "emoji": "🧪",
        "probability": 6
    },
    {
        "text": "Dance party",
        "emoji": "💃",
        "probability": 6
    },
    {
        "text": "Learn origami",
        "emoji": "📄",
        "probability": 5
    },
    {
        "text": "Grow a plant from seed",
        "emoji": "🌱",
        "probability": 6
    },
    {
        "text": "Make homemade pizza",
        "emoji": "🍕",
        "probability": 4
    },
    {
        "text": "Create a comic book",
        "emoji": "📚",
        "probability": 5
    },
    {
        "text": "Play restaurant",
        "emoji": "🍽️",
        "probability": 6
    },
    {
        "text": "Build a birdhouse",
        "emoji": "🏠",
        "probability": 4
    },
    {
        "text": "Make music with kitchen items",
        "emoji": "🥄",
        "probability": 6
    },
    {
        "text": "Create shadow puppets",
        "emoji": "🤲",
        "probability": 5
    },
    {
        "text": "Learn typing games online",
        "emoji": "⌨️",
        "probability": 5
    },
    {
        "text": "Make paper plate masks",
        "emoji": "🎭",
        "probability": 5
    },
    {
        "text": "Have an indoor picnic",
        "emoji": "🧺",
        "probability": 4
    },
    {
        "text": "Play memory games",
        "emoji": "🧠",
        "probability": 7
    },
    {
        "text": "Make salt dough sculptures",
        "emoji": "🏺",
        "probability": 4
    },
    {
        "text": "Learn about space",
        "emoji": "🚀",
        "probability": 6
    },
    {
        "text": "Create a time capsule",
        "emoji": "📦",
        "probability": 3
    },
    {
        "text": "Play charades",
        "emoji": "🎪",
        "probability": 6
    },
    {
        "text": "Make homemade playdough",
        "emoji": "🎨",
        "probability": 4
    },
    {
        "text": "Learn about dinosaurs",
        "emoji": "🦕",
        "probability": 6
    },
    {
        "text": "Create stop-motion videos",
        "emoji": "📹",
        "probability": 3
    },
    {
        "text": "Make paper chains",
        "emoji": "🔗",
        "probability": 5
    },
    {
        "text": "Practice yoga for kids",
        "emoji": "🧘",
        "probability": 5
    },
    {
        "text": "Make ice cream in a bag",
        "emoji": "🥛",
        "probability": 2
    },
    {
        "text": "Create a nature journal",
        "emoji": "🍃",
        "probability": 6
    },
    {
        "text": "Play Simon Says",
        "emoji": "👂",
        "probability": 7
    },
    {
        "text": "Make sock puppets",
        "emoji": "🧦",
        "probability": 5
    },
    {
        "text": "Learn about the weather",
        "emoji": "🌦️",
        "probability": 6
    },
    {
        "text": "Create a fort with blankets",
        "emoji": "🏕️",
        "probability": 6
    },
    {
        "text": "Make homemade butter",
        "emoji": "🧈",
        "probability": 4
    },
    {
        "text": "Play hide and seek",
        "emoji": "👁️",
        "probability": 7
    },
    {
        "text": "Learn basic coding games",
        "emoji": "💻",
        "probability": 4
    },
    {
        "text": "Create recycled art",
        "emoji": "♻️",
        "probability": 5
    },
    {
        "text": "Make rainbow with water",
        "emoji": "🌈",
        "probability": 5
    },
    {
        "text": "Play dress up",
        "emoji": "👑",
        "probability": 6
    },
    {
        "text": "Learn about animals",
        "emoji": "🐘",
        "probability": 7
    },
    {
        "text": "Make paper boats",
        "emoji": "⛵",
        "probability": 5
    },
    {
        "text": "Practice telling time",
        "emoji": "⏰",
        "probability": 7
    },
    {
        "text": "Create sidewalk chalk art",
        "emoji": "🎨",
        "probability": 6
    },
    {
        "text": "Make homemade stamps",
        "emoji": "✉️",
        "probability": 4
    },
    {
        "text": "Play 20 questions",
        "emoji": "❓",
        "probability": 6
    },
    {
        "text": "Learn about different cultures",
        "emoji": "🌍",
        "probability": 5
    },
    {
        "text": "Make edible finger paint",
        "emoji": "🖼️",
        "probability": 3
    },
    {
        "text": "Practice handwriting",
        "emoji": "✏️",
        "probability": 7
    },
    {
        "text": "Create a family tree",
        "emoji": "🌳",
        "probability": 4
    },
    {
        "text": "Make bubble solution",
        "emoji": "🫧",
        "probability": 5
    }
];