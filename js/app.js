// .................function delete card.................//
function deleteCard(event) {
  if (event.target.className === "delete"){
      event.target.parentElement.parentElement.remove();
        
  }
  
}


// ................function add card.......................//
function AddCard(event){
    
  event.preventDefault();

  // ........All inputs cannot empty.............//
  const inputname = document.querySelector("#name");
  if (inputname.value==="") return confirm("input name cannot empty");

  const inputsubject = document.querySelector("#subject");
  if (inputsubject.value==="") return confirm("input subject cannot empty");

  const inputscore = document.querySelector("#score");
  if (inputscore.value==="") return confirm("input score cannot empty");

  const inputFirstDate = document.querySelector("#StartId");
  if (inputFirstDate.value==="") return confirm("input FirstDate cannot empty");

  const inputLastDate = document.querySelector("#EndId");
  if (inputLastDate.value==="") return confirm("input lastDate cannot empty");

  const FormOne = document.querySelector(".listcard");
    

  // ...........find the bigger date or equal................//
  const firstDate = new Date(inputFirstDate.value);
  const lastDate = new Date(inputLastDate.value);
    
    
  if (firstDate.getTime() <= lastDate.getTime()){
    EndDate = inputLastDate.value;
    FirstDate = inputFirstDate.value;

    // ......create a new span for input name......//
    const spanName = document.createElement("span");
    spanName.classList.add("Name");
    spanName.textContent = inputname.value;
    

    // ......create a new span for input subject.......//
    const spanSubject = document.createElement("span");
    spanSubject.classList.add("Subject");
    spanSubject.textContent = inputsubject.value;

    // ......create a new span for input age.......//
    const spanScore = document.createElement("span");
    spanScore.classList.add("Score")
    spanScore.textContent = inputscore.value;

    // .........create span for bigger date...........//
    const spanLastDate = document.createElement("span");
    spanLastDate.classList.add("LastDate");
    spanLastDate.textContent =EndDate ;

    // ........create span for delete........//
    const spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent = "x";

    // .........create span for update........//
    const spanUpdate = document.createElement("span");
    spanUpdate.classList.add("Firstdate")
    spanUpdate.textContent = FirstDate;
    

    // ........create div for contain all spans.......//
    const div1 = document.createElement("div");
    div1.classList.add("student_info");

    // .......create div for contain spanupdate......//
    const div2 = document.createElement("div");
    div2.classList.add("btn_Firstdate")

    // ........create divcard for contain all divs.......//\
    const div3 = document.createElement("div");
    div3.classList.add("card")

    //......... Add all spans to div...........//

    div1.appendChild(spanName);
    div1.appendChild(spanSubject);
    div1.appendChild(spanScore);
    div1.appendChild(spanLastDate);
    div1.appendChild(spanDelete);
    div2.appendChild(spanUpdate);
    div3.appendChild(div1);
    div3.appendChild(div2);
    FormOne.appendChild(div3)

  }
  else {
    confirm("First Date must be smaller than Last Date")
  }

  //................. delete all inputs........................//
  inputname.value = "";
  inputsubject.value = "";
  inputscore.value = "";
  inputFirstDate.value = "";
  inputLastDate.value = "";

    
}


// ...............function search name input...................//
function searchName(event) {
    
  let search = document.querySelector("input");
    
  let text = search.value.toLowerCase();
  let listName = document.querySelectorAll(".card");     
  for (let list of listName){
    let Name = list.firstElementChild.firstElementChild.textContent.toLowerCase();
      
    if (Name.indexOf(text)===-1){
        
      list.style.display = "none";
    }
    else {
      list.style.display = "";
    }
  }
   
}


// // ...............function Score between min and max....................//
function SearchScore(event){
  let Min_Score = document.querySelector("#Min").value;
  let Max_Score = document.querySelector("#Max").value;
  let ListCard = document.querySelectorAll(".card");

  for (let card of ListCard){
    let values = card.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    if (parseInt(values)>=parseInt(Min_Score) && parseInt(values)<=parseInt(Max_Score)){
      card.style.display ="";
      
    }
    else{
      card.style.display = "none";
    }
    
    
  }


}



// .............create variables for hide and show button.....................//
const btnCreate = document.querySelector("#btnCreat");
const btnClose = document.querySelector("#btnClose");
const Form_One = document.querySelector(".FormOne");
const List_Card = document.querySelector(".listcard");
const Form_Two = document.querySelector(".FormTwo");
const Search_Name = document.querySelector("#Search");
const h1 = document.querySelector("h1");

// ............function for create button...........................//
btnCreate.addEventListener("click" , e => {
  btnClose.style.display = "block";
  btnCreate.style.display = "none";
  Form_One.style.display = "block";
  List_Card.style.display = "none";
  Form_Two.style.display = "none";
  Search_Name.style.display = "none";
  h1.style.display = "none";
});

// ..............function for close button........................//
btnClose.addEventListener("click" , e => {
  btnClose.style.display = "none";
  btnCreate.style.display = "block";
  List_Card.style.display = "block";
  Form_Two.style.display = "block";
  Form_One.style.display = "none";
  Search_Name.style.display = "block";
  h1.style.display = "block";
});




// ................Delete Element in List........................//
let cardList = document.querySelector(".listcard");
cardList.addEventListener("click", deleteCard);


// ................Add Element in List..........................//
let AddElement = document.querySelector(".FormOne");
AddElement.addEventListener("submit", AddCard);


// // ...............search name input..........................//
let searchNameInput = document.querySelector("#search_Name input");
searchNameInput.addEventListener("keyup", searchName);

// //............... search min and max score.....................//
let searchScoreInput = document.querySelector(".FormTwo");
searchScoreInput.addEventListener("keyup", SearchScore);













