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
    }
];