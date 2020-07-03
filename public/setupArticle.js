var data, DOMNode;
var requestArticle = new XMLHttpRequest();
var requestSimilar = new XMLHttpRequest();

DOMNode = document.querySelector('.container');

requestArticle.open(
  'GET',
  'https://econtent.org.uk/api/v1/articles/5eff28cf4802b831e446db8c'
);

requestSimilar.open(
  'GET',
  'https://econtent.org.uk/api/v1/articles?tags[in]=Energy&tags[in]=Climate-Science&limit=9'
);

requestArticle.onreadystatechange = function () {
  if (requestArticle.status === 200 && requestArticle.readyState === 4) {
    data = JSON.parse(requestArticle.responseText);

    // Get element
    var element = data.data;

    // Create card
    var header = document.createElement('header');

    DOMNode.appendChild(header);

    var newHeading = document.createElement('h2');
    var newText = document.createTextNode(element.name);
    newHeading.appendChild(newText);

    header.appendChild(newHeading);

    var newPara = document.createElement('p');
    newText = document.createTextNode(element.summary);
    newPara.appendChild(newText);

    header.appendChild(newPara);

    var newContainer = document.createElement('div');
    newContainer.classList.add('box');

    DOMNode.appendChild(newContainer);

    var newSpan = document.createElement('span');
    newSpan.classList.add('image');
    newSpan.classList.add('featured');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'images/display.jpg');
    newImg.setAttribute('alt', '');
    newSpan.appendChild(newImg);

    newContainer.appendChild(newSpan);

    for (var section in element.sections) {
      newHeading = document.createElement('h3');
      newText = document.createTextNode(element.sections[section].subheading);
      newHeading.appendChild(newText);

      newContainer.appendChild(newHeading);

      for (var para in element.sections[section].body) {
        newPara = document.createElement('p');
        newText = document.createTextNode(element.sections[section].body[para]);
        newPara.appendChild(newText);

        newContainer.appendChild(newPara);
      }
    }
  }
};

requestSimilar.onreadystatechange = function () {
  if (requestSimilar.status === 200 && requestSimilar.readyState === 4) {
    DOMNode = document.querySelector('.box');
    data = JSON.parse(requestSimilar.responseText);

    var newRule = document.createElement('hr');
    newPara = document.createElement('p');
    newHeading = document.createElement('h3');
    newText = document.createTextNode('Similar Articles');
    newHeading.appendChild(newText);

    DOMNode.appendChild(newRule);
    DOMNode.appendChild(newPara);
    DOMNode.appendChild(newHeading);

    var newSection = document.createElement('section');
    newSection.classList.add('tiles');

    DOMNode.appendChild(newSection);

    // For each article create a card
    for (var item in data.data) {
      // Get element
      var element = data.data[item];

      // Create card
      var listItem = document.createElement('article');
      listItem.className = 'card';

      newSection.appendChild(listItem);

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

requestArticle.send();
requestSimilar.send();
