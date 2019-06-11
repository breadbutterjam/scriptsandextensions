SELECT catalog_product_entity_text. 
FROM  `catalog_product_entity_text` 
WHERE  `attribute_id`=235
LIMIT 0 , 30


SELECT catalog_product_entity_text.entity_id, catalog_product_entity_text.value 
FROM catalog_product_entity_text
INNER JOIN 
WHERE attribute_id =235
LIMIT 0 , 30

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID
WHERE Orders.OrderDate>"1996-08-18"

-- get all products that are exclusive
SELECT entity_id 
FROM catalog_product_entity_int
WHERE 'attribute_id'=225 AND 'value'=1

-- EXCLUSIVE PRODUCT ENTITY IDs 
SELECT catalog_product_entity_int.entity_id 
FROM catalog_product_entity_int 
WHERE attribute_id=225 AND `value`=1


SELECT catalog_product_entity_int.entity_id,  catalog_product_entity_text.value
FROM catalog_product_entity_int 
INNER JOIN catalog_product_entity_text
ON catalog_product_entity_text.entity_id=catalog_product_entity_int.entity_id
WHERE catalog_product_entity_int.attribute_id=225 AND catalog_product_entity_int.value=1 
AND catalog_product_entity_text.attribute_id=235
