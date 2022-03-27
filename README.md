# SQLite

https://www.npmjs.com/package/sqlite

# SQLite 3

https://github.com/mapbox/node-sqlite3/

## Creating a table and inserting data

```
await db.exec('CREATE TABLE tbl (col TEXT)')
await db.exec('INSERT INTO tbl VALUES ("test")')
```

## Getting a single row

```
const result = await db.get('SELECT col FROM tbl WHERE col = ?', 'test')
```
