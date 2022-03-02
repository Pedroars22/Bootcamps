import { Pool } from "pg";

const connectionString = 'postgres://mvwyufrn:LAe3ETRaLZ12FQS9WbEHgRhs8KOEDd5O@abul.db.elephantsql.com/mvwyufrn';

const db = new Pool({ connectionString });

export default db;