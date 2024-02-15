console.log("FrontEnd jS ishga tushdi");

function itemTemplate(item){
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button
          data-id=${item._id}"
          class="edit-me btn btn-secondary btn-sm mr-1">
          Ozgartirish
      </button>
      <button 
      data-id=${item._id}"
      class="delete-me btn btn-danger btn-sm">
      Ochirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field"); // input id ni qbul qilib oldik, yani iputni qolimizga olib berdi

document
.getElementById('create-form')
.addEventListener("submit", function(e){
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {     // serverdan bizga response kelyapti, true bolsa then
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })   
    .catch((err) => {     // server response false bolsa catch ishlayapti
          console.log("Iltimos qaytatdan harakat qiling");
    });
})

document.addEventListener("click", function(e){
    //console.log(e);
    // Delete oper
    if(e.target.classList.contains("delete-me")){
        console.log(e.target);
        if(confirm("Aniq ochirmoqchimisiz")){
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((respose) => {
                console.log(respose.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling");
            });
            //alert("yes dep javob berildi");
        } else {
           // alert("No deb javob berildi")
        }
        //alert("Siz delete tugmasini bosdingiz");
    }

      
    // edit oper
    if(e.target.classList.contains("edit-me")){
        alert("Siz edit tugmasini bosdingiz");
    }
})