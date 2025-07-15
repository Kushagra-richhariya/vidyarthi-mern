const mongoose = require("mongoose");
require("dotenv").config({ path: '.env.local' });

exports.connect = () => {
    console.log("=== DATABASE CONNECTION ===");
    console.log("MongoDB URL:", process.env.MONGODB_URL ? "URL is set" : "URL is NOT set");
    
    if (!process.env.MONGODB_URL) {
        console.error("MONGODB_URL is not defined in environment variables");
        process.exit(1);
    }
    
    console.log("Attempting to connect to MongoDB...");
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ DB Connected Successfully");
        console.log("Database name:", mongoose.connection.name);
        console.log("Database host:", mongoose.connection.host);
    })
    .catch( (error) => {
        console.log("❌ DB Connection Failed");
        console.error("Connection error:", error.message);
        console.error("Full error:", error);
        process.exit(1);
    } )
};