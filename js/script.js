//線上申辦下一步
function gonext(i) {
  var sz = new Array("step1", "step2", "step4", "step5");
  for (var j = 0; j < sz.length; j++) {
    if (i == sz[j]) {
      document.getElementById(i).style.display = "block";
    } else {
      document.getElementById(sz[j]).style.display = "none";
    }
  }
}

//進度查詢下一步
function getnext(i) {
  var sz = new Array("step6", "step7");
  for (var j = 0; j < sz.length; j++) {
    if (i == sz[j]) {
      document.getElementById(i).style.display = "block";
    } else {
      document.getElementById(sz[j]).style.display = "none";
    }
  }
}

//漢堡條
$(".burger").click(function () {
  $(".menu").toggle();
});

//清除表單功能
function cleanstring() {
  document.getElementById("management").value = "";
  document.getElementById("name1").value = "";
  document.getElementById("idNumber1").value = "";
  document.getElementById("contract").value = "";
  document.getElementById("verification1").value = "";
  document.getElementById("list").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("idNumber2").value = "";
  document.getElementById("verification2").value = "";
}

//sweetAlert
document.getElementById("btnNextStep").addEventListener("click", function () {
  swal({
    title: "查詢進度中...",
    text: " ",
    timer: 3000,
    // imageUrl: "img/loading.gif",
    icon: "img/loading.gif",
    buttons: false, //remeve ok button
  }).then(function () {
    getnext("step7");
  });
});

//圖形驗證碼
document.addEventListener("DOMContentLoaded", function () {
  document.body.scrollTop; //force css repaint to ensure cssom is ready

  var timeout; //global timout variable that holds reference to timer
  var captcha = new $.Captcha({
      onFailure: function () {
          $(".wrong").show({
              duration: 30,
              done: function () {
                  var that = this;
                  clearTimeout(timeout);
                  $(this).removeClass("shake");
                  $(this).css("animation");
                  //Browser Reflow(repaint?): hacky way to ensure removal of css properties after removeclass
                  $(this).addClass("shake");
                  var time = parseFloat($(this).css("animation-duration")) * 1000;
                  timeout = setTimeout(function () {
                      $(that).removeClass("shake");
                  }, time);
              }
          });
      },
      onSuccess: function () {
          alert("CORRECT!!!");
      }
  });
  captcha.generate();
});


document.addEventListener("DOMContentLoaded", function () {
  document.body.scrollTop; //force css repaint to ensure cssom is ready

  var timeout; //global timout variable that holds reference to timer
  var captcha1 = new $.Captcha1({
      onFailure: function () {
          $(".wrong").show({
              duration: 30,
              done: function () {
                  var that = this;
                  clearTimeout(timeout);
                  $(this).removeClass("shake");
                  $(this).css("animation");
                  //Browser Reflow(repaint?): hacky way to ensure removal of css properties after removeclass
                  $(this).addClass("shake");
                  var time = parseFloat($(this).css("animation-duration")) * 1000;
                  timeout = setTimeout(function () {
                      $(that).removeClass("shake");
                  }, time);
              }
          });
      },
      onSuccess: function () {
          alert("CORRECT!!!");
      }
  });
  captcha1.generate();
});