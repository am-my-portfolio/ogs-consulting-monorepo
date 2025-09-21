

# Locked Files
- the files in the `src/migrations` folder are locked, using the command: `git lfs lock **/*.migration.ts`


# Generate Initial Migration
`NOTE: We dont need migrations during local development. the synchronize flag should be set to true. But if we want to test migrations, then we should follow these instructions`
- to generate an initial migration for all the entities defined in the code, run command: `yarn tyeporm:init`
- it will create a file `<TIMESTAMP>-init.ts` in the `src/migrations` folder


# Drop Schema
`WARNING: Run this with caution. It will drop all tables`
- to delete the current schema, run: `yarn typeorm:drop`


# To apply new schema
- in local, just start the server and schema will auto-synchronize
- in prod or to simulate prod, run command: `yarn typeorm:run` or `yarn typeorm:reset`



# GraphQL Playground
- Write a Query 


- Write a Mutation
```
mutation {
  createUser(
    createUserDto: {
      first_name: "Afshan"
      last_name: "Martin"
      middle_name: "Aman"
      email: "netnews4me@yahoo.com"
      phone: "720 503 5656"
      addresses: [
        {
          street_1: "15972 St Paul St"
          street_2: ""
          city: "Thornton"
          state: "CO"
          county: "Adams"
          zip: 80604
        }
      ]
    }
  ) {
    first_name 
    last_name
    email
    phone
    addresses {
      street_1
      city
      state
      county
      zip
    }
  }
}
```


# Rest Swagger Api Docs
- Post Request
```
{
  "first_name": "Afshan",
  "middle_name": "Aman",
  "last_name": "Martin",
  "email": "netnews4me@yahoo.com",
  "phone": "7205035656",
  "addresses": [
    {
      "street_1": "15972 St Paul St",
      "street_2": "",
      "city": "Thornton",
      "county": "Adams",
      "state": "CO",
      "zip": 80602
    }
  ]
}
```