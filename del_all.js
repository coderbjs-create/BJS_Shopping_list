let del_all_btn = document.getElementById("del_all_btn");
let del_all_dialog = document.getElementById("del_all_sure");
let del_all_body_real = document.getElementById("del_all_body_real");
let del_all_body = document.getElementById("del_all_body");
let del_all_yes = document.getElementById("del_all_yes");
let del_all_no = document.getElementById("del_all_no");
let del_all_close = document.getElementById("del_all_close");
let del_all_console = document.getElementById("del_all_console");
let shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];

del_all_btn.addEventListener('click', ()=> {
    del_all_body_real.style.backgroundImage = "linear-gradient(to right, rgba(15, 15, 15, 1), rgba(65, 56, 56, 1))";
    del_all_body.style.backgroundImage = "linear-gradient(to left, rgba(63, 87, 77, 1), rgba(255, 255, 255, 1))";
    del_all_dialog.showModal(); 
});
del_all_yes.onclick = function(){
    del_all_body_real.style.backgroundImage = "linear-gradient(to left, darkblue, blue, rgb(13, 163, 223), cyan)";
    del_all_body.style.backgroundImage = "linear-gradient(to right, red, orange)";
    localStorage.removeItem('shopping_list');
        del_all_console.style.color = "rgba(15, 155, 34, 1)";
    del_all_console.textContent = `Operation was a Success.`;
}
del_all_no.onclick = function(){
    del_all_body_real.style.backgroundImage = "linear-gradient(to left, darkblue, blue, rgb(13, 163, 223), cyan)";
    del_all_body.style.backgroundImage = "linear-gradient(to right, red, orange)";
    del_all_console.style.color = "rgba(15, 155, 34, 1)";
    del_all_console.textContent = `Operation was a Success.`;
}
del_all_close.onclick = function(){
    del_all_body_real.style.backgroundImage = "linear-gradient(to left, darkblue, blue, rgb(13, 163, 223), cyan)";
    del_all_body.style.backgroundImage = "linear-gradient(to right, red, orange)";
    del_all_console.style.color = "rgba(15, 155, 34, 1)";
    del_all_console.textContent = `Operation was a Success.`;
}