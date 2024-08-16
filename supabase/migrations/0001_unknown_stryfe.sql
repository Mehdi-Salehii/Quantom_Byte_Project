DO $$ BEGIN
 CREATE TYPE "public"."department" AS ENUM('main office', 'engineering', 'design', 'marketing', 'financial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "ticket_table" ALTER COLUMN "department" SET DATA TYPE department;