let del_spec_body_1 = document.getElementById("del_spec_body_1");
let del_spec_body_2 = document.getElementById("del_spec_body_2");
let del_spec_body_real = document.getElementById("del_spec_body_real");
let del_spec_name_input = document.getElementById("del_spec_name_input");
let del_spec_index_input = document.getElementById("del_spec_index_input");
let del_spec_console_1 = document.getElementById("del_spec_console_1");
let del_spec_console_2 = document.getElementById("del_spec_console_2");
let del_spec_name_btn = document.getElementById("del_spec_name_btn");
let del_spec_index_btn = document.getElementById("del_spec_index_btn");
let del_spec_dialog_1 = document.getElementById("del_spec_sure_1");
let del_spec_dialog_2 = document.getElementById("del_spec_sure_2");
let del_spec_yes_1 = document.getElementById("del_spec_yes_1");
let del_spec_no_1 = document.getElementById("del_spec_no_1");
let del_spec_close_1 = document.getElementById("del_spec_close_1");
let del_spec_yes_2 = document.getElementById("del_spec_yes_2");
let del_spec_no_2 = document.getElementById("del_spec_no_2");
let del_spec_close_2 = document.getElementById("del_spec_close_2");
let indextodel;
let shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];

del_spec_name_btn.onclick = function(){
    const del_spec_name_value = del_spec_name_input.value.trim().toLowerCase();
    const del_spec_name_value_input = del_spec_name_input.value;

    if(del_spec_name_value === ""){
        del_spec_console_1.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_1.textContent = "Input cannot be empty..";
        return;
    }
    else{
        const result_str = shopping_list.find(item => item == del_spec_name_value);
        const result_idx = shopping_list.indexOf(del_spec_name_value);
        
        if(result_idx >= 0){
        del_spec_console_1.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_1.textContent = `Yes, item: [${del_spec_name_value_input}] has been found at index ${result_idx + 1} in your shopping list..`;
        del_spec_dialog_1.showModal()

        indextodel = result_idx;

        del_spec_body_real.style.backgroundImage = "linear-gradient(to right, rgba(15, 15, 15, 1), rgba(65, 56, 56, 1))";
        del_spec_body_1.style.backgroundImage = "linear-gradient(to left, rgba(63, 87, 77, 1), rgba(255, 255, 255, 1))";
        del_spec_body_2.style.backgroundImage = "linear-gradient(to left, rgba(63, 87, 77, 1), rgba(255, 255, 255, 1))";
        }
        else{
        del_spec_console_1.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_1.textContent = `No, item: [${del_spec_name_value}] has not been found in your shopping list..`;
        }
    }
}
del_spec_yes_1.onclick = function(){
    shopping_list.splice(indextodel, 1);
    localStorage.setItem('shopping_list', JSON.stringify(shopping_list));

    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";

    del_spec_dialog_1.close();
    del_spec_name_input.value = "";
    del_spec_console_1.textContent = "Item deleted successfully!";
}
del_spec_no_1.onclick = function(){
    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
}
del_spec_close_1.onclick = function(){
    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
}
del_spec_index_btn.onclick = function(){
    const del_spec_index_value = del_spec_index_input.value.trim();

    if(del_spec_index_value === ""){
        del_spec_console_2.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_2.textContent = "Input cannot be empty..";
        return;
    }
    const indexnum = parseInt(del_spec_index_value);

    if(isNaN(indexnum) || indexnum < 1){
        del_spec_console_2.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_2.textContent = "Input has to be positive numbers..";
    }
    const arryindex = indexnum - 1;
    if(arryindex >= 0 && arryindex < shopping_list.length){
        const foundit = shopping_list[arryindex];
        del_spec_console_2.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_2.textContent = `Yes, index number: [${indexnum}] contains: [${foundit}] in your shopping list..`;

        indextodel = arryindex;

        del_spec_body_real.style.backgroundImage = "linear-gradient(to right, rgba(15, 15, 15, 1), rgba(65, 56, 56, 1))";
        del_spec_body_1.style.backgroundImage = "linear-gradient(to left, rgba(63, 87, 77, 1), rgba(255, 255, 255, 1))";
        del_spec_body_2.style.backgroundImage = "linear-gradient(to left, rgba(63, 87, 77, 1), rgba(255, 255, 255, 1))";
        del_spec_dialog_2.showModal();
    }
    else{
        del_spec_console_2.style.color = "rgba(245, 1, 1, 1)";
        del_spec_console_2.textContent = `No, index number: [${indexnum}] does not contain anything in your shopping list..`;
    }
}
del_spec_yes_2.onclick = function(){
    shopping_list.splice(indextodel, 1);
    localStorage.setItem('shopping_list', JSON.stringify(shopping_list));

    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";

    del_spec_dialog_1.close();
    del_spec_name_input.value = "";
    del_spec_console_2.textContent = "Item deleted successfully!";
}
del_spec_no_2.onclick = function(){
    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
}
del_spec_close_2.onclick = function(){
    del_spec_body_real.style.backgroundImage = "linear-gradient(to left, darkgreen, green, rgb(0, 255, 0), greenyellow)";
    del_spec_body_1.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
    del_spec_body_2.style.backgroundImage = "linear-gradient(to right, rgb(5, 153, 190), rgb(5, 53, 209))";
}