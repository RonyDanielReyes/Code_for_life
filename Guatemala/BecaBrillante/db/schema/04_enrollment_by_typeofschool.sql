DROP TABLE IF EXISTS enrollment_by_typeofschool CASCADE;

CREATE TABLE enrollment_by_typeofschool (
  typeofschool VARCHAR(50),
  official INT,
  privada INT,  -- I did it privada instead of private because private is a reserved word in SQL
  municipal INT,
  cooperativa INT,
);
