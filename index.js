function addingEventListener(){
input.addEventListener('click', function() {
  alert('I was clicked!');
  input.addEventListener('click'); 
}); 
}