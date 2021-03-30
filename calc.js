//function for displaying values
function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

//function for calculation
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

//function for clearing displayed values
function clean(){
    document.form.textview.value = "";
}

//function for deleting displayed values
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}