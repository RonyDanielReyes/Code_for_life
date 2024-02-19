DROP TABLE IF EXISTS enrollment_data_byshiftgrades CASCADE;

create table enrollment_data_byshiftgrades (
  grade VARCHAR(50),
  total INT,
  morning INT,
  afternoon INT,
  overnight INT,
  other INT,
  ignorado INT
);