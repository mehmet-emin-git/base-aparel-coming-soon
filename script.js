form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.getElementById("form");
  const email = document.getElementById("email").value;

  if (email === "" || !isValid(email)) {
    form.classList.add("error");
  } else form.classList.remove("error");
});

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
