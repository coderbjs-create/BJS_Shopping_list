let view_all_result = document.getElementById("view_all_result");
let show_view_all_result = document.getElementById("show_view_all_result");
let shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];

show_view_all_result.onclick = function(){
    view_all_result.innerHTML = "";

    if(shopping_list.length === 0){
        view_all_result.style.color = "rgba(218, 75, 8, 1)";
        view_all_result.textContent = "There is nothing in the shopping list..";
        return;
    }

    const ol = document.createElement("ol");
    ol.style.textAlign = "left";

    shopping_list.forEach((item, index) =>{
        const li = document.createElement("li");
        li.style.color = "rgba(200, 255, 0, 1)";
        li.textContent = `${index + 1}. ${item}`;
        ol.appendChild(li);
    });
    view_all_result.appendChild(ol);
}