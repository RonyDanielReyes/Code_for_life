DROP TABLE IF EXISTS enrollment_by_sex CASCADE;

CREATE TABLE enrollment_by_sex (
    year INT,
    level VARCHAR(50),
    total INT,
    male INT,
    female INT,
    Unknown INT
);