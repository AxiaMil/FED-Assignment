function UpdateCard(id)
{
  var request = new XMLHttpRequest()

  request.open('GET', 'https://api.quotable.io/random', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      var insert = document.getElementById(id);
      insert.innerHTML = "\""+data.content + "\" - " + data.author;
    } else {
      console.log('error');
    }
  }

  request.send();
}

UpdateCard("card-custom-text");
UpdateCard("card-custom-text2");