ALTER TABLE "user_table" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_table" ALTER COLUMN "user_department" SET DEFAULT 'main office';--> statement-breakpoint
ALTER TABLE "user_table" ALTER COLUMN "user_department" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "ticket_table" ADD COLUMN "avatar" text[] DEFAULT '{}'::text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "user_table" DROP COLUMN IF EXISTS "avatar";