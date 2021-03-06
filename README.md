1. Get List of all currnecies:
   GET:https://api.nomics.com/v1/exchange-rates
   [{
   "currency": "BTC",
   "rate": "48426.97145578",
   "timestamp": "2021-03-06T00:00:00Z"
   }]
2. Get metadata of each currency:
   https://api.nomics.com/v1/currencies?ids=BTC,ETH,XRP&attributes=id,name,website_url,logo_url,reddit_url,whitepaper_url,bitcointalk_url,block_explorer_url,markets_count,cryptocontrol_coin_id
   [{
   "bitcointalk_url": "",
   "block_explorer_url": "https://blockchair.com/bitcoin/",
   "cryptocontrol_coin_id": "bitcoin",
   "id": "BTC",
   "logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
   "markets_count": "55805",
   "name": "Bitcoin",
   "reddit_url": "https://www.reddit.com/r/Bitcoin/",
   "website_url": "https://bitcoin.org/en/",
   "whitepaper_url": "https://bitcoin.org/bitcoin.pdf"
   }]
3. Get History of each currency:
   https://api.nomics.com/v1/exchange-rates/history?currency=BTC&start=2010-04-14T00:00:00Z
   [{
   "timestamp": "2011-08-18T00:00:00Z",
   "rate": "10.90000000000000000000000000000000"
   }]
