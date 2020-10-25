CREATE TABLE gallery (
    "id" serial PRIMARY KEY,
    "path" varchar(250) NOT NULL,
    "description" varchar(100) NOT NULL,
    "likes" integer
);

INSERT INTO gallery (path, description,likes)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.',15),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.',0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.',2);

SELECT * FROM "gallery";

UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;