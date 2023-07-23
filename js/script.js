var siteName = document.getElementById("sName");
var siteUrl = document.getElementById("sUrl");
var addBtn = document.getElementById("add");
var sitsList = [];

if (localStorage.getItem("siteData" == null)) {
  sitsList = [];
} else {
  sitsList = JSON.parse(localStorage.getItem("siteData"));
  display();
}
// add data funnction
addBtn.onclick = function () {
  if (urlValidation() == true) {
    sitData = {
      siteName: siteName.value,
      sitUrl: siteUrl.value,
    };
    sitsList.push(sitData);
    localStorage.setItem("siteData", JSON.stringify(sitsList));
    display();
    reset();
  } else {
    alert("Enter avalid input like : https://www.google.com");
  }
  console.log(sitsList);
};
// URL Validation
function urlValidation() {
  var urlRegex = /^(https:\/\/)(www\.)[a-z|A-Z]+(\.com)$/;
  var urlTest = siteUrl.value;
  if (urlRegex.test(urlTest)) {
    console.log("maaatch");
    return true;
  } else {
    console.log("noo");
    return false;
  }
}
// display data funnction
function display() {
  var trs = ``;
  for (var i = 0; i < sitsList.length; i++) {
    trs += `
      <tr >
        <td>${i + 1}</td>
        <td>${sitsList[i].siteName}</td>
        <td>
          <button class="btn btn-outline-info">
          <a class="text-decoration-none " target="_blank" 
          href="${
            sitsList[i].sitUrl
          }"><i class="fa-solid fa-eye"></i> Visit </a>
          </button>
        </td>
        <td>
          <button class="btn btn-outline-danger" onclick="deleteData(${i})">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </td>
      </tr>   
    `;
  }
  document.getElementById("tBody").innerHTML = trs;
}
// delete funnction
function deleteData(index) {
  sitsList.splice(index, 1);
  localStorage.setItem("siteData", JSON.stringify(sitsList));
  display();
}
// reset funnction
function reset() {
  siteName.value = "";
  siteUrl.value = "";
}
