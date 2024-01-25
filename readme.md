## Generate model.
### npx prisma generate

## to create table by mode existing
### npx prisma migrate dev --create-only --name create-all-model

## Execute migration which created before.
### npx prisma migrate dev

## alter table "samples"
### npx prisma migrate dev --create-only --name add_description_to_sample_table
### make sure column description has exist to that table

## prisma database first migration
### npx prisma db pull
### this command will create/update model base on database used

## Prisma studio
### npx prisma studio
### open ==> localhost:5555