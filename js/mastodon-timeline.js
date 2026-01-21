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

                                // Check for media:content image
                                let imageHtml = '';
                                const mediaContent = el.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0];
                                if (mediaContent) {
                                    const imageUrl = mediaContent.getAttribute("url");
                                    const mediaDesc = el.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "description")[0];
                                    const altText = mediaDesc ? mediaDesc.textContent : '';
                                    if (imageUrl) {
                                        imageHtml = `<img src="${imageUrl}" alt="${altText}" style="max-width:100%; margin-top:10px; border-radius:4px;">`;
                                    }
                                }

                                b.insertAdjacentHTML('beforeend', `
                                    <article>
                                      <div style="font-weight:bold">Posted <a href=${link}>${pubDate}</a></div>
                                      ${description}
                                      ${imageHtml}
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
