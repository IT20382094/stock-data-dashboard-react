CREATE DATABASE CryptoData;

CREATE TABLE Currency(
    currency_id SERIAL PRIMARY KEY,
    source VARCHAR(100),
    date date,
    open real,
    close real,
    highest real,
    lowest real,
    volume real,
    Market_Cap real
)