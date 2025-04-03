ByteMart E-Commerce – An online store selling electronics, clothing and home goods 
Product and Inventory Management Service  
(De Castro, Ornales, Pesigan, Ramos, Cabungcal) 

npm install express mongoose nodemon dotenv

| Functions         | HTTP Method              | Endpoint                  | Data Included |
|----------------|----------------------|------------------------------|----------------------------|
| Product Catalog Management  | POST  | /products/add       | product_id, name, category, price, stock |
| Stock Level Monitoring | GET  | /products/:id/stock       | product_id, current_stock |
| Price Adjustment & Discounts  | PUT   | /products/:id/price         | product_id, new_price, discount_percentage |
| Category & Tag Management  | PUT   | /products/:id/category       | product_id, categories, tags |
| Supplier Management | POST  | /suppliers/add        | supplier_id, name, contact_info |
------------------------------------------------------------------------ |
