function validForm(){
    var name = document.forms["RegForm"]["Name"];
    var chk = document.forms["RegForm"]["chkbox"];
    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (chk.value == "") { 
        window.alert("Please check the checkbox"); 
        address.focus(); 
        return false; 
    } 
}