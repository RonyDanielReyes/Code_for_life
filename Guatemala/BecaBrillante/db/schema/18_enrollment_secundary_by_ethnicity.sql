DROP TABLE IF EXISTS enrollment_secundary_by_ethnicity CASCADE;

CREATE TABLE enrollment_secundary_by_ethnicity (
  ethnicity VARCHAR(50),
  total INT,
  man INT,
  woman INT
);