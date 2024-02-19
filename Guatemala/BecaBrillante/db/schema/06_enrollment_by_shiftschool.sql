DROP TABLE IF EXISTS enrollment_by_shiftschool CASCADE;

create table enrollment_by_shiftschool (
  schooltype VARCHAR(50),
  total INT,
  Morning INT,
  Afternoon INT,
  overnight INT,
  other INT,
  ignorado INT
  );
