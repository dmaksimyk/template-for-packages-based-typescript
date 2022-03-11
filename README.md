
## Description
### This package is *"monkey patching"*.
It should not be taken as a powerful tool. Moreover, it will improve. If you don't like something, you always have access to the repository.
This package was given only two tasks:
- Simplify work with *Intl.formatNumber()*.
- Add number reducer.

## Table of Contents
- [Methods](#methods)
	- [*Number.intl()*](#number.intl)
	- [*Number.kilo()*](#number.kilo)
	- [*Number.reduce()*](#number.reduce)
- [Examples](#examples)   _- very important!!_
- [Typescript](#typescript)

## Methods
### Number.intl()
The following props are available::
-  ***locale**: "ru-RU" | "us-US" | "eu-EU"* ( default: "ru-RU" )
-  ***debug?**: boolean* ( default: "false" )
-  ***symbol?**: boolean* ( default: "false" )
 
Examples:

    (123400).intl(); // output: 123 400
    (123400).intl({ locale: "eu-EU", debug: true }); // output: 123.400

### Number.kilo()

The following props are available:
-  ***locale?**: "ru" | "en"* ( default: "ru" )
-  ***debug?**: boolean* ( default: "false" )

Examples:

    (123400).kilo(); // output: 123.4 к
    (123400).kilo({ locale: "en", debug: true }); // output: 123.4 k

### Number.reduce()

The following props are available:
-  ***locale?**: "ru" | "en"* ( default: "ru" )
-  ***debug?**: boolean* ( default: "false" )

Examples:

    (123400).reduce(); // output: 123.4 тыс.
    (123400).reduce({ locale: "en", debug: true }); // output: 123.4 thsnd.
  
## Examples

An example of what this package can do.

    // import("@dmaksimyk/number-formatter"); // ES6+
    // require("@dmaksimyk/number-formatter"); // ES5 and below
    
    // usage
    // default number
    const num = 123400;
    
    // intl examples
    num.intl(); // output: 123 400
    num.intl({ locale: "eu-EU" }); // output: 123.400
    
    // kilo examples
    num.kilo(); // output: 123.4 к
    
    // reduce examples
    num.reduce(); // output: 123.4 тыс.
    num.reduce({ locale: "en", debug: true }); // output: 123.4 thsnd.

## Typescript
The library was originally *created under for TypeScript*. Inside there are modules *.d.ts*. Type *support* should be provided *out of the box*.


