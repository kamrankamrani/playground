## TypeScript

### 'is' Keyword:

TS converts returning boolean type of function to everything you want.

returning type of function below is:

```
user is AdminType
```

if function is `true` then return type is `AdminType`.

```
export default function isAdmin(user: UserType | AdminType): user is AdminType {
  return "token" in user;
}


//usage

if (!isAdmin(singleUser)) {
    //here user is UserType
    console.log("user is usuall", singleUser);
}
else {
    //TS knows here user is AdminType
}
```

####
