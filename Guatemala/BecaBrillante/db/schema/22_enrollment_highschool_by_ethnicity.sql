DROP TABLE IF EXISTS enrollment_highschool_by_ethnicity CASCADE;

CREATE TABLE enrollment_highschool_by_ethnicity (
  ethnicity VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);