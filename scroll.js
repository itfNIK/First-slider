document.getElementById("view1").addEventListener("click", event => {
  document.querySelector("#view2").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("view2").addEventListener("click", event => {
  document.querySelector("#view3").scrollIntoView({
  behavior: "smooth"
  });
});

document.getElementById("hr-view1").addEventListener("click", event => {
  document.querySelector("#hr-view2").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("hr-view2").addEventListener("click", event => {
  document.querySelector("#hr-view3").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("hr-view3").addEventListener("click", event => {
  document.querySelector("#hr-view1").scrollIntoView({
    behavior: "smooth"
  });
});



