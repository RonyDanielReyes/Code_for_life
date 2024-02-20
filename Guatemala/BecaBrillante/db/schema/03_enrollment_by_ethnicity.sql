DROP TABLE IF EXISTS enrollment_by_identity CASCADE;

CREATE TABLE enrollment_by_identity (
  ethnicity VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);ee