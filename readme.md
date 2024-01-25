
## to create table by mode existing
### npx prisma migrate dev --create-only --name create-all-model

## Execute migration which created before.
### npx prisma migrate dev

## alter table "samples"
### npx prisma migrate dev --create-only --name add_description_to_sample_table
### make sure column description has exist to that table