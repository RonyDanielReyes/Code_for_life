DROP TABLE IF EXISTS enrollment_kindergarten_byareatype CASCADE;

CREATE TABLE enrollment_kindergarten_byareatype (
  area VARCHAR(50),
  total INT,
  man INT,
  woman INT
);