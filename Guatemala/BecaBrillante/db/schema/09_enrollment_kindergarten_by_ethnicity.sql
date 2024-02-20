DROP TABLE IF EXISTS enrollment_kindergarten_by_ethnicity CASCADE;

CREATE TABLE enrollment_kindergarten_by_ethnicity (
  ethnicity VARCHAR(50),
  total INT,
  man INT,
  woman INT
);