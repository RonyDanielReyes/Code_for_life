DROP TABLE IF EXISTS enrollment_by_shiftschool CASCADE;

CREATE TABLE enrollment_by_shiftschool (
  schooltype VARCHAR(50),
  total INT,
  morning INT,
  afternoon INT,
  overnight INT,
  other INT,
  ignorado INT
  );
