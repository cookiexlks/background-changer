javascript:// Define the cursor style options
const cursorOptions = {
  text: 'Text cursor',
  notAllowed: 'Not allowed cursor',
  progress: 'Progress cursor (spinning wheel)',
  wait: 'Wait cursor (hourglass)',
  help: 'Help cursor (question mark)',
  custom: 'Custom cursor image',
};

// Prompt the user to choose a cursor style
const choice = prompt('Choose a cursor style:\n\n' +
  Object.values(cursorOptions).join('\n') + '\n\n' +
  'Enter the corresponding number for your choice.');

let cursorStyle;

// Set the cursor style based on the user's choice
switch (choice) {
  case '1':
    cursorStyle = 'text';
    break;
  case '2':
    cursorStyle = 'not-allowed';
    break;
  case '3':
    cursorStyle = 'progress';
    break;
  case '4':
    cursorStyle = 'wait';
    break;
  case '5':
    cursorStyle = 'help';
    break;
  case '6':
    cursorStyle = 'url(\'https://example.com/cursor.png\'), auto';
    break;
  default:
    alert('Invalid choice. Please try again.');
    return;
}

const cursorCSS = `
  cursor: ${cursorStyle};
`;

const style = document.createElement('style');
style.innerText = cursorCSS;
document.head.appendChild(style);
