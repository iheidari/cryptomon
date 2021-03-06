const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  original_symbol: String,
  name: String,
  description: String,
  website_url: String,
  logo_url: String,
  blog_url: String,
  discord_url: String,
  facebook_url: String,
  github_url: String,
  medium_url: String,
  reddit_url: String,
  telegram_url: String,
  twitter_url: String,
  whitepaper_url: String,
  youtube_url: String,
  linkedin_url: String,
  bitcointalk_url: String,
  block_explorer_url: String,
  replaced_by: String,
  markets_count: String,
  platform_currency_id: String,
  platform_contract_address: String,
});

const model = mongoose.model("Currency", schema);

module.exports = { schema, model };
