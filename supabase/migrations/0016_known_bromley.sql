DO $$ BEGIN
 CREATE TYPE "public"."department" AS ENUM('main office', 'engineering', 'design', 'marketing', 'financial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('fulfilled', 'processing', 'rejected');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"title" text,
	"description" text NOT NULL,
	"target_department" "department" NOT NULL,
	"source_department" "department" NOT NULL,
	"status" "status" DEFAULT 'processing' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sender_id" text NOT NULL,
	"name" text NOT NULL,
	"user_department" "department" NOT NULL,
	"avatar" text[] DEFAULT '{}'::text[] NOT NULL
);
