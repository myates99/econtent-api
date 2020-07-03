var data, DOMNode;
var request = new XMLHttpRequest();

DOMNode = document.querySelector('.tiles');

request.open(
  'GET',
  'https://econtent.org.uk/api/v1/articles?tags[in]=Alphabet&sort=homeIndex'
);

request.onreadystatechange = function () {
  if (request.status === 200 && request.readyState === 4) {
    data = JSON.parse(request.responseText);

    // For each article create a card
    for (var item in data.data) {
      // Get element
      var element = data.data[item];

      // Create card
      var listItem = document.createElement('article');
      listItem.className = 'card';

      DOMNode.appendChild(listItem);

      var newspan = document.createElement('span');
      newspan.className = 'image';

      listItem.appendChild(newspan);

      var newImage = document.createElement('img');
      newImage.src = element.instagramLink;
      newImage.alt = '';

      newspan.appendChild(newImage);

      var newAnchor = document.createElement('a');
      // Where articles will go
      // newAnchor.href = 'generic.html';

      listItem.appendChild(newAnchor);

      var newHeading = document.createElement('h2');
      var newText = document.createTextNode(element.name);
      newHeading.appendChild(newText);

      newAnchor.appendChild(newHeading);

      var newDiv = document.createElement('div');
      var newPara = document.createElement('p');
      newText = document.createTextNode(element.summary);
      newPara.appendChild(newText);
      newDiv.appendChild(newPara);

      newAnchor.appendChild(newDiv);
    }
  }
};

request.send();
