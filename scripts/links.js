const baseURL = "https://dart1516.github.io/wdd230/";
const linksURL = "https://dart1516.github.io/wdd230/data/links.json";

async function obtainActivitiesInformation() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    // console.log(data.lessons); to see if is working
    showInformationOnHTML(data);
  } else {
    console.error("something wrong fetching the data, the error is:", error);
  }
}
function showInformationOnHTML(data) {
  const idFromHTML = document.querySelector("#data");
  const infoLessons = data.lessons;
  //console.log(infoLessons); to see if is working

  let whatWillBeAddedOnTheLI = "";

  infoLessons.forEach(function (infoLessons) {
    const lessonNumber = infoLessons.lesson;
    const linksFromLessons = infoLessons.links;
    //console.log(linksFromLessons); //to see if is working

    let whatWillBeAddedOnTheA = "";

    linksFromLessons.forEach(function (infoLinks) {
      const relativePath =  baseURL + infoLinks.url;
      //console.log(relativePath); //to see if is working
      const activityName = infoLinks.title;
      //console.log(activityName); //to see if is working
      whatWillBeAddedOnTheA +=  `<a href="${relativePath}">${activityName}</a> | `
      
    });
    whatWillBeAddedOnTheA = whatWillBeAddedOnTheA.slice(0,-2) // to takeout the last "| from every line"
    // console.log(whatWillBeAddedOnTheA); //to see if is working
    whatWillBeAddedOnTheLI += `<li> ${lessonNumber}: ${whatWillBeAddedOnTheA}</li>`
    
  });
  //console.log(whatWillBeAddedOnTheLI); //to see if is working
  idFromHTML.innerHTML=whatWillBeAddedOnTheLI;

}
obtainActivitiesInformation();
