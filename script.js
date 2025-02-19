let url = "https://api.github.com/users";

fetch(url)
  .then((reference) => reference.json())
  .then((data) => {
    data.forEach((user) => {
      let container = document.getElementById("container");
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      card.classList.add('mt-3')
      card.style.boxShadow = '1px 1px 15px #222'
      container.appendChild(card);

      let img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = user.avatar_url;
      card.appendChild(img);

      let card_body = document.createElement("div");
      card_body.classList.add("card-body");
      card.appendChild(card_body);

      let card_title = document.createElement("h5");
      card_title.classList.add("card-title");
      card_body.appendChild(card_title);
      card_title.innerText = user.login;

      let card_text = document.createElement("p");
      card_text.classList.add("card-text");
      card_body.appendChild(card_text);
      card_text.innerText =
        "Some quick example text to build on the card title and make up the bulk of the card's content.";

      let btn = document.createElement("a");
      btn.classList.add("btn", "btn-primary");
      btn.href = user.html_url;
      btn.innerText = "Go somewhere";
      btn.target = '_blank'
      card_body.appendChild(btn);
    });
  })
  .catch((err) => {
    console.log(err);
  });
