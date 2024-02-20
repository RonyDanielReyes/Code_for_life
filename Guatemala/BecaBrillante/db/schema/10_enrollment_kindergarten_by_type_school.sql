DROP TABLE IF EXISTS enrollment_kindergarten_by_type_school CASCADE;

CREATE TABLE enrollment_kindergarten_by_type_school (
  typeschool VARCHAR(50),
  total INT,
  man INT,
  woman INT
);