(function () {
  const hiddenMessagesGroup1 = document.querySelectorAll(
    "[data-group='1'] .message, [data-group='1'] .button-group"
  );
  const hiddenMessagesGroup2 = document.querySelectorAll(
    "[data-group='2'] .message, [data-group='2'] .button-group"
  );
  const hiddenMessagesGroup3 = document.querySelectorAll(
    "[data-group='3'] .message, [data-group='3'] .form-group"
  );
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showChatMessages(messages) {
    function showChatMessageWithDelay(message, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          message.classList.add("is-visible");
          resolve();
        }, delay);
      });
    }

    messages.forEach((message, index) => {
      let delay = index * 2000;
      showChatMessageWithDelay(message, delay).then(() => {
        console.log(`Message ${index + 1} displayed`);
        scrollToMessages(message);
      });
    });
  }

  function scrollToMessages(message) {
    if (prefersReducedMotion) {
      message.scrollIntoView();
    } else {
      message.scrollIntoView({ behavior: "smooth" });
    }
  }

  showChatMessages(hiddenMessagesGroup1);

  document.querySelector("#iUnderstand").addEventListener("click", () => {
    document.querySelector("[data-group='1'] .button-group").classList.remove("is-visible");
    document.querySelector(".author-message.understand").classList.add("is-visible");
    showChatMessages(hiddenMessagesGroup2);
    // scrollToMessages(hiddenMessagesGroup2[0]);
  });

  document.querySelector("#beginChat").addEventListener("click", () => {
    document.querySelector("[data-group='2'] .button-group").classList.remove("is-visible");
    document.querySelector(".author-message.okay").classList.add("is-visible");
    showChatMessages(hiddenMessagesGroup3);
    // scrollToMessages(hiddenMessagesGroup3[0]);
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("js-enabled");
  });
})();
