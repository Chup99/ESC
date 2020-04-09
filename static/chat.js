// import { getRainbowSDK } from "./initialize.js";

import { getRainbowSDK } from "./initialize.js";
const msgerForm = document.getElementById("inputArea");
const msgerInput = document.getElementById("input");
const msgerChat = document.getElementById("chat");
console.log("things are loaded");

// Icons made by Freepik from www.flaticon.com

let rainbowSDK = getRainbowSDK;
console.log(rainbowSDK);

const BOT_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Agent";
const PERSON_NAME = "user";
var AGENT_ACC = rainbowSDK.contacts.searchById("5e60603ad8084c29e64eb5f5");
console.log(AGENT_ACC);
var CONVO = rainbow.conversations.openConversationForContact(AGENT_ACC);
console.log("Agent connected");

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  rainbowSDK.im.sendMessageToConversation(CONVO, msgText);

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
});

let onNewMessageReceived = function(event) {
  let message = event.detail.message;
  let conversation = event.detail.conversation;

  appendMessage(BOT_NAME, BOT_IMG, "left", message);

  // Do something with the new message received
};

document.addEventListener(
  rainbowSDK.im.RAINBOW_ONNEWIMMESSAGERECEIVED,
  onNewMessageReceived
);

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

// Utils

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}
