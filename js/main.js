// Sidebar
$("#openSideBtn").on("click", () => {
  $(".openDiv").animate({ left: "250px" }, 500);
  $(".sidebar").animate({ left: "0px" }, 500);
});
$("#closeSide").on("click", () => {
  $(".openDiv").animate({ left: "0px" }, 500);
  $(".sidebar").animate({ left: "-250px" }, 500);
});

// Slider
$("#details .item h3").on("click", (e) => {
  $("#details .item p").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

// Duration
let dateOfParty = new Date("october 25, 2024 20:00:00");

function displayDuration() {
  let dateNow = new Date();
  let diff = dateOfParty - dateNow;
  let days = 1000 * 60 * 60 * 24;
  let diffDays = Math.floor(diff / days);
  let hours = (diff / days - diffDays) * 24;
  let diffHours = Math.floor(hours);
  let minutes = (hours - diffHours) * 60;
  let diffMinutes = Math.floor(minutes);
  let seconds = (minutes - diffMinutes) * 60;
  let diffSeconds = Math.floor(seconds);
  let span = $("#duration p span");
  if (diff <= 0) {
    span.eq(0).text(0);
    span.eq(1).text(0);
    span.eq(2).text(0);
    span.eq(3).text(0);
    return false;
  } else {
    span.eq(0).text(diffDays);
    span.eq(1).text(diffHours);
    span.eq(2).text(diffMinutes);
    span.eq(3).text(diffSeconds);
    return true;
  }
}
let interval = setInterval(() => {
  if (!displayDuration()) {
    clearInterval(interval);
  } else {
    displayDuration();
  }
}, 1000);

// Form  counter
let counter = $("#counter").text();
$("#messageArea").keyup(() => {
  let x = $("#messageArea").val().length;
  let remain = counter - x;
  if (remain <= 0) {
    $("#counter").text("your available character finished");
  } else {
    $("#counter").text(remain);
  }
});

// Form validation
let nameInput = $("#nameInput");
let nameAlert = $("#nameAlert");
nameInput.on("change", validName);
function validName() {
  var regex = /^[a-zA-Z]{2,}$/;
  if (regex.test(nameInput.val())) {
    nameInput.addClass("is-valid");
    nameInput.removeClass("is-invalid");
    nameAlert.addClass("d-none");
    return true;
  } else {
    nameInput.addClass("is-invalid");
    nameInput.removeClass("is-valid");
    nameAlert.removeClass("d-none");
    return false;
  }
}
let emailInput = $("#emailInput");
let emailAlert = $("#emailAlert");
emailInput.on("change", validEmail);
function validEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInput.val())) {
    emailInput.addClass("is-valid");
    emailInput.removeClass("is-invalid");
    emailAlert.addClass("d-none");
    return true;
  } else {
    emailInput.addClass("is-invalid");
    emailInput.removeClass("is-valid");
    emailAlert.removeClass("d-none");
    return false;
  }
}

// scroll
$(".sidebar li a").on("click", (e) => {
  let selected = $(e.target).attr("href");
  let offset = $(selected).offset().top;
  $("html, body").animate({ scrollTop: offset }, 1500);
});
