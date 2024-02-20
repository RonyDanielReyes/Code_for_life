DROP TABLE IF EXISTS enrollment_primary_by_area_type CASCADE;

CREATE TABLE enrollment_primary_by_area_type (
  areatype VARCHAR(50),
  total INT,
  man INT,
  woman INT
);