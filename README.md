# Typing Speed Test

This is a simple web application for testing your typing speed. You will be presented with a random quote, and your goal is to type it as quickly and accurately as possible. This README provides an overview of the key components and functionality of the application.

## Getting Started

To use this typing speed test application, follow these steps:

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser.

3. You will see a text input field, a timer, and a "Start Test" button.

## Application Components

### 1. Random Quote API Integration

The application fetches a random quote from the [Quotable API](http://api.quotable.io/random) when you click the "Start Test" button. The fetched quote is then displayed on the screen for you to type.

### 2. Typing Test

- The quote to be typed is displayed in a text box.
- As you type, the characters in the quote will change color to indicate correctness: 
  - Correctly typed characters turn green.
  - Incorrectly typed characters turn red.
  
- If you make a mistake, the application will continue to track your progress until you complete the quote correctly.

### 3. Timer

- A timer starts when you click the "Start Test" button.
- The timer counts down from the specified test duration (default is 60 seconds).
- It displays the remaining time in seconds.

### 4. Results

- Once you complete the quote within the allotted time, your typing speed is calculated and displayed.
- Your typing speed is measured in Words Per Minute (WPM), and it is based on the number of words in the quote and the time taken to complete it.
- The results card shows your WPM.

## How to Use

1. Click the "Start Test" button to begin the typing test.

2. Type the displayed quote as quickly and accurately as possible.

3. If you finish typing the quote correctly before the timer runs out, your WPM score will be calculated and displayed.

4. Review your results and practice to improve your typing speed!

## Customization

You can customize the duration of the typing test by changing the value in the "Test Duration" input field. By default, the test lasts for 60 seconds.

## Dependencies

This application uses JavaScript and HTML to create a simple typing speed test. It makes use of the Quotable API to fetch random quotes for typing practice.

## Credits

- The Quotable API: [http://api.quotable.io/random](http://api.quotable.io/random)

## Author

This application was created by Abdul Rauf.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Enjoy improving your typing speed!
