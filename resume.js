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
personal(data.personalDetails);
// console.log(data.personalDetails);
career(data.career);
// console.log(data.career);
education(data.education);
// console.log(data.education);
awards(data.awards);
activities(data.Activities);
});
var main=document.querySelector(".main");
function personal(details) {
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);
  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);
  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);
  var myname=document.createElement("h2");
  myname.textContent=details.myname;
  left1.appendChild(myname);
  var designation=document.createElement("h2");
  designation.textContent=details.designation;
  left1.appendChild(designation);
  var hr=document.createElement("hr");
  left1.appendChild(hr);
  var left2=document.createElement("div");
  left2.classList.add("left2");
  left.appendChild(left2);
  var fname=document.createElement("h3");
  fname.textContent=details.fname;
  left2.appendChild(fname);
var email=document.createElement("h3");
  email.textContent=details.email;
  left2.appendChild(email);
  var address=document.createElement("h3");
  address.textContent=details.address;
  left2.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function career(details)
{
  var obj=document.createElement("h2");
  obj.textContent=details.obj;
  right.appendChild(obj);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var co=document.createElement("p");
  co.textContent=details.co;
  right.appendChild(co);
}
function education(details){
  for(k in details) {
    var qualification=document.createElement("h2");
    qualification.textContent=details[k].qualification;
    right.appendChild(qualification);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var inst=document.createElement("p");
    inst.textContent=details[k].inst;
    right.appendChild(inst);
  }
}
function awards(details){
  var obj=document.createElement("h2");
  obj.textContent=details.obj;
  right.appendChild(obj);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var achievement=document.createElement("p");
  achievement.textContent=details.achievement;
  right.appendChild(achievement);
  }
function activities(details){
  var activity=document.createElement("h2");
  activity.textContent="Activities";
  right.appendChild(activity);
  for(j in details){
    var Activities=document.createElement("h2");
    Activities.textContent=details[j].Activities;
    right.appendChild(Activities);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var data=document.createElement("p");
    data.textContent=details[j].data;
    right.appendChild(data);


  }
}
