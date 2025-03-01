# What to Do Kids - A Probability Picker

## Overview
This is a fun web app designed for kids to randomly pick an activity to do based on weighted probabilities. Activities with a higher probability score are more likely to be selected, while those with a lower score (such as treats) appear less often.

## Features
- **Weighted Random Selection**: Activities are chosen based on assigned probabilities.
- **Interactive Button**: Clicking the button or pressing the spacebar selects an activity.
- **Confetti Celebration**: Uses the tsParticles Confetti library for a fun effect.
- **Animated UI**:
  - Gradient background animation.
  - Bounce effect when clicking the button.
  - Flip animation for activity selection.
- **Emoji Support**: Each activity includes an emoji for extra fun.

## How to Use
1. Open the web app in a browser.
2. Click the circular button or press the spacebar to pick an activity.
3. The chosen activity will be displayed with an emoji.
4. Enjoy the confetti and have fun!

## Technologies Used
- **HTML, CSS, JavaScript** for the frontend.
- **tsParticles Confetti Library** for the animated confetti effect.
- **CSS Animations** for button bounce, background gradients, and text flip.

## Customization
To modify activities, edit the `activities` array in the script. Each activity entry includes:
- `text`: The activity name.
- `emoji`: An associated emoji.
- `probability`: A weight from 1-10 that determines how often it appears.

## Example Activity List
```javascript
const activities = [
    { text: "Read a book", emoji: "📖", probability: 8 },
    { text: "Go to the park", emoji: "🌳", probability: 4 },
    { text: "Play a board game", emoji: "🎲", probability: 7 },
    { text: "Go get ice cream", emoji: "🍦", probability: 1 }
];
```

## Future Enhancements
- Add sound effects when selecting an activity.
- Implement a scoreboard or tracking system.
- Introduce seasonal or themed activities.

## License
This project is open-source and free to use for personal or educational purposes.

## Author
Created with ❤️ for kids who need fun activity ideas (and parents that need a break)!
