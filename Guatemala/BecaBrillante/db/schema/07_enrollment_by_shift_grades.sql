DROP TABLE IF EXISTS enrollment_by_shift_grades CASCADE;

CREATE TABLE enrollment_by_shift_grades (
  grade VARCHAR(50),
  total INT,
  morning INT,
  afternoon INT,
  overnight INT,
  other INT,
  ignorado INT
);