DROP TABLE IF EXISTS enrollment_by_type_of_school CASCADE;

CREATE TABLE enrollment_by_typeofschool (
  typeofschool VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);
