# Test Data

Files contain json arrays

## Files

- [data/large-file.json](data/large-file.json), 11351 elements, 26MB
- [data/medium-file.json](data/medium-file.json), 4000 elements, 9.3MB
- [data/small-file.json](data/small-file.json), 1000 elements, 2.1MB
- [data/very-small-file.json](data/very-small-file.json), 20 elements, 64KB


## Create your custom file

```sh
node src/splice.js data/large-file.json 200 data/200-file.json
```

## Count entries

```sh
node src/count.js data/large-file.json
```

