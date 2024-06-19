const emails = require('./emails.js');

const addresses = [
  {
    from: 'thomas@gmail.com',
    to: 'wayward@live.com',
  },
  {
    from: 'roger@icloud.com',
    to: 'jonathan@sbcglobal.net',
  },
  {
    from: 'vanessa@yahoo.com',
    to: 'gregh@verizon.net',
  },
  {
    from: 'mike@gmail.com',
    to: 'shrapnull@mac.com',
  },
  {
    from: 'emily@gmail.com',
    to: 'mstrout@icloud.com',
  },
  {
    from: 'sarah@mac.com',
    to: 'reeds@comcast.net',
  },
  {
    from: 'alex@gmail.com',
    to: 'jessica.smith@gmail.com',
  },
  {
    from: 'lily@hotmail.com',
    to: 'alex.wilson@yahoo.com',
  },
  {
    from: 'max@aol.com',
    to: 'emily.jones@hotmail.com',
  },
  {
    from: 'mia@hotmail.com',
    to: 'david.brown@gmail.com',
  },
];

const packets = [];

const timestamp = 24601;

for (let i = 0; i < addresses.length; i++) {
  const email = emails[i];
  packets.push(...email.split('\n').map((line, index) => ({
    ...addresses[i],
    payload: line.trim(),
    stamp: timestamp + index,
  })));
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffle(packets);

for (let i = 0; i < packets.length; i++) {
  packets[i] = {
    id: i,
    ...packets[i],
  };
}

console.log(JSON.stringify(packets, null, 2));
