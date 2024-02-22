DROP TABLE IF EXISTS enrollment_highschool_by_area_type CASCADE;

CREATE TABLE enrollment_highschool_by_area_type (
  area VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);