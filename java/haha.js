function slider(e) {
    document.querySelector(".shota").src = e
  }
  var Name = prompt("Anong pangalan mo sis? HAHAHA");
  
  if(Name =="" || Name == null){
    alert ("Please enter your name.");
    prompt ('Anong pangalan mo sis?')
  } else {
    alert ("Hi " + Name + ", Good Morning/Good Afternoon/Good Evening basta magandang araw kung anong oras mo man to binuksan");
  }
  let age = prompt('Ilang months na tayo?')
  switch (true) {
    case age > 18:
      alert('hala ang advance mo naman😔')
      alert('ulitin mo ilagay mo ilagay mo ang tama😠 HAHAHAHHA')
      break
      case age < 18:
        alert('sino ba shota mo at mali ang sagot mo😔HAHAHAHA')
        alert('ulitin mo to isagot mo ang tama HAHAHAHAHA')
        break
        default:
        alert('Happy monthsary My'  + Name  )
   }