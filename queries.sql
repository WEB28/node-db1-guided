-- example of the where
SELECT * 
FROM customers
where city ='Paris' or country = "Germany";

-- example of the order by
SELECT * 
FROM customers
where city ='Paris' or country = "Germany"
order by country, city;

-- first 10 customers sort the results by country
SELECT * 
FROM customers
limit 10;

-- see a list of the first 5 customers sort the results by country
SELECT * 
FROM Customers
order by country
limit 5;

-- see a list of the first 5 customers sort the results by country descending
SELECT * 
FROM Customers
order by country desc
limit 5;

-- add data to tables
insert into Categories (categoryName, description)
values('microsoft products', 'the most microsofty products on teh market');

-- update a record
update catergoreis