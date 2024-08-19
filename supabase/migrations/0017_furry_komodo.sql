ALTER TABLE "ticket_table" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "ticket_table" ADD COLUMN "fulfill_message" text;--> statement-breakpoint
ALTER TABLE "ticket_table" ADD COLUMN "reject_message" text;