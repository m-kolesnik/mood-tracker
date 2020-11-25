const Config = {
    bot: {
        token: '1344331586:AAF0dreEZzSYLLirlucpSXbIo5OMEKN71dk',
        options: {
            owner: 645892956,
            admin: 298784500
        }
    },
    queries: [
        `CREATE TABLE IF NOT EXISTS "users" (
            "id"	        INTEGER UNIQUE,
            "username"	    TEXT,
            "subscribed"	INTEGER,
            "status"        TEXT,
            PRIMARY KEY("id")
        );`,
        `CREATE TABLE IF NOT EXISTS "mood" (
            "id"	        INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            "time"	        TEXT,
            "date"	        TEXT,
            "caption"	    TEXT,
            "description"	TEXT,
            "value"	        INTEGER
        );`,
        `CREATE TABLE IF NOT EXISTS "messages" (
            "id"	        INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            "time"	        TEXT,
            "date"	        TEXT,
            "text"  	    TEXT,
            "from"	        INTEGER
        );`
    ]
};

module.exports = { Config };