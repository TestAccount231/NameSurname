// Create the popup container element
const popupContainer = document.createElement('div');
popupContainer.style.position = 'fixed';
popupContainer.style.top = '50%';
popupContainer.style.left = '50%';
popupContainer.style.transform = 'translate(-50%, -50%)';
popupContainer.style.width = '300px';
popupContainer.style.height = '120px';
popupContainer.style.padding = '20px';
popupContainer.style.backgroundColor = '#fff';
popupContainer.style.border = '1px solid #000';
popupContainer.style.borderRadius = '10px';
popupContainer.style.zIndex = '9999';

// Create the popup content elements
const popupTitle = document.createElement('h2');
popupTitle.textContent = 'Incoming Transaction';
popupTitle.style.fontSize = '24px';
popupTitle.style.fontWeight = 'bold';
popupTitle.style.marginBottom = '10px';

const popupText = document.createElement('p');
popupText.textContent = 'Please Check US Dollar Account and Fulfill requirements !';
popupText.style.fontSize = '16px';

// Append the content elements to the container
popupContainer.appendChild(popupTitle);
popupContainer.appendChild(popupText);

// Append the container to the body
document.body.appendChild(popupContainer);

// Set a timeout to close the popup after 5 seconds
setTimeout(function() {
  popupContainer.remove();
}, 5000);