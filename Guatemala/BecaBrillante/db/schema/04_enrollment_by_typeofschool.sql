DROP TABLE IF EXISTS enrollment_by_typeofschool CASCADE;

CREATE TABLE enrollment_by_typeofschool (
  typeofschool VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);
