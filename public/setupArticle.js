var data, DOMNode, query;
var requestArticle = new XMLHttpRequest();
var requestSimilar = new XMLHttpRequest();

DOMNode = document.querySelector('.container');

// Get curr article ID
query = window.location.search;
var articleID = /article=([^&]+)/.exec(
  'localhost:5000/article.html' + query
)[1];

requestArticle.open(
  'GET',
  'https://econtent.org.uk/api/v1/articles/' + articleID
);

requestArticle.onreadystatechange = function () {
  if (requestArticle.status === 200 && requestArticle.readyState === 4) {
    data = JSON.parse(requestArticle.responseText);
    var title = document.getElementById('title');

    // Get element
    var element = data.data;

    document.body.style.background = element.colour;

    var newText = document.createTextNode(element.name);
    title.appendChild(newText);

    var header = document.createElement('header');

    var newHeading = document.createElement('h2');
    newText = document.createTextNode(element.name);
    newHeading.appendChild(newText);

    header.appendChild(newHeading);

    var newPara = document.createElement('p');
    newText = document.createTextNode(element.summary);
    newPara.appendChild(newText);

    header.appendChild(newPara);
    DOMNode.appendChild(header);

    if (element.colour == '#dd186b' || element.colour == '#3f638a') {
      header.style.color = '#ffffff';
      newHeading.style.color = '#ffffff';
      newPara.style.color = '#ffffff';
    }

    var newContainer = document.createElement('div');
    newContainer.classList.add('box');

    DOMNode.appendChild(newContainer);

    var newSpan = document.createElement('span');
    newSpan.classList.add('image');
    newSpan.classList.add('featured');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', element.backgroundImage);
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

    // Set up Simliar articles query
    // Create query string
    let queryStr = 'https://econtent.org.uk/api/v1/articles?limit=6';

    let tags = element.tags;

    // Loop over removeFields and delete them from reqQuery
    tags = tags.filter((item) => item !== 'Alphabet');

    // Loop over tags and add them to the query
    tags.forEach((param) => (queryStr = queryStr.concat('&tags[in]=' + param)));

    requestSimilar.open('GET', queryStr);

    requestSimilar.send();
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
      if (articleID !== data.data[item]._id) {
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
        newAnchor.href = 'article.html?article=' + element._id;

        listItem.appendChild(newAnchor);

        var newHeading = document.createElement('h3');
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
  }
};

requestArticle.send();
