var tall=0, grande=0, venti=0, price=0;

function getPrice() {

   var selectWhey = document.getElementsByName("wheys");

   if (selectWhey[0].checked) {
      tall = 96;
      grande = 109;
      venti = 128;
   }
   
   else if (selectWhey[1].checked) {
      tall = 105;
      grande = 130;
      venti = 156;
   }
   else if (selectWhey[2].checked) {
      tall = 196;
      grande = 233;
      venti = 248;
   }

   else if (selectWhey[3].checked) {
      tall = 222;
      grande = 260;
      venti = 275;
   }

   else if (selectWhey[4].checked) {
      tall = 206;
      grande = 232;
      venti = 258;
   }

   document.getElementById("priceS").value = tall;
   document.getElementById("priceM").value = grande;
   document.getElementById("priceL").value = venti;
 }

 function computePrice(quantity) {
   
   quantity = document.getElementById("noOrder").value;

   if (document.getElementById("selectSmall").checked) {
      price = tall * quantity;
   }

   else if (document.getElementById("selecMedium").checked) {
      price = grande * quantity;
   }

   else if (document.getElementById("selectLarge").checked) {
      price = venti * quantity;
   }

   document.getElementById("priceOfCoffee").value=price;

 }

function result(change=0,payment)
{
   payment=document.getElementById("payment").value;
      
   if (payment>=price){
      change=payment-price;
		document.getElementById('change').value = change;
   }
   else if (payment<price) {
      alert("Insufficient Amount");
   }
		
}