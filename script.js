var footer_button = document.querySelector(".footer_button")
var overlay =  document.querySelector(".overlay")
var popup_form = document.querySelector(".popup_form")

footer_button.addEventListener("click", function(){
    overlay.style.display = "block";
    popup_form.style.display = "block";
});
// ----------------------------------------------------------------------
// form tag la irukurathu nala  buttons click panna defualt aha refresh aagum so atha prevent aha 


var cancel_popup = document.getElementById("cancel_popup")

cancel_popup.addEventListener("click",function(){
    event.preventDefault()
    overlay.style.display = "none";
    popup_form.style.display = "none";
})

// ---------------------------------------------------------------------------

// add details

var main_container = document.querySelector(".main_container")

var dish_name_input = document.getElementById("dish_name_input")
var ingredient_input = document.getElementById("ingredient_input")
var cooking_step_textrea = document.getElementById("cooking_step_textrea")
var add_popup = document.getElementById("add_popup")

    
add_popup.addEventListener("click",function(){
    event.preventDefault()
 
    var div = document.createElement("div")
    div.setAttribute("class","container_one")
    
    div.innerHTML=`<h1>${dish_name_input.value}</h1>
                <p>${ingredient_input.value}</p>
                <P>${cooking_step_textrea.value}</p>

             <div class="delete_container">
             <button onclick="delete_recipe(event)">delete</button>
           </div>
    `

    main_container.append(div)

    dish_name_input.value = ""
    ingredient_input.value = ""
    cooking_step_textrea.value = ""

    overlay.style.display = "none";
    popup_form.style.display = "none";
})

function delete_recipe(event){
    event.target.parentElement.parentElement.remove()
}