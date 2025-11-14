// Define the cursor style options
const cursorOptions = [
  { label: 'Text cursor', value: 'text' },
  { label: 'Not allowed cursor', value: 'not-allowed' },
  { label: 'Progress cursor (spinning wheel)', value: 'progress' },
  { label: 'Wait cursor (hourglass)', value: 'wait' },
  { label: 'Help cursor (question mark)', value: 'help' },
  { label: 'Custom cursor image', value: 'custom' },
];

// Create a select dropdown for user selection
const select = document.createElement('select');
select.style.width = '200px';
document.body.appendChild(select);

// Add options to the select dropdown
cursorOptions.forEach((option) => {
  const opt = document.createElement('option');
  opt.value = option.value;
  opt.textContent = option.label;
  select.appendChild(opt);
});

// Add an event listener for the select dropdown
select.addEventListener('change', (event) => {
  const choice = cursorOptions.find((option) => option.value === event.target.value);
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

    // Remove the select dropdown after applying the cursor style
    select.remove();
  }
});
