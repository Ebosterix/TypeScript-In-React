# Workshop TS Basics with AI

## 🟦 What is TypeScript?

- TypeScript is a superset of JavaScript that adds static typing to the language.

- 💡In short:
 `TypeScript = JavaScript + Type Safety`

## 🔍 Why Use TypeScript?
	•	Catch errors early (at compile time, not runtime)
	•	Better autocomplete and intellisense
	•	Code is easier to read and maintain
	•	Scales better for large projects
	•	Still compiles to plain JavaScript, so it runs anywhere JS runs


## Basic Example
```ts
let username: string = "Maria";
let age: number = 25;
let isActive: boolean = true;

// array type
let scores: number[] = [90, 85, 70];
let names: string[] = ["Anna", "Ben"];

// alternative array type
let scores: Array<number> = [90, 85, 70];
```
## More Example
```js
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
```

```ts
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}
```

When passing a number to `greet()`, ts immediately warns. It must be a string type argument.

## 🧠 TypeScript Concepts (in a nutshell)
 • Types: string, number, boolean, etc.
 • `Interface` and `Type`: describe the shape of objects
 • Type Inference: TS often figures out the type for you
 • Union types: string | number 
 • Generics, Enums, and more…


## 🚀 What we do today?

Let's build a simple Todo application built with **TypeScript** and **React**!

• How to use TypeScript with React
• Typing components and props
• Managing state with `useState`
• Handling form inputs and events
• Creating reusable components

## ✅Features

• Add a new todo
• Mark todo as complete/incomplete
• Toggle completion with checkbox
• Type-safe components with interfaces

## 💡How It Works

  •	`App.tsx` maintains a list of todos using useState
  •	Each todo item is rendered using `TodoItem.tsx`
  •	Todos are typed using the `TodoInterface`
  •	Checkbox toggles completion status
  •	New todos can be added using a form input

## Create vite ts app

`npm create vite@latest ts-basics(your project name) -- --template react-ts`


## Help from AI
  • When learning on your own, ai can be a great help
  • Use wisely, ask questions to have concepts explained, rather than to have code generated


## Afternoon Tasks
  0. try the code on your own from scratch 
  1. add `delete` button to each todo item and add the functionality
  2. use `enum` and replace the boolean value of `isCompleted`
    - ask ai what enum is
    - how it works
    - apply in your code