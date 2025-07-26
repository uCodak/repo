const menuBtn = document.getElementById('dropdownButton');
const closeBtn = document.getElementById('closeDropdownButton');
const dropdown = document.getElementById('dropdown');
const dropdownPanel = document.getElementById('dropdownPanel');
const seeButton = document.querySelector('.see-btn');
const moreValues = document.querySelector('.moreValues-one');
const moreValuesTwo = document.querySelector('.moreValues-two');
const displayBtn = document.querySelector('.display-btn');

menuBtn.addEventListener('click', () => {
    // Show overlay with fade
    dropdown.classList.remove('opacity-0', 'pointer-events-none');
    dropdown.classList.add('opacity-100', 'pointer-events-auto');

    // Slide in the panel
    dropdownPanel.classList.remove('translate-x-full');
    dropdownPanel.classList.add('translate-x-0');

    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    // Hide panel with slide-out
    dropdownPanel.classList.remove('translate-x-0');
    dropdownPanel.classList.add('translate-x-full');

    // Hide overlay with fade (after a delay to match slide)
    setTimeout(() => {
        dropdown.classList.add('opacity-0', 'pointer-events-none');
        dropdown.classList.remove('opacity-100', 'pointer-events-auto');
    }, 300);

    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});


seeButton.addEventListener('click', () => {
    if (moreValues.classList.contains('max-h-0')) {
        moreValues.classList.remove('max-h-0');
        moreValues.classList.add('max-h-screen', 'overflow-hidden');
        seeButton.textContent = 'See Less';
        moreValues.classList.remove('hidden')
    } else {
        moreValues.classList.add('max-h-0');
        moreValues.classList.remove('max-h-screen', 'overflow-hidden');
        seeButton.textContent = 'See More';
        moreValues.classList.add('hidden')
    }
});

//display-btn



const messageInput = document.getElementById("messageInput");
const count = document.getElementById("count");
const errorText = document.getElementById("errorText");
const sendBtn = document.getElementById("sendBtn");

// Update character count live
messageInput.addEventListener("input", () => {
    count.textContent = messageInput.value.length;
    if (messageInput.value.trim() !== "") {
        errorText.classList.add("hidden");
    }
});

// Handle Send Button
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();

    if (message === "") {
        errorText.classList.remove("hidden");
    } else {
        errorText.classList.add("hidden");
        //  Perform your send action here
        alert("Message sent!");
    }
});















