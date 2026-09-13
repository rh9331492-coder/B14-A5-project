 # 🚀 DevStack

DevStack is a modern web application that helps users explore different web development technologies and create their own technology stack. Users can select technologies and manage their selected stack easily.

##  Live Website

[Live Demo](https://rh9331492-coder.github.io/B14-A5-project/)

##  GitHub Repository

[GitHub Repository](https://github.com/rh9331492-coder/B14-A5-project)

---

##  Technologies Used



React


TypeScript

 Tailwind CSS

 Vite

 HTML

 CSS

 JavaScript

 JSON

---

##  Features

### 1. Explore Technologies

Users can explore different web development technologies with useful information such as name, category, level, rating, and description.

###  2. Add Technologies to Stack

Users can select technologies and add them to their personal technology stack.

###  3. Manage Selected Stack

Users can see their selected technologies and remove them from the stack when needed.

---

#  React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

---

## 2. What is the difference between props and state?

**Props** are used to send data from a parent component to a child component.

**State** is data that belongs to a component and can change when the user interacts with the application.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a React component.

In this project, I used `useState` to manage the technologies selected by the user.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. It is useful for side effects such as fetching data.

In this project, `useEffect` can be used to fetch the JSON data when the application loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update, add, or remove items from the list.

Example:

```tsx
{products.map(product => (
  <Product key={product.id} product={product} />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

For example, when the selected stack is empty, we can show an empty stack message:

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

For example:

```tsx
<Products products={products} />
```

If the child needs to send data back to the parent, the parent can pass a function as a prop.

The child can then call that function and send data back to the parent.

Example:

```tsx
<Child onSelect={handleSelect} />
```

The child can call:

```tsx
onSelect(product);
```

---

## 📱 Responsive Design

The application is designed to work on:

*  Mobile devices
*  Tablets
*  Laptops
*  Desktop screens

---

##  Developer

**Rakib**

Frontend Developer in learning 

---

 If you like this project, feel free to give it a star!
