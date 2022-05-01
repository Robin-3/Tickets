# Modelo ER

```mermaid
erDiagram
  ROLE }|--O{ AUTHORIZATION : ""
  USER }|--|{ PROJECT : ""
  USER }O--|{ ROLE : ""
  USER }|--O{ TICKET : ""
  TICKET }O--|{ CATEGORY : ""
  TICKET |O--|{ PRIORITY : ""
  TICKET |O--|{ STATUS : ""
  TICKET ||--O{ FILE : ""
  PROJECT }O--|| TICKET : ""
```