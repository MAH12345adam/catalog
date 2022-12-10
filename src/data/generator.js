const fakeData = require("@faker-js/faker");
const faker = fakeData.faker;
const path = require("path");
const fs = require("fs");

const arr = [];

for (let i = 0; i < 200; i++) {
  arr.push({
    id: i + 1,
    name: faker.name.firstName(),
    image: faker.image.abstract(300, 250, true),
    price: faker.random.numeric(3),
  });
}

const data = JSON.stringify(arr);

fs.writeFile(path.join(__dirname, "products.json"), data, (err) => {
  if (err) throw err;
  console.log("gg");
});
