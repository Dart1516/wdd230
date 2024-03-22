let toggleMore = () => {
    let more = document.getElementById("more-content");
    let show = document.getElementById("show-more");
    if (more.style.display == "none") {
        more.style.display = "block";
        show.textContent = "Show less";
    } else {
        more.style.display = "none";
        show.textContent = "Show more";
    }
}

