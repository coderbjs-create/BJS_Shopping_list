let view_spec_name_input = document.getElementById("view_spec_name_input");
let view_spec_index_input = document.getElementById("view_spec_index_input");
let view_spec_console_1 = document.getElementById("view_spec_console_1");
let view_spec_console_2 = document.getElementById("view_spec_console_2");
let view_spec_name_btn = document.getElementById("view_spec_name_btn");
let view_spec_index_btn = document.getElementById("view_spec_index_btn");
let shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];

view_spec_name_btn.onclick = function(){
    const view_spec_name_value = view_spec_name_input.value.trim().toLowerCase();
    const view_spec_name_value_input = view_spec_name_input.value;

    if(view_spec_name_value === ""){
        view_spec_console_1.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_1.textContent = "Input cannot be empty..";
        return;
    }
    else{
        const result_str = shopping_list.find(item => item == view_spec_name_value);
        const result_idx = shopping_list.indexOf(view_spec_name_value);
        
        if(result_idx >= 0){
        view_spec_console_1.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_1.textContent = `Yes, item: [${view_spec_name_value_input}] has been found at index ${result_idx + 1} in your shopping list..`;
        }
        else{
        view_spec_console_1.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_1.textContent = `No, item: [${view_spec_name_value}] has not been found in your shopping list..`;
        }
    }
}
view_spec_index_btn.onclick = function(){
    const view_spec_index_value = view_spec_index_input.value.trim();

    if(view_spec_index_value === ""){
        view_spec_console_2.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_2.textContent = "Input cannot be empty..";
        return;
    }
    const indexnum = parseInt(view_spec_index_value);

    if(isNaN(indexnum) || indexnum < 1){
        view_spec_console_2.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_2.textContent = "Input has to be positive numbers..";
    }
    const arryindex = indexnum - 1;
    if(arryindex >= 0 && arryindex < shopping_list.length){
        const foundit = shopping_list[arryindex];
        view_spec_console_2.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_2.textContent = `Yes, index number: [${indexnum}] contains: [${foundit}] in your shopping list..`;
    }
    else{
        view_spec_console_2.style.color = "rgba(8, 12, 218, 1)";
        view_spec_console_2.textContent = `No, index number: [${indexnum}] does not contain anything in your shopping list..`;
    }
}