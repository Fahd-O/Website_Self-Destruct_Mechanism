# Website_Self-Destruct_Mechanism

This project demonstrates a unique fading effect for a website. The website's opacity decreases over a user-defined period (in minutes), ultimately fading out completely. It also includes a countdown timer that visually displays the remaining time.

## Features

- **Custom Fading Duration**: Users can specify how many minutes the fading effect should last.
- **Real-Time Countdown Timer**: Displays the time remaining in `MM:SS` format.
- **Automatic Start Date**: The fading process starts as soon as the user sets the duration.
- **Interactive Design**: Allows users to instantly see the effect.

## How It Works

1. Users input the number of minutes for the fading effect.
2. The opacity of the website decreases progressively until it becomes completely invisible.
3. The countdown timer updates in real-time to show how much time is left.

## Technologies Used

- **HTML5**: Structure and layout of the webpage.
- **CSS3**: Styling for the website, including input elements and countdown timer.
- **JavaScript (Vanilla)**: Logic for fading effect, countdown timer, and user interactivity.

## Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/Fahd-O/Website_Self-Destruct_Mechanism.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Website_Self-Destruct_Mechanism
   ```

3. Open `index.html` in your favorite web browser to test the functionality.

## File Structure

```bash
fading-website/
├── index.html             # Main HTML file
├── css/styles.css         # Styling for the website
├── css/fadeOut.css        # Styling for the fade out effect
├── images/                # Contains img used in the website
├── js/fadeOut.js          # JavaScript functionality
├── js/script.js           # JavaScript for the fade out effect
└── README.md              # Project documentation
```

## Demo

1. Open the website in your browser.
2. Choose the number of minutes you want the fading effect to last.
3. Click the **Start Fade** button to begin the effect.
4. Watch as the page fades gradually while the countdown timer shows the remaining time.

## Customization

- Modify the `maxTime` variable in `fadeOut.js` to set a different default duration.
- Customize the countdown timer's appearance by editing the `.timer-display` class in `styles.css`.

## Possible Use Cases

- As a demonstration project for learning JavaScript interactivity.
- Testing website expiration functionalities for unpaid services.
- Creating interactive user experiences with timed effects.

## Credits

Developed by [Abiola Fahad Ogunnaike](https://github.com/Fahd-O).

## License

This project is free to use.
