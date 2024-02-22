DROP TABLE IF EXISTS enrollment_highschool_by_type_school CASCADE;

CREATE TABLE enrollment_highschool_by_type_school (
  type_school VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);