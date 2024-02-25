DROP TABLE IF EXISTS enrollment_by_area_type CASCADE;

CREATE TABLE enrollment_by_area_type (
  areatype VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);
