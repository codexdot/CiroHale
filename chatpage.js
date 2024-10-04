// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Reference to the send button and input field
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');

    // Event listener for the Send button click
    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    // Allow sending messages with the Enter key
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send and display a new message
    function sendMessage() {
        // Get the input text
        const messageText = messageInput.value.trim();

        // If the message is not empty, display it
        if (messageText !== "") {
            addMessageToChat(messageText, 'sent');  // Add the sent message to the UI
            messageInput.value = "";               // Clear the input field after sending
            messageInput.focus();                  // Keep the input field in focus

            // Simulate receiving a response after a short delay
            setTimeout(() => {
                receiveMessage(`Received: ${messageText}`);
            }, 1000);
        }
    }

    // Function to display a received message
    function receiveMessage(text) {
        addMessageToChat(text, 'received');
    }

    // Function to dynamically add messages to the chat body
    function addMessageToChat(text, messageType) {
        // Reference to the chat body
        const chatBody = document.getElementById('chat-body');

        // Create a new message container
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', messageType);

        // Add message content and timestamp
        messageDiv.innerHTML = `
            <span>${text}</span>
            <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        `;

        // Append the new message to the chat body
        chatBody.appendChild(messageDiv);

        // Automatically scroll to the bottom of the chat body
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});



    function toggleSideNav(x) {
      const sidenav = document.getElementById("mySidenav");
      sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";
      x.classList.toggle("change");
    }

    function closesideNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    // Toggle between light and dark mode
    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }
    
      // Function to apply the theme based on localStorage value
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Wait until the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {

    // Function to apply the theme based on localStorage value
    function applySavedTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Call the function to apply theme when the page loads
    applySavedTheme();

    // Function to toggle theme and save the preference
    window.toggleTheme = function() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save light theme to localStorage
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save dark theme to localStorage
      }
    };
    
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const emojiButton = document.querySelector('.emoji-button');
    const attachButton = document.querySelector('.attach-button');
    const cameraButton = document.querySelector('.camera-button');
    const voiceButton = document.getElementById('voice-button');
    const fileInput = document.getElementById('file-input');
    const cameraInput = document.getElementById('camera-input');
    const messageInput = document.getElementById('message');

    let mediaRecorder;
    let audioChunks = [];

    // Emoji Button Click
    emojiButton.addEventListener('click', () => {
        alert('Open Emoji Picker'); // Placeholder - replace with emoji picker functionality
    });

    // Attach Button Click (Open File Selector)
    attachButton.addEventListener('click', () => {
        fileInput.click(); // Trigger file input click
    });

    // Handle File Selection
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`File selected: ${file.name}`);
        }
    });

    // Camera Button Click (Open Camera)
    cameraButton.addEventListener('click', () => {
        cameraInput.click(); // Trigger camera input click
    });

    // Handle Camera Image Capture
    cameraInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Photo captured: ${file.name}`);
        }
    });

    // Voice Button Click (Start/Stop Recording)
    voiceButton.addEventListener('click', () => {
        if (!mediaRecorder) {
            // Start Recording
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    voiceButton.innerHTML = "🔴"; // Change button to indicate recording
                    audioChunks = [];

                    mediaRecorder.addEventListener('dataavailable', event => {
                        audioChunks.push(event.data);
                    });

                    mediaRecorder.addEventListener('stop', () => {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);
                        audio.play(); // Play the recorded audio
                        voiceButton.innerHTML = "🎤"; // Reset button after stopping
                    });
                });
        } else {
            // Stop Recording
            mediaRecorder.stop();
            mediaRecorder = null;
        }
    });

    // Auto-resize Textarea
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = (messageInput.scrollHeight) + 'px';
    });
});