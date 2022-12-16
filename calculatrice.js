const blackboard = document.querySelector("#board");
let content = blackboard.innerHTML.toString();
const touchClick = document.querySelectorAll("button");

touchClick.forEach((item) => {
  item.onclick = () => {
   if (item.id=="stompall"){
     blackboard.innerHTML = "";
     //test
     
   } else if(item.id=="back" && blackboard.innerHTML != " " ){
       blackboard.innerHTML = console.log(content.pop());
     //test
     
   }else if(  item.id=="eatall"  && blackboard.innerHTML != " ") {
        blackboard.innerHTML = eval (blackboard.innerHTML);
      //test
     
   } else { blackboard.innerHTML += item.id ;}
  };
});