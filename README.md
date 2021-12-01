# Prototype Streaming Interface Word Counter

## Building / Running

```bash
$ npm install
$ npm run build
$ npm start
```

## Request / Response

**Example request:** [POST] http://localhost:3000/word-count?n=3 (where n is the number of top-most frequent words; be sure to upload a UTF-8 encoded text file)  

**Example response:**  
```JSON
{
    "frequencies": [
        {
            "word": "sed",
            "count": 12
        },
        {
            "word": "id",
            "count": 10
        },
        {
            "word": "sit",
            "count": 8
        }
    ]
}
```

## Testing

Testing with code coverage.

```bash
$ npm install
$ npm test
```

## Considerations and Additional Improvements

I wanted to use as little RAM as possible when processing larger files, so opted for parsing off of streaming input.  

Unit tests could have had additional mock data and / or modification of mock data to perform additional test scenarios.  

Didn't dive into potential error handing with using incorrect encoding types, non-integer / invalid range "n" values, etc.  