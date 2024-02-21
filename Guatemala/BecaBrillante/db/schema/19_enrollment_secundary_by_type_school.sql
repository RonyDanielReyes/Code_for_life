DROP TABLE IF EXISTS enrollment_secundary_by_type_school CASCADE;

CREATE TABLE enrollment_secundary_by_type_school (
  type_school VARCHAR(50),
  total INT,
  year_2018 INT,
  man INT,
  woman INT
);
