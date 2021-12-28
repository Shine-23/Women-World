function validateForm() {
    let x = document.forms["LoginForm"]["lusername"].value;
    let y = document.forms["LoginForm"]["lpassword"].value;
    let a = document.forms["RegForm"]["rusername"].value;
    let b = document.forms["RegForm"]["rpassword"].value;
    let c = document.forms["RegForm"]["remail"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
    if (y == "") {
        alert("Password must be filled out");
        return false;
      }
      if (a == "") {
        alert("Username must be filled out");
        return false;
      }
      if (b == "") {
          alert("Password must be filled out");
          return false;
        }
        if (c == "") {
            alert("Email must be filled out");
            return false;
          }
  }