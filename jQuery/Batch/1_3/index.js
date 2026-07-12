// const data = document.querySelector("h1").innerText;

// console.log("data", data);

/* 
$(selector).action(handler)
*/

/* $(document).ready(function () {
  const data = $("h1").text();
  console.log("data", data);
}); */

$(function () {
  const data = $("h1").text();
  const data1 = $(".hello").text();
  const data2 = $("#hello2").html();
  const data3 = $("[name='mehfooz']").html();

  console.log("data", data);
  console.log("data1", data1);
  console.log("data2", data2);
  console.log("data3", data3);

  $("#btn1").click(function () {
    let value = $("#input1").val();
    console.log("input value", value);
  });
});
