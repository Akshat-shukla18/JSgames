JavaScript Game Development Collection
Hi Students, This repository contains a collection of classic and modern games built using JavaScript, HTML, CSS, and related web technologies. Each game demonstrates different programming concepts, game mechanics, and user interface designs.

Skill Set Used
Core Technologies
HTML5: Structure and semantic markup for game interfaces
CSS3: Styling, animations, responsive design, and visual effects
JavaScript (ES6+): Game logic, event handling, DOM manipulation, and browser APIs
Advanced Features
SVG (Scalable Vector Graphics): Used in missileGame for 3D-like graphics and vector-based rendering
Canvas API: 2D graphics rendering for snakeGame
Audio API: Sound effects and background music integration
Event Handling: Mouse, keyboard, and touch input management
Animation & Timing: RequestAnimationFrame, setTimeout, and CSS transitions
Game State Management: Pattern tracking, scoring systems, and level progression
Modular Code Organization: Separation of concerns with multiple JavaScript files
Development Practices
Object-Oriented Programming: Class-based game objects and inheritance
Functional Programming: Pure functions for game logic and utilities
Event-Driven Architecture: Responsive user interactions
https://github.com/Akshat-shukla18/JSgames
Cross-Browser Compatibility: Modern web standards and fallbacks
Games Included
1. Missile Game (missileGame/)
A fast-paced 3D-style missile navigation game using SVG graphics.

How It Works
Objective: Navigate a missile through a tunnel while avoiding barriers and collecting points
Controls: Mouse movement controls missile direction
Mechanics:
The missile moves forward automatically at increasing speeds
Players must steer through procedurally generated barriers
Collision detection prevents passing through walls
HUD displays speed, lives, progress, and radar information
Sound effects for missile launch and explosions
Game Modes: Progressive difficulty with multiple barrier patterns
Scoring: Based on distance traveled and speed maintained
Structure
missileGame/
├── index.html          # Main game page with SVG canvas
├── README.mkd          # Game-specific documentation
├── LICENSE             # MIT License
├── woosh.mp3 & .wav    # Sound effects
├── lib/
│   └── kevlindev/      # Kevin Lindsey's 2D geometry library
│       ├── 2D.js
│       ├── Path.js
│       ├── Point2D.js
│       ├── Vector2D.js
│       ├── Line.js
│       ├── Shape.js
│       ├── Intersection.js
│       └── Polynomial.js
└── src/
    ├── main.js         # Game initialization and main loop
    ├── game.js         # Core game logic and state management
    ├── missile.js      # Missile object and physics
    ├── barrier.js      # Barrier generation and collision
    ├── barrierQueue.js # Barrier management system
    ├── wall.js         # Wall rendering and collision
    ├── hud.js          # Heads-up display components
    ├── banner.js       # Game banners and messages
    ├── fog.js          # Visual fog effects
    ├── base.js         # Base classes and utilities
    └── util.js         # Helper functions
https://github.com/Akshat-shukla18/JSgames    
2. Simon Game (simonGame/)
A memory-based pattern recognition game with multiple difficulty modes.

How It Works
Objective: Repeat increasingly complex light and sound sequences
Game Modes:
Normal: Repeat the sequence in the same order
Alien: Repeat the sequence in reverse order
Ascension: Sequences get progressively longer each level
Mechanics:
Four colored buttons light up and play sounds in sequence
Player must click buttons in the correct order
Sequences start at 4 notes and increase in length
Visual feedback with button animations and sound effects
Level counter tracks progress
Controls: Mouse clicks on colored buttons
Audio: Custom sound effects for each button and mode
Structure
simonGame/
├── index.html          # Game interface with button layout
├── README.md           # Game documentation
├── script.js           # Game logic and event handlers
├── style.css           # Button styling and animations
└── sounds/
    ├── Space-note-root.wav
    ├── Space-note-3rd.wav
    ├── Space-note-5th.wav
    ├── Space-note-7th.wav
    ├── alien-1-short.wav
    ├── alien-2-short.wav
    ├── alien-3-short.wav
    └── alien-4-short.wav
https://github.com/Akshat-shukla18/JSgames
3. Snake Game (snakeGame/)
The classic Snake game with modern web implementation.

How It Works
Objective: Control a snake to eat food while avoiding walls and self-collision
Controls: Arrow keys or WASD for direction
Mechanics:
Snake grows longer with each food item consumed
Game ends on collision with walls or snake body
Score increases with food eaten
Progressive speed increase
Features: Score tracking, game over screen, restart functionality
Structure
snakeGame/
├── index.html          # Game page with canvas element
├── script.js           # Game logic, snake movement, collision detection
└── style.css           # Canvas styling and layout
Project Structure
GAMES/
├── readme.md           # This comprehensive README
├── missileGame/        # 3D SVG-based missile game
├── simonGame/          # Memory pattern game
└── snakeGame/          # Classic canvas-based snake game
Getting Started
Clone the repository
Navigate to any game directory
Open the index.html file in a modern web browser
Start playing!
Each game is self-contained and requires no additional setup or dependencies beyond a modern web browser with JavaScript enabled.

Browser Compatibility
Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge)
HTML5 Canvas and Audio API support required for full functionality
SVG support required for Missile Game
Contributing
This collection demonstrates various JavaScript game development techniques. Feel free to:
my original repo https://github.com/Akshat-shukla18/JSgames
Add new games following the established patterns
Improve existing game mechanics or visuals
Optimize performance and code quality
Add new features or difficulty modes
License
Individual games may have their own licenses. Check each game's directory for specific licensing information.
