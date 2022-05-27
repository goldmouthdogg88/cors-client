We have some JSON that has the following shape:

```json
{
  "title": "i think it's working - Google Search",
  "url": "https://www.google.com/search?q=i think it's working",
  "sxsrf": "ALiCzsa9PTa74dklEz1M7mr2e5f3liyAXg:1651609974618",
  "source": "hp",
  "ei": "dpFxYvbOIvSP9PwPktO96Ac",
  "iflsig": "AJiK0e8AAAAAYnGfhqR2aKk5QGbIITgc4TlNJC0tdrka",
  "oq": "i thin",
  "gs_lcp": "Cgdnd3Mtd2l6EAMYADIECCMQJzIICC4Q1AIQkQIyCAguENQCEJECMgUILhCABDIHCC4Q1AIQQzIFCAAQgAQyBwguENQCEEMyBQguEIAEMggILhCABBDUAjIFCAAQgAQ6BwgjEOoCECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CwguEIAEEMcBENEDOgsILhCxAxCDARDUAjoKCAAQsQMQgwEQQzoLCC4QgAQQsQMQ1AI6CAgAELEDEIMBOgsILhCABBDHARCvAToKCC4QsQMQ1AIQQzoECC4QQzoECAAQQzoICC4QgAQQsQM6CAguELEDENQCUM8FWN8JYO8PaAFwAHgAgAGZAYgBqASSAQM0LjKYAQCgAQGwAQo",
  "sclient": "gws-wiz",
  "date": "2022-05-03T20:32:59.839Z"
}
```

Which we want to extract the query from the title
