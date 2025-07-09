DO
$do$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles WHERE rolname = 'root')
   THEN
      CREATE ROLE root WITH LOGIN PASSWORD 'postgres';
   END IF;
END
$do$;
