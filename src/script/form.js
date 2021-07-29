function Press(page) {
    window.location.href = page
}

function startValidation()
{
    let doc_dob = document.getElementById("dob")
    let doc_prv = document.getElementById("items")
    let doc_fname = document.getElementById("fname")
    let errorValue = false
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;}return age;}
    if (doc_prv.value == "Null"){
        errorValue = true;
        alert("Please select a Province")}
    else if(!doc_dob.value){
        errorValue = true;
        alert("Select Date of Birth ")}
    else if(!doc_fname.value){
        errorValue = true;
        alert("Input your name")}
    if (errorValue == false){
        const dob = getAge(doc_dob.value)
        if (dob < 200){Press("phase2.html")}    //phase 2
        if (dob < 39) {Press("phase3.html")}    //phase 3
        if (dob < 18) {Press("phase4.html")}    //phase 4 
    }
}