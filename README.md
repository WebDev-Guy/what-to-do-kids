# What to Do Kids - A Probability Picker

## Overview
This is a fun web app designed for kids to randomly pick an activity to do based on weighted probabilities. Activities with a higher probability score are more likely to be selected, while those with a lower score (such as treats) appear less often.

## Features
- **Weighted Random Selection**: Activities are chosen based on assigned probabilities.
- **Interactive Button**: Modern, animated button with "Surprise Me!" call-to-action and hover effects.
- **Visual Design**: Large, centered emojis above activity text for enhanced visual engagement.
- **Kid-Friendly Typography**: Uses Fredoka One font for playful, readable text perfect for ages 5-7.
- **Confetti Celebration**: Uses the tsParticles Confetti library for a fun effect.
- **Animated UI**:
  - Gradient background animation.
  - Smooth flip animation for activity and emoji transitions.
  - Animated gradient button with lift and scale effects.
  - Responsive hover interactions.
- **Accessible Design**: High contrast colors and WCAG-compliant text readability.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Emoji Support**: Each activity includes a large, prominent emoji for visual appeal.

## How to Use
1. Open the web app in a browser.
2. Click the "Surprise Me!" button or press the spacebar to pick an activity.
3. Watch the emoji and text flip to reveal your chosen activity.
4. Enjoy the confetti celebration and have fun with your activity!

## Technologies Used
- **HTML, CSS, JavaScript** for the frontend.
- **Google Fonts (Fredoka One)** for kid-friendly typography.
- **tsParticles Confetti Library** for the animated confetti effect.
- **CSS Animations** for flip transitions, gradient backgrounds, and interactive button effects.

## Customization
To modify activities, edit the `activities` array in the script. Each activity entry includes:
- `text`: The activity name.
- `emoji`: An associated emoji.
- `probability`: A weight from 1-10 that determines how often it appears.

## Activity Categories
The app now includes over 110 diverse activities organized into several categories:

- **Educational Activities**: Reading, math practice, science experiments, learning about space/animals/weather
- **Creative Arts & Crafts**: Drawing, painting, origami, making masks, recycled art projects
- **Physical Activities**: Sports, dancing, yoga, outdoor play, gymnastics
- **STEM Activities**: Science experiments, basic coding, growing plants, making slime
- **Imaginative Play**: Dress up, puppet shows, playing restaurant, creating stories
- **Life Skills**: Cooking, cleaning, organizing, practicing time management
- **Special Treats**: Ice cream, arcade visits, special outings (low probability)

## Example Activity List
```javascript
const activities = [
    { text: "Read a book", emoji: "📖", probability: 8 },
    { text: "Science experiment", emoji: "🧪", probability: 6 },
    { text: "Make friendship bracelets", emoji: "💎", probability: 5 },
    { text: "Go get ice cream", emoji: "🍦", probability: 1 }
];
```

## Future Enhancements
- Add sound effects when selecting an activity.
- Implement a scoreboard or tracking system.
- Introduce seasonal or themed activities.
- Add difficulty levels for different age ranges.
- Include parent/teacher notes for educational activities.
- Add timer functionality for time-based activities.

## License
This project is open-source and free to use for personal or educational purposes.

## Author
Created with ❤️ for kids who need fun activity ideas (and parents that need a break)!

## Recent Updates (v2.0)
- **🎨 Visual Redesign**: Complete UI overhaul with large, centered emojis and improved layout
- **🔤 Typography**: Added Fredoka One font for enhanced kid-friendly readability
- **🎯 Interactive Button**: Redesigned from circular to modern rounded rectangle with animated gradient
- **✨ Enhanced Animations**: Improved flip transitions for both emoji and text elements
- **♿ Accessibility**: Improved color contrast and WCAG compliance for better readability
- **📱 Responsive**: Better mobile and desktop experience with optimized sizing
- **🎭 Activity Expansion**: Added 50+ new activities bringing total to 110+ options
