function validateForm() {
  var name=document.Registration Form.firstname.value;
  if(name==""|| name==){
    alert("First Name must be filled out");
    var First Name field=document.getElementaryById("firstname");
    firstNameField.focus();
    return false;
  }
  var name=document.Registration Form.lastname.value;
  if(name==""|| name==){
  alert("Last Name must be filled out");
    var Last Name field=document.getElementaryById("lastname");
    lastNameField.focus();
    return false;
  }
}
