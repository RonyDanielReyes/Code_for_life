DROP TABLE IF EXISTS enrollment_by_areatype CASCADE;

create table enrollment_by_areatype (
  areatype VARCHAR(50),
  urban INT,
  rural INT,
  total INT
);
```