const mongoose = require("mongoose");

class Database {
  constructor(uri) {
    this.uri = uri;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }
}

module.exports = Database;
