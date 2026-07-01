# Difference between JPA, Hibernate and Spring Data JPA

## JPA (Java Persistence API)
- JSR 338 specification for persisting, reading and managing data from Java objects
- Does NOT contain any concrete implementation
- Just defines the rules — like an interface

## Hibernate
- ORM tool that IMPLEMENTS JPA specification
- Handles actual database operations
- Adds extra features beyond JPA (caching, lazy loading, etc.)

## Spring Data JPA
- Does NOT implement JPA directly
- Sits ABOVE Hibernate (or any JPA provider)
- Removes boilerplate code — no need to manually manage Session, Transaction etc.
- Manages transactions automatically via @Transactional

## Summary Table
| Feature | JPA | Hibernate | Spring Data JPA |
|---|---|---|---|
| Type | Specification | ORM Implementation | Abstraction Layer |
| Has Implementation? | No | Yes | No (uses Hibernate) |
| Boilerplate Code | High | Medium | Minimal |
| Transaction Management | Manual | Manual | Automatic |
