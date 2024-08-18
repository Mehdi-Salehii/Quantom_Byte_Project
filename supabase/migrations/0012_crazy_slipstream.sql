ALTER TABLE
    "user_table"
ALTER COLUMN
    "user_department"
SET
    DATA TYPE department USING "user_department" :: department;