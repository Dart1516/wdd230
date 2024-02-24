
const visitDisplay = document.querySelector(".visits");

    //today Date
    const today = new Date().getTime();

    // get the last visit date
    const lastVisit = window.localStorage.getItem("lastVisit");
    let message;

    if (!lastVisit) {
      message = 'Welcome! Let us know if you have any questions.';
    } else {
      const difference = today - lastVisit;
      const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

      if (daysDifference === 0) {
        message = 'Back so soon! Awesome!';
      } else {
        message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
      }
    }

    // show the message
    visitDisplay.textContent = message;
	//store the current date
    window.localStorage.setItem("lastVisit", today);
