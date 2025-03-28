CREATE TABLE "customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(250) NOT NULL,
	"document" varchar(14) NOT NULL,
	"street" varchar(250) NOT NULL,
	"number" varchar(10) NOT NULL,
	"neighborhood" varchar(100) NOT NULL,
	"zipcode" varchar(8) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "customers_email_unique" UNIQUE("email")
);
