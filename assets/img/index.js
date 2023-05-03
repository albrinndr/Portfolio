function keyupfun() {
    document.getElementById("demo3").innerHTML = "";
}

function fun() {
    if (valname()) {
        mailSend()
        return;
    }
    return false;
}

function valname() {
    var name = document.form1.name.value;
    console.log(name);
    var data = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.match(data)) {
        document.getElementById("demo3").innerHTML = "* no numbers allowed";
        return false;
    }
    return true;

}

function mailSend() {


}
