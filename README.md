# js-sets _[by BUILDBROTHERS.COM]_

_A JavaScript implementation of Set._

## Features

- Return the Union of two sets
- Return the Intersection of two sets
- Check for the Equality of two sets
- check if two sets are Equivalent
- Return the Compliment of two sets
- Check if two sets are disjoint
- Check if a set is empty
- Return the size of a set
- Clear a set (make it empty)
- add an element to a set

## Here is how to get started.

## Installation

Install using NPM

```sh
npm i js-sets
```

Install using yarn

```sh
yarn add js-sets
```

## Example 1

```
const Set = require('js-sets')
const vowels = new Set(['a', 'e', 'i', 'i', 'o', 'u'])
console.log(vowels.value)
// will return ['a', 'e', 'i', 'o', 'u']
const consonants = new Set(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])

```

To use all the Set's method (e.g to unite two sets, to find set intersection or to check for equality of a set), you simply call the method from the set instance and pass the other set as a paramater on the method.

## Example 2

```
let alphabets = vowels.union(consonants)
console.log(alphabets.result())
// will return ['a','e','i','o', 'u', 'b', 'c', 'd', 'f', 'g', ...]
```

In the above example we are joining vowels and consonants using the _union()_ method, the method is available in all the set instances.
To get the final value, you can use the _result()_ method.

Instead of passing an initial value as a parameter when creating a new Set, like in the first example, you can create a new set passing no parameter and then later use the _set()_ method to set the values of the set, you can also use this method to change the the entire elements of a set.

## Example 3

```
const alphabets = new Set()
alphabets.set(consonants.union(vowels).result())
console.log(alphabets.value)
// will return ['a','e','i','o', 'u', 'b', 'c', 'd', 'f', 'g', ...]
```

You can also use the chain commands, calling a method after a method to get the resuts you want.

## Example 4

```
alphabets.intersect(vowels).equal(new Set(['a', 'e', 'i', 'o', 'u']))
// wil return true
```

Using the _equal()_ method will return either a Boolean value, so there so there is no need to call the result() method after it, hence calling it will return the value of the set.

## List of Supported Set Methods

| method              | use                                                                             |
| ------------------- | ------------------------------------------------------------------------------- |
| size()              | Get the size of the set                                                         |
| empty()             | Check if a set is empty                                                         |
| clear()             | Clear all the elements in a set                                                 |
| set(param)          | Set the value of a set                                                          |
| add(param)          | add a new element to a set                                                      |
| remove(param)       | remove an element from a set                                                    |
| equal(param)        | check if a set is equal to a given set                                          |
| equaivalent(param)  | check if a set has the same number of elements with a given set                 |
| compliment(param)   | return the elements that are in the current set which are not in the given set  |
| intersection(param) | return similar elements that are in two sets                                    |
| disjoint(param)     | check if two sets have no elements in common                                    |
| power()             | return the power of a set                                                       |
| result()            | Get the final result (value) after a certain method is use to compare two sets. |

# Note:

All methods that accept parameters except for the _equivalent()_ method, the _result()_ method has to be called at the end as chain method in order to get the result of the operation.

# Contributors

---

- Usman G. Hassan 🟢 [@UsmanGurowa](https://twitter.com/UsmanGurowa)

# License

This program is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007. Please read the LICENSE.txt text document included with the source code if you would like to read the terms of the license.
