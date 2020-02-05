DROP TABLE IF EXISTS villains;

CREATE TABLE villains (
  id SERIAL PRIMARY KEY,
  villain VARCHAR(50),
  movie VARCHAR(50)
);

INSERT INTO villains (villain, movie)
VALUES ('Agent Smith', 'The Matrix'),
       ('Voldemort', 'Harry Potter Series'),
       ('Wicked Witch of the West', 'Wizard of Oz'),
       ('Thanos', 'Avengers');
