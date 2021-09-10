

const axios = require('axios');
var mysql = require('mysql2');

function start() {
var con = mysql.createConnection({
  host: "db",
  user: "test",
  password:"",
  database: "ri_db"
});

con.connect(function(err) {
        if (err) throw err;
            
            con.query("select * from currency order by timestamp", function (err, result) {
                if (err) throw err;
                // console.log(result);
                
                let ts = result[0];
                
                
                const url = `http://localhost/marketPurchase`;

                axios.get(url).then(response => {
                    // console.log(response.data); 
                    const product = response.data;
                    const timestamp = product.timestamp;
                    let i = result.length-1;
                    while(result[i].timestamp>timestamp && i>=0) {
                        i--;
                        ts = result[i];
                    }
                    
                    const val = ts.exchangeRate * product.productPrice;
                    console.log(val);
                    
                })
                .catch(ex => {
                    console.log(ex)
                })
                
                
                
            });
            
            
            
        }); 
        
}

start()
	
    