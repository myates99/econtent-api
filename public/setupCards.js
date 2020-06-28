var data, DOMNode;
var request = new XMLHttpRequest();

DOMNode = document.querySelector('.tiles');

data = [
  {
    id: '5d713995b721c3bb38c1f5d0',
    createdBy: '5d7a514b5d2c12c7449be042',
    name: 'net Zero',
    summary:
      'An entity is said to be net Zero when their emmited emissions are equivilent to ones taken out of the environment.',
    instagramLink:
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/94225878_130785248555914_7891359585973671953_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=3gyyW0WVjEMAX8AoTdM&oh=6aab55b89d40b03e1b5661cb029f2c18&oe=5F1ACE6F',
    paragraphs: [
      [
        'What can you do?',
        'One way of reducing your carbon footprint would be to swap to renewable energy companies.'
      ]
    ],
    refrences: [
      [
        'Net Zero and the different measures of UKs greenhouse gas emissions',
        'Office for National Statistics'
      ],
      [
        'Reducing UK emissions: 2019 progress report to parliament',
        'Committee on Cimate Change'
      ]
    ]
  },
  {
    id: '5d713a66ec8f2b88b8f830b8',
    createdBy: '5d7a514b5d2c12c7449be042',
    name: 'Yearly Warming',
    summary:
      'Tempreatures have risen since the mid-1800s (the industrial revoloution).',
    instagramLink:
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/95264046_838782103294298_1597733386697505561_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=-_pS1jM8pPYAX9t-2y-&oh=0650b1bcd49c1ff400f2c0dc70b3eb17&oe=5F1D39D2',
    paragraph: [
      [
        'Why is this significant?',
        [
          "To heat oceans, land masses and the atmosphere by a degree, enormous amounts of heat are required. Although, small fluctuations in global temperatures can have dire concequences. For example, a decrease of 1-2'C previously caused a 'Little Ice Age' in the UK.",
          'These fluctuations are caused by a number of things such as;',
          ' - Time of day and season',
          ' - Changes in reflectivity of the Earths surface (see card G for more)',
          ' - Changes in greenhouse gas levels in the atmosphere'
        ],
        'How can I help?',
        ['Para 1...', 'Para 2...']
      ]
    ],
    refrences: [
      [
        'UK gov climate change resources',
        'https://gov.uk/guidance/climate-change-explained'
      ],
      [
        'UN climate change resources',
        'https://un.org/en/sections/issues-depth/climate-change'
      ],
      [
        'ESTIMATED IMPACTS OF CLIMATE CHANGE WARMING ON CALIFORNIA WATER AVALIBILITY UNDER TWELVE FUTURE CLIMATE CHANGE SENARIOS',
        'Zhu, T., Jenkins, M.W. and Lund, J.R.'
      ]
    ]
  }
];

// For each article create a card
for (var item in data) {
  if (data.hasOwnProperty(item)) {
    // Get element
    var element = data[item];

    // Create card
    var listItem = document.createElement('article');
    listItem.className = 'card style1';

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

/*
request.open('GET', 'assets/_data/articles.json');

request.onreadystatechange = function () {
  if (request.status === 200 && request.readyState === 4) {
    data = JSON.parse(request.responseText);

    // For each article create a card
    for (var item in data) {
      if (data.hasOwnProperty(item)) {
        // Get element
        var element = data[item];

        // Create card
        var listItem = document.createElement('div');
        listItem.className = 'card';
        listItem.innerHTML =
          '<h4>' + element.name + '</h4>' + '<p>' + element.summary + '</p>';
        DOMNode.appendChild(listItem);
      }
    }
  }
};

request.send();
*/
