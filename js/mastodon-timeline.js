document.addEventListener("DOMContentLoaded", () => {
    b = document.getElementById("rss-container");
    count = 3;
    createdAtLeast = new Date().getTime() - 24*60*60*1000 * 7 * 4.5;
    fetch("https://mas.to/@breed.rss", { method: 'get' })
        .then(rsp => rsp.text())
        .then(text => new window.DOMParser().parseFromString(text, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            items.forEach(el => {
                cat = el.querySelectorAll("category");
                if (count && cat) {
                    cat.forEach(c => {
                        if (c.textContent === "sjsu") {
                            link = el.querySelector("link").innerHTML;
                            pubDate = new Date(el.querySelector("pubDate").innerHTML);
                            if (pubDate.getTime() > createdAtLeast) {
                                pubDate = pubDate.toLocaleDateString('en-us', {year:'numeric', month:'short', day:'numeric', hour:'numeric', minute:'numeric'});
                                description = el.querySelector("description").textContent;
                                b.insertAdjacentHTML('beforeend', `
                                    <article>
                                      <div style="font-weight:bold">Posted <a href=${link}>${pubDate}</a></div>
                                      ${description}
                                      <hr/>
                                `);
                                count--;
                            }
                        }
                    });
                }
              });
  });
});
