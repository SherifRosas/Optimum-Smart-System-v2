import sqlite3
import os

db_path = 'db.sqlite3'
if not os.path.exists(db_path):
    print(f"❌ Database not found at {db_path}")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

def add_column(table, column, type_def):
    try:
        cursor.execute(f"ALTER TABLE {table} ADD COLUMN {column} {type_def}")
        print(f"✅ Added {column} to {table}")
    except sqlite3.OperationalError as e:
        if "duplicate column name" in str(e):
            print(f"ℹ️ Column {column} already exists in {table}")
        else:
            print(f"❌ Error adding {column} to {table}: {e}")

add_column('customers_customer', 'google_maps_url', 'varchar(500)')
add_column('suppliers_supplier', 'google_maps_url', 'varchar(500)')

conn.commit()
conn.close()
print("✨ Schema fix completed.")
