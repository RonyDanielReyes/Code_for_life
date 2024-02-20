DROP TABLE IF EXISTS enrollment_primary_by_grade_ethnicity CASCADE;

CREATE TABLE enrollment_primary_by_grade (
  ethnicity VARCHAR(50),
  total INT,
  first_grade INT,
  second_grade INT,
  third_grade INT,
  fourth_grade INT,
  fifth_grade INT,
  sixth_grade INT
);