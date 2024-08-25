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
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"target_department" "department" NOT NULL,
	"source_department" "department" NOT NULL,
	"status" "status" DEFAULT 'processing' NOT NULL,
	"fulfill_message" text,
	"reject_message" text,
	"pictures" text[] DEFAULT '{}'::text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_table" (
	"clerk_id" text PRIMARY KEY NOT NULL,
	"id" uuid DEFAULT gen_random_uuid(),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" text DEFAULT 'User',
	"user_department" "department" DEFAULT 'main office'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket_table" ADD CONSTRAINT "ticket_table_user_id_user_table_clerk_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("clerk_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
