---
layout: essay
type: essay
title: "Database Documentation - Online Apparel Store Consumer Data"
# All dates must be YYYY-MM-DD format!
date: 2025-12-14
published: true
labels:
  - Data Modeling
  - SQL
  - DDL
  - DML
  - Entity-Relationship (ER) Design

---

## Database Documentation Overview

The "Online Apparel Store Consumer Data" database was developed by Jasmine K. Sanders to facilitate a transition from third-party to in-house management. The primary objective is to capture and analyze consumer data—including orders, products, payments, and reviews—to help the business optimize pricing, inventory, and shipping strategies. The design process followed a structured three-stage modeling approach: a conceptual model to identify high-level entities; a logical model to define specific attributes and relationships (such as one-to-many and many-to-many); and a physical model to establish technical specifications, including data types and security measures like credit card number masking for legal compliance.

To move from design to implementation, the database was built using SQL DDL queries to define tables and enforce data integrity through constraints like NOT NULL, UNIQUE, and CHECK. Many-to-many relationships, such as those between orders and products, were managed using junction tables and foreign keys to ensure referential integrity. Finally, data was populated using DML queries, and a comprehensive "AllTables" view was created using LEFT JOIN operations. This allow for the verification of the database structure and provides a streamlined way to analyze the interconnected data, ultimately helping the store capitalize on consumer trends and maximize profits.

To view the full report, click [here](https://JazzSanders.github.io/Portfolio/projects/Sanders,%20Jasmine_CSC230_Assignment%2010.1%20Database%20Documentation.pdf).
