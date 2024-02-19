DROP TABLE IF EXISTS enrollment_by_areatype CASCADE;

CREATE TABLE enrollment_by_areatype (
  areatype VARCHAR(50),
  total INT,
  man INT,
  woman INT,
  ignorado INT
);
```