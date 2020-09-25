const pets = [
  {
    name: 'Henrique',
    type: 'Lizard',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7xD5yUZVNpHOVycJblnuGGAxZlYtTr1kz8Q&usqp=CAU',
    username: 'IloveHenrique1',
    about:
      'Henrique is a long-tailed lizard who enjoys crickets and sunbathing. He also enjoys chardonnay and finely aged crickets.',
    age: '7',
  },
  {
    name: 'Derek',
    type: 'Ferret',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3dCq0WzA_k_5AXDiVpNsXIBajkOZeezUgwg&usqp=CAU',
    username: 'IloveHenrique1',
    about:
      'Derek is as radical as he is a ferret. He enjoys play-dates and swimming.',
    age: '3',
  },
  {
    name: 'Benjo',
    type: 'Cat',
    img:
      'https://preview.redd.it/zra62dx2ijwz.jpg?width=640&crop=smart&auto=webp&s=351dfef3cc601cb00d9f7d2d621090785ad2e0fa',
    username: 'IloveHenrique1',
    about:
      "Benjo is a sweet kitty who is very talkative, especially around dinnertime. He's very playful and enjoys daily snuggles.",
    age: '9',
  },
  {
    name: 'Natasha',
    type: 'Prairie Dog',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVbhic-oLM4F5heFgShWm5tgbLKUfTyRKqQg&usqp=CAU',
    username: 'IloveHenrique1',
    about:
      "Natasha loves to dig holes and make friends. She's very playful with animals of all shapes and sizes.",
    age: '11',
  },
  {
    name: 'Jeremy',
    type: 'Dog',
    img:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'BoFarish',
    about: 'Jeremy likes to eat, sleep, and go for the occasional walk.',
    age: '3 years',
  },
  {
    name: 'Oscar',
    type: 'Dog',
    img:
      'https://images.unsplash.com/photo-1510020553968-30f966e1ec9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'BoFarish',
    about:
      'Oscar loves to meet new people and new dog friends. He also really enjoys going for car rides.',
    age: '5 years',
  },
  {
    name: 'Lucy',
    type: 'Cat',
    img:
      'https://images.unsplash.com/photo-1587642808075-97120a9dc6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    username: 'BoFarish',
    about: 'A great cat who enjoys all the perks that cat life has to offer.',
    age: '4 years',
  },
  {
    name: 'Mr. Whiskers',
    type: 'Cat',
    img: 'https://i.redd.it/5m71nu9uv7q31.jpg',
    username: 'West',
    about:
      'Happy and friendly cat. Loves to be picked up and go for long walks on the beach.',
    age: '4 years',
  },
  {
    name: 'Monsieur Fluffy',
    type: 'French Bulldog',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHr2jkV39w4OqWb961sKfP9wHtBzUUVDmjQw&usqp=CAU',
    username: 'West',
    about: 'Chess grandmaster and ex police K-9',
    age: '8 years',
  },
  {
    name: 'Larry the Seal',
    type: 'Seal',
    img:
      'https://mymodernmet.com/wp/wp-content/uploads/2018/09/Amy-Kennedy_Guffaw-comedy-wildlife-awards.jpg',
    username: 'West',
    about: 'He is a seal and does his seal things',
    age: '9 years',
  },
  {
    name: 'Radar',
    type: 'Dog',
    img:
      'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-0/c0.24.206.206a/p206x206/120082960_10157985905747739_8999155881047584337_o.jpg?_nc_cat=106&_nc_sid=da31f3&_nc_ohc=HY8R9XSQQaUAX-uc6y1&_nc_ht=scontent-mia3-1.xx&_nc_tp=27&oh=3fa2c2c4a9d0af51c5d90638da44ab0b&oe=5F9202AB',
    username: 'McDougal',
    about:
      'A loyal family dog. He is blind in one eye and has a loud vicious bark but is super loving.',
    age: '15',
  },
  {
    name: 'Millie',
    type: 'Dog',
    img:
      'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/90949973_3376365682392862_955432994166800384_n.jpg?_nc_cat=102&_nc_sid=da31f3&_nc_ohc=FUOU4StdLJcAX_U8EVG&_nc_ht=scontent-mia3-2.xx&_nc_tp=27&oh=eefe55fc37fa05d6cc3ec4f2f91fc570&oe=5F92FEBC',
    username: 'McDougal',
    about:
      'Fun loving Golden-doodle. Getting a little pitiful in her old age but still a lot of fun. Becomes a kid again when all her humans return home.',
    age: '14',
  },
  {
    name: 'Ivy',
    type: 'cat',
    img:
      'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/1043990_663370947025696_465211012_n.jpg?_nc_cat=109&_nc_sid=ba80b0&_nc_ohc=1sOGByozfHkAX87yZLe&_nc_ht=scontent-mia3-2.xx&oh=8c1b20919f9c908cd2dbbe1240e03762&oe=5F93417D',
    username: 'McDougal',
    about:
      'Really sweet, self-regenerative kitty. What is self-regenerative you ask? She purrs so much she is basically still a kitten at the age of 13. She loves to snuggle and puke and yell at people',
    age: '13',
  },
  {
    name: 'Ralph',
    type: 'Dog',
    img:
      'https://i.guim.co.uk/img/media/c9f4f4a7d44db2e6e639d86f6a763fd059346578/399_484_1754_1054/master/1754.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=53828aa64aad59c4dbe2527847e1de4a',
    username: 'Mike',
    about: 'cool dog, can skateboard.',
    age: '2 years',
  },
  {
    name: 'Sam',
    type: 'Toucan',
    img:
      'https://static.wikia.nocookie.net/disney-animals/images/3/31/Toco-Toucan-Images.jpg/revision/latest/top-crop/width/360/height/450?cb=20171207225917',
    username: 'Mike',
    about: 'a toucan named Sam',
    age: '5 years',
  },
  {
    name: 'Alpha',
    type: 'Betta fish',
    img: 'https://i.ytimg.com/vi/QRGl4AkaOzE/maxresdefault.jpg',
    username: 'Mike',
    about: 'The angriest and most violent of the betta fish',
    age: '5 years',
  },
];

module.exports = pets;
