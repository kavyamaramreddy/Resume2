function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("appication/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  indexed(data.index);
});
var cards=document.querySelector(".cards");
function indexed(details) {
  for(i in details) {
var card=document.createElement("div");
card.classList.add("card");
var image=document.createElement("img");
image.src=details[i].image;
image.alt="image";
cards.appendChild(card);
card.appendChild(image);
  var name=document.createElement("h2");
  name.textContent=details[i].name;
  card.appendChild(name);
  var ooc=document.createElement("h4");
  ooc.textContent=details[i].ooc;
  card.appendChild(ooc);

  var a=document.createElement("a");
  a.href="resume.html";
  card.appendChild(a);
  var profile=document.createElement("profile");
  profile.textContent=details[i].profile;
  a.appendChild(profile);

}
}
