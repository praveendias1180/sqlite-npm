const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

open({
  filename: './database.db',
  driver: sqlite3.Database,
})
  .then(async (db) => {
    /**
     * Create Tables
     */
    let followed_sql = `
    create table followed (
        pk int primary key not null,
        username text not null,
        unfollowed_time int,
        followed_time int
    );`;
    let result = await db.run(followed_sql);
    console.log(result);

    /**
     * Insert Data
     */
    let followed_time = Date.now();
    const insert_sql = 'INSERT INTO `followed` (`pk`, `username`, `followed_time`) VALUES (?,?,?)';
    let insert_result = await db.run(insert_sql, [ 323432423423, 'HelloWorld', followed_time, ]);
    console.log(insert_result);
  })
  .catch((e) => {
    console.log(e);
  });
