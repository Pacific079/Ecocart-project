

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// contact form 

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("loginModal");
const mainContent = document.getElementById("mainContent");

openModalBtn.onclick = () => {
  modal.style.display = "flex";
  mainContent.classList.add("blurred");
  
};

closeModalBtn.onclick = () => {
  modal.style.display = "none";
  mainContent.classList.remove("blurred");
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    mainContent.classList.remove("blurred");
  }
};



  


// subscribe form 

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var form = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbxARF6jSvhrSwv2nTp1Ty94Xod7ZrUyexaPSqw6CHoGe8OdFEeccBe4yGiV56IbvFEC/exec', {
    method: 'POST',
    body: form
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      alert("Thank you for your message!");
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error sending your message.");
  });
});



function checkProduct() {
  const link = document.getElementById("productLink").value;
  const previewBox = document.getElementById("previewBox");
  const productTitle = document.getElementById("productTitle");
  const carbonScore = document.getElementById("carbonScore");
  const productPrice = document.getElementById("productPrice");

  if (link.includes("amazon")) {
    productTitle.innerText = "Amazon Dummy Product";
  } else if (link.includes("flipkart")) {
    productTitle.innerText = "Flipkart Dummy Product";
  } else {
    alert("Please enter a valid Amazon or Flipkart link.");
    return;
  }

  carbonScore.innerText = (Math.random()).toFixed(2);
  productPrice.innerText = Math.floor(Math.random() * 50) + 1;

  previewBox.style.display = "block";
}





















// check box 

const accessToken = 'N7CGKY5VJSVK7MMUOGIXUFJKIH7HU2AD';  // Your Wit.ai Client Access Token

// Function to send user message to Wit.ai API and get response
async function getWitResponse(userMessage) {
    const response = await fetch(`https://api.wit.ai/message?v=20200513&q=${encodeURIComponent(userMessage)}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    });

    const data = await response.json();
    return data;
}

// Function to display messages in chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    if (sender === 'bot') {
        messageDiv.classList.add('bot-message');
    } else {
        messageDiv.classList.add('user-message');
    }

    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle user input and send to Wit.ai
async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage === '') return;  // Don't send empty messages

    displayMessage(userMessage, 'user'); // Show user's message
    userInput.value = ''; // Clear input

    try {
        const witResponse = await getWitResponse(userMessage);
        const botReply = witResponse?.text || "Sorry, I didn't understand that.";
        displayMessage(botReply, 'bot'); // Show bot's reply
    } catch (error) {
        console.error('Wit.ai error:', error);
        displayMessage("There was an error talking to the bot.", 'bot');
    }
}

// Toggle chatbox visibility
document.getElementById('chat-btn').onclick = function () {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex';
    } else {
        chatbox.style.display = 'none';
    }
};
