CREATE TABLE IF NOT EXISTS "ticket_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"department" text NOT NULL
);
