## Here’s a comprehensive list of commonly used MongoDB queries with examples. These queries work in the Mongo Shell or any MongoDB client.
- **1. Basic Commands**

```
  # Show all databases
show dbs

# Use a specific database
use myDatabase

# Show all collections in the current database
show collections

```
- **2. CRUD Operations (Create, Read, Update, Delete)**
  ```
  db.collection.insertOne({
  name: "John Doe",
  age: 25,
  city: "New York"
   });

   db.collection.insertMany([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 28 }
   ]);
  ```
  # b. Read Data**
  ```
  # Find all documents
  db.collection.find();

  # Find documents with a condition
  db.collection.find({ age: { $gt: 20 } });

  # Find specific fields (projection)
   db.collection.find({}, { name: 1, _id: 0 }); # Show only 'name'

  # Find one document
  db.collection.findOne({ name: "Alice" });
  ```
  **c. Update Data**
  ```
  # Update one document
  db.collection.updateOne(
  { name: "Alice" },
  { $set: { age: 31 } }
  );
  ```
  # Update many documents
```
 db.collection.updateMany(
  { city: "New York" },
    { $set: { country: "USA" } }
  );
```
# d. Delete Data
```
# Delete one document
db.collection.deleteOne({ name: "Bob" });

# Delete many documents
db.collection.deleteMany({ age: { $lt: 25 } });
```
# 3. Query Operators
**a. Comparison Operators**
```
# Greater than
db.collection.find({ age: { $gt: 25 } });

# Less than or equal
db.collection.find({ age: { $lte: 30 } });

# Between (age > 20 && age < 40)
db.collection.find({ age: { $gt: 20, $lt: 40 } });
```
**b. Logical Operators**
```
# AND condition
db.collection.find({ $and: [{ age: { $gt: 20 } }, { city: "New York" }] });

# OR condition
db.collection.find({ $or: [{ age: { $lt: 20 } }, { city: "London" }] });

# NOT condition
db.collection.find({ age: { $not: { $gt: 25 } } });
```
**c. Array Operators**
```
# Match documents with a specific element in an array
db.collection.find({ tags: "sports" });

# Match documents where the array contains all specified elements
db.collection.find({ tags: { $all: ["sports", "music"] } });

# Match by array length
db.collection.find({ tags: { $size: 2 } });
```
# 4. Aggregation Framework
```
# Group by a field and calculate counts
db.collection.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
]);

# Filter data (match stage) and group
db.collection.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$city", avgAge: { $avg: "$age" } } }
]);
```
# 5. Indexing
```
# Create an index on a field
db.collection.createIndex({ name: 1 });

# Show indexes
db.collection.getIndexes();

# Drop an index
db.collection.dropIndex({ name: 1 });
```
# 6. Text Search
```
# Create a text index
db.collection.createIndex({ description: "text" });

# Perform a text search
db.collection.find({ $text: { $search: "mongodb" } });

# Search with score
db.collection.find(
  { $text: { $search: "mongodb" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
```
# 7. Geospatial Queries
```
# Insert location data
db.places.insertOne({
  name: "Central Park",
  location: { type: "Point", coordinates: [-73.97, 40.77] }
});

# Find places near a location
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-73.97, 40.77] },
      $maxDistance: 1000
    }
  }
});
```
# 8. Utilities
```
# Count documents
db.collection.countDocuments({ age: { $gt: 25 } });

# Distinct values of a field
db.collection.distinct("city");

# Rename a field
db.collection.updateMany({}, { $rename: { "oldField": "newField" } });

# Drop a collection
db.collection.drop();

# Drop a database
db.dropDatabase();
```

