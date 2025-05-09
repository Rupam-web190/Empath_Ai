// Initialize speech synthesis
const synth = window.speechSynthesis;
// Emotion responses with expanded emoji sets
const emotionResponses = {
    happy: [
        "I'm so glad you're feeling happy! 😊 Your positive energy is contagious! Would you like to share what's making you feel this way?",
        "That's wonderful to hear! 🌟 Happiness is such a beautiful emotion. Let's celebrate this moment together!",
        "Your joy brightens my day! ✨ Remember, these happy moments are precious. What's bringing you this happiness?"
    ],
    sad: [
        "I'm here for you during this difficult time. 😢 Would you like to talk about what's making you feel sad? I'm ready to listen.",
        "It's okay to feel sad sometimes. 💙 Your feelings are valid, and I'm here to support you. Would you like to share more?",
        "I understand this is tough. 🤗 Remember, it's okay to not be okay. I'm here to listen whenever you're ready to talk."
    ],
    angry: [
        "I understand you're feeling angry, and that's completely valid. 😠 Would you like to talk about what happened? I'm here to listen.",
        "It's natural to feel angry sometimes. 💪 Let's work through this together. What's making you feel this way?",
        "Your feelings are important. 🎯 Would you like to share what's causing this anger? I'm here to support you."
    ],
    anxious: [
        "I notice you're feeling anxious. 😰 Let's take some deep breaths together. Would you like to talk about what's worrying you?",
        "It's okay to feel anxious. 🌸 I'm here to help you through this. What's on your mind?",
        "Let's focus on the present moment. 🧘‍♀️ Take a deep breath with me. What's causing this anxiety?"
    ],
    love: [
        "It's beautiful to see you experiencing love! ❤️ Would you like to share what's bringing you this feeling?",
        "Love is such a powerful emotion! 💖 Your capacity for love is truly special. What's making you feel this way?",
        "Your heart is full of love! 💝 That's wonderful to hear. Would you like to talk about it?"
    ],
    tired: [
        "I understand you're feeling tired. 😴 Remember to take care of yourself. Would you like to talk about what's draining your energy?",
        "It's important to rest when you need it. 💤 How can I help you feel better?",
        "Take it easy, and remember to prioritize self-care. 🌙 What's making you feel this way?"
    ],
    confused: [
        "I see you're feeling confused. 🤔 Let's try to figure this out together. What's on your mind?",
        "It's okay to feel uncertain sometimes. 💭 Would you like to talk about what's confusing you?",
        "Let's break this down step by step. 🎯 What's making you feel confused?"
    ],
    excited: [
        "That's exciting! 🎉 Tell me more about what's got you so excited!",
        "Your enthusiasm is contagious! ✨ I'd love to hear more about what's making you feel this way!",
        "This is wonderful! 🎊 Let's celebrate together! What's bringing you this excitement?"
    ],
    grateful: [
        "Gratitude is such a beautiful feeling! 🙏 Would you like to share what you're grateful for?",
        "Your appreciation makes the world better! 🌍 What's bringing you this sense of gratitude?",
        "It's wonderful to see you feeling grateful! 💫 What's making you feel this way?"
    ],
    hopeful: [
        "Hope is a powerful emotion! 🌅 What's giving you this sense of hope?",
        "Your optimism is inspiring! ✨ Would you like to share what's making you feel hopeful?",
        "The future looks bright! 🌞 What's bringing you this hope?"
    ]
};
// Expanded emoji to emotion mapping
const emojiToEmotion = {
    // Happy emojis
    '😊': 'happy', '😄': 'happy', '😃': 'happy', '😀': 'happy', '😁': 'happy', '🥰': 'happy', '😋': 'happy', '😎': 'happy', '🤩': 'happy', '🥳': 'happy',
    '😌': 'happy', '😉': 'happy', '😏': 'happy', '😇': 'happy', '🤗': 'happy', '🤫': 'happy', '🤭': 'happy', '🤐': 'happy', '🤨': 'happy', '😐': 'happy',
    
    // Sad emojis
    '😢': 'sad', '😭': 'sad', '😔': 'sad', '😞': 'sad', '🥺': 'sad', '😥': 'sad', '😪': 'sad', '😓': 'sad', '😩': 'sad', '😫': 'sad',
    '😕': 'sad', '😟': 'sad', '🙁': 'sad', '☹️': 'sad', '😮': 'sad', '😯': 'sad', '😲': 'sad', '😳': 'sad', '🥺': 'sad', '🥹': 'sad',
    
    // Angry emojis
    '😠': 'angry', '😡': 'angry', '🤬': 'angry', '😤': 'angry', '😾': 'angry',
    '😦': 'angry', '😧': 'angry', '😨': 'angry', '😰': 'angry', '😥': 'angry',
    
    // Anxious emojis
    '😰': 'anxious', '😨': 'anxious', '😱': 'anxious', '😥': 'anxious', '😓': 'anxious',
    '😶': 'anxious', '😐': 'anxious', '😑': 'anxious', '😬': 'anxious', '🙄': 'anxious',
    
    // Love emojis
    '❤️': 'love', '💖': 'love', '💝': 'love', '💕': 'love', '💗': 'love',
    '💓': 'love', '💘': 'love', '💞': 'love', '💟': 'love', '💌': 'love',
    
    // Tired emojis
    '😴': 'tired', '😪': 'tired', '😫': 'tired', '😩': 'tired', '🥱': 'tired',
    '😵': 'tired', '🤐': 'tired', '🥴': 'tired', '😵‍💫': 'tired', '🤠': 'tired',
    
    // Confused emojis
    '🤔': 'confused', '😕': 'confused', '😟': 'confused', '😖': 'confused', '😵': 'confused',
    '🥸': 'confused', '😎': 'confused', '🤓': 'confused', '🧐': 'confused', '😕': 'confused',
    
    // Excited emojis
    '🎉': 'excited', '✨': 'excited', '🌟': 'excited', '🎊': 'excited', '🎆': 'excited',
    '🤗': 'excited', '🤔': 'excited', '🤭': 'excited', '🤫': 'excited', '🤥': 'excited',
    
    // Grateful emojis
    '🙏': 'grateful', '💫': 'grateful', '✨': 'grateful', '🌟': 'grateful', '💝': 'grateful',
    '😶': 'grateful', '😐': 'grateful', '😑': 'grateful', '😬': 'grateful', '🙄': 'grateful',
    
    // Hopeful emojis
    '🌅': 'hopeful', '✨': 'hopeful', '🌟': 'hopeful', '🌈': 'hopeful', '🌞': 'hopeful',
    '😯': 'hopeful', '😦': 'hopeful', '😧': 'hopeful', '😮': 'hopeful', '😲': 'hopeful'
};

// Initialize the chat when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.querySelector('.chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.querySelector('.send-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const emojiRow = document.querySelector('.emoji-row');
    const leftScroll = document.querySelector('.left-scroll');
    const rightScroll = document.querySelector('.right-scroll');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Add initial bot message
    addBotMessage("Hello! I'm EmpathAI, your friendly mental health companion. How are you feeling today? 😊 I'm here to listen and support you.");

    // Emoji category switching
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            showEmojiCategory(category);
        });
    });

    // Emoji scrolling
    leftScroll.addEventListener('click', () => {
        emojiRow.scrollBy({ left: -100, behavior: 'smooth' });
    });

    rightScroll.addEventListener('click', () => {
        emojiRow.scrollBy({ left: 100, behavior: 'smooth' });
    });

    // Auto-resize textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto';
        userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
    });

    // Send message when button is clicked
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            sendMessage(message);
            userInput.value = '';
            userInput.style.height = 'auto';
        }
    });

    // Send message when Enter is pressed
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const message = userInput.value.trim();
            if (message) {
                sendMessage(message);
                userInput.value = '';
                userInput.style.height = 'auto';
            }
        }
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        localStorage.setItem('lightMode', document.body.classList.contains('light-mode'));
    });

    // Load saved theme preference
    if (localStorage.getItem('lightMode') === 'true') {
        document.body.classList.add('light-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
});

// Function to add emoji to input
function addEmoji(emoji) {
    const userInput = document.getElementById('user-input');
    userInput.value += emoji;
    userInput.focus();
}

// Function to send message
function sendMessage(message) {
    addUserMessage(message);
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        const response = getBotResponse(message);
        addBotMessage(response);
        speakText(response);
    }, 1000);
}

// Function to add user message
function addUserMessage(message) {
    const chatBox = document.querySelector('.chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to add bot message
function addBotMessage(message) {
    const chatBox = document.querySelector('.chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'bot');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to show typing indicator
function showTypingIndicator() {
    const chatBox = document.querySelector('.chat-box');
    const indicator = document.createElement('div');
    indicator.classList.add('typing-indicator');
    indicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatBox.appendChild(indicator);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to remove typing indicator
function removeTypingIndicator() {
    const indicator = document.querySelector('.typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Function to get bot response
function getBotResponse(message) {
    // Check for emojis in the message
    for (const [emoji, emotion] of Object.entries(emojiToEmotion)) {
        if (message.includes(emoji)) {
            const responses = emotionResponses[emotion];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Check for emotion keywords in the message
    const lowerMessage = message.toLowerCase();
    for (const [emotion, responses] of Object.entries(emotionResponses)) {
        if (lowerMessage.includes(emotion)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Default response if no emotion is detected
    return "I'm here to listen and support you. How are you feeling? 🤗 Would you like to share more about what's on your mind?";
}

// Function to speak text
function speakText(text) {
    const cleanText = text.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    synth.speak(utterance);
}

function showEmojiCategory(category) {
    const emojiCategories = document.querySelectorAll('.emoji-category');
    emojiCategories.forEach(cat => {
        if (cat.dataset.category === category) {
            cat.style.display = 'flex';
        } else {
            cat.style.display = 'none';
        }
    });
}
