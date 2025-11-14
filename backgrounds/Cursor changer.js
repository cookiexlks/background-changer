// Define the cursor style options
const cursorOptions = [
  { label: 'Text cursor', value: 'text' },
  { label: 'Not allowed cursor', value: 'not-allowed' },
  { label: 'Progress cursor (spinning wheel)', value: 'progress' },
  { label: 'Wait cursor (hourglass)', value: 'wait' },
  { label: 'Help cursor (question mark)', value: 'help' },
  { label: 'Custom cursor image', value: 'custom' },
];

// Create an input field for user selection
const input = document.createElement('input');
input.type = 'number';
input.min = 1;
input.max = cursorOptions.length;
input.step = 1;
input.placeholder = 'Enter the number corresponding to your choice';
document.body.appendChild(input);

// Display the cursor options using an unordered list
const list = document.createElement('ul');
cursorOptions.forEach((option) => {
  const item = document.createElement('li');
  item.textContent = `${option.label} (${option.value})`;
  list.appendChild(item);
});
document.body.appendChild(list);

// Add an event listener for the input field
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const choice = cursorOptions[input.value - 1];
    if (choice) {
      let cursorStyle;
      if (choice.value === 'custom') {
        cursorStyle = 'url(\'https://example.com/cursor.png\'), auto';
      } else {
        cursorStyle = choice.value;
      }

      const cursorCSS = `
        cursor: ${cursorStyle};
      `;

      const style = document.createElement('style');
      style.innerText = cursorCSS;
      document.head.appendChild(style);

      // Remove the input field and list after applying the cursor style
      input.remove();
      list.remove();
    }
  }
});

