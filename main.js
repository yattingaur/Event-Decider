let successbut = document.querySelector(".success");
successbut.addEventListener("click", validation);

function validation(ev) {
  ev.preventDefault();
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  var e = document.getElementById("ddlView");
  var strUser = e.options[e.selectedIndex].value;

  var strUser1 = e.options[e.selectedIndex].text;
  // console.log(strUser1);
  if (strUser == 0) {
    document.getElementById("drop").innerHTML = " ** Please Select a Event";
    // alert("Please select a Event");
    return false;
  }
  setTimeout(() => {
    document.getElementById("drop").innerHTML = "";
  }, 2000);

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the Name field";
    setTimeout(() => {
      document.getElementById("username").innerHTML = "";
    }, 2000);
    return false;
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Name length must be between 2 and 20";
    setTimeout(() => {
      document.getElementById("username").innerHTML = "";
    }, 2000);
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    setTimeout(() => {
      document.getElementById("username").innerHTML = "";
    }, 2000);
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the College name field";
    setTimeout(() => {
      document.getElementById("passwords").innerHTML = "";
    }, 2000);

    return false;
  }
  if (pass.length <= 2 || pass.length > 20) {
    document.getElementById("passwords").innerHTML =
      " ** College name must be between  2 and 20";
    setTimeout(() => {
      document.getElementById("passwords").innerHTML = "";
    }, 2000);

    return false;
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile Number field";
    setTimeout(() => {
      document.getElementById("mobileno").innerHTML = "";
    }, 2000);

    return false;
  }
  if (isNaN(mobileNumber)) {
    document.getElementById("mobileno").innerHTML =
      " ** user must write digits only not characters";
    setTimeout(() => {
      document.getElementById("mobileno").innerHTML = "";
    }, 2000);

    return false;
  }
  if (mobileNumber.length != 10) {
    document.getElementById("mobileno").innerHTML =
      " ** Mobile Number must be 10 digits only";
    setTimeout(() => {
      document.getElementById("mobileno").innerHTML = "";
    }, 2000);

    return false;
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email idx` field";
    setTimeout(() => {
      document.getElementById("emailids").innerHTML = "";
    }, 2000);

    return false;
  }
  if (emails.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** @ Invalid Position";
    setTimeout(() => {
      document.getElementById("emailids").innerHTML = "";
    }, 2000);

    return false;
  }

  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** . Invalid Email";
    setTimeout(() => {
      document.getElementById("emailids").innerHTML = "";
    }, 2000);

    return false;
  }
  let today = new Date();
  let timestamp = today.getHours() + " " + "Hr" + ":" + today.getMinutes() + " " + "Min";
  let lists = document.querySelector(".values");
  let row = document.createElement("tr");
  row.innerHTML = `<td>${user}</td>
                      <td>${pass} </td>
                      <td>${mobileNumber}</td>
                      <td>${emails}</td>
                      <td>${strUser1}</td>
                      <td>${timestamp}</td>`;

  lists.append(row);

  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("mobileNumber").value = "";
  document.getElementById("emails").value = "";
  document.getElementById("ddlView").value = "0";

  document.querySelector("#registrant_list").style.display = "block";
  document.querySelector("#register_form").style.display = "none";
}

let form_button = document.querySelector(".form_link");
form_button.addEventListener("click", () => {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#registrant_list").style.display = "none";
  document.querySelector("#register_form").style.display = "inline";
});

let list_button = document.querySelector(".list_link");
list_button.addEventListener("click", () => {
  document.querySelector("#home").style.display = "none";
  document.querySelector("#registrant_list").style.display = "inline";
  document.querySelector("#register_form").style.display = "none";
});

let home_button = document.querySelector(".home_link");
home_button.addEventListener("click", () => {
  document.querySelector("#home").style.display = "inline";
  document.querySelector("#registrant_list").style.display = "none";
  document.querySelector("#register_form").style.display = "none";
});
