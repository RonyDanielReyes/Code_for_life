DROP TABLE IF EXISTS enrollment_primary_bytypeschool CASCADE;

CREATE TABLE enrollment_primary_bytypeschool (
  type_school VARCHAR(50),
  total INT,
  man INT,
  woman INT
);
