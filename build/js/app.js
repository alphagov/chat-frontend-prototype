(function () {
  const hiddenMessagesGroup1 = document.querySelectorAll("[data-group='1'] .message, [data-group='1'] .button-group");
  const hiddenMessagesGroup2 = document.querySelectorAll("[data-group='2'] .message, [data-group='2'] .button-group");
  const hiddenMessagesGroup3 = document.querySelectorAll("[data-group='3'] .message, [data-group='3'] .form-group");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showChatMessages(messages, groupIndex) {
    // get parent wrapper for each message group
    let messageGroup = document.querySelector(`[data-group='${groupIndex}']`);
    // let messageGroup = document.querySelector(".messages__wrapper");
    messageGroup.setAttribute("aria-busy", true);

    function showChatMessageWithDelay(message, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          message.classList.add("is-visible");
          resolve();
        }, delay);
      });
    }

    messages.forEach((message, index) => {
      let delay = (index + 1) * 500;
      setTimeout(async () => {
        await showChatMessageWithDelay(message, delay);
        scrollToMessages(message);
        if (index === messages.length - 1) {
          // messages
          //   .item(messages.length - 1)
          //   .querySelector("button")
          //   .focus();
          messageGroup.setAttribute("aria-busy", false);
        }
      }, delay);
    });
  }

  function scrollToMessages(message) {
    if (prefersReducedMotion) {
      message.scrollIntoView();
    } else {
      message.scrollIntoView({ behavior: "smooth" });
    }
  }

  showChatMessages(hiddenMessagesGroup1, 1);

  document.querySelector("#iUnderstand").addEventListener("click", () => {
    document.querySelector("[data-group='1'] .button-group").classList.remove("is-visible");
    document.querySelector(".author-message.understand").classList.add("is-visible");
    showChatMessages(hiddenMessagesGroup2, 2);
    // scrollToMessages(hiddenMessagesGroup2[0]);
  });

  document.querySelector("#beginChat").addEventListener("click", () => {
    document.querySelector("[data-group='2'] .button-group").classList.remove("is-visible");
    document.querySelector(".author-message.okay").classList.add("is-visible");
    showChatMessages(hiddenMessagesGroup3, 3);
    // scrollToMessages(hiddenMessagesGroup3[0]);
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("js-enabled");
  });
})();
