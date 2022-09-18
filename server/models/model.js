const { Pool } = require('pg');
const PG_URI= 'postgres://yzgszbpv:9Euzu8gFAbJM-0QpB5yHtz0RDzbG6Odx@jelani.db.elephantsql.com/yzgszbpv';
const pool = new Pool ({
    connectionString: PG_URI
});

/*

? Give_Model
*material |     detail     |   quantity    |             location              |              contact               | post_date | feed_id 
----------+----------------+---------------+-----------------------------------+------------------------------------+-----------+---------
 mulch    | coffee grounds | 5 gallons     | houston, tx                       | gmail@gmail.com                    |           |       1
 soil     | n/a            | alot!         | middle of nowhere                 | emailme@gmail.com                  |           |       2
 compost  | food waste     | dumpster full | downtown Austin                   | fancyrestruant@gmail.com           |           |       3
 wood     | pecan tree     | 20 feet       | bastrop, tx                       | email@internetexplorer.com         |           |       4
 leaves   | oak leaves     | 5 bags        | Newton-le-Willows, United Kingdom | rickAstley@YouveBeenRickRolled.com |           |       5

*/


module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}
