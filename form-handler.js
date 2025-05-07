// form-handler.js
import { database } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const form = document.getElementById("signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  try {
    await push(ref(database, 'subscribers'), {
      email: email
    });
    alert("Thank you for signing up!");
    form.reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error! Please try again.");
  }
});
