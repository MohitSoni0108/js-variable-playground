# JS Variable Playground

A mini JavaScript project to understand:

- Hoisting
- Temporal Dead Zone (TDZ)
- Difference between var, let, const

## 🚀 Features
- Run JavaScript code
- See output
- Get explanation of errors

## 🔗 Live Demo
https://javascript-playgoround.netlify.app/

---

# 📘 JavaScript Revision (Day 1 + Day 2) — Questions & Answers

## 🧠 Day 1: Fundamentals

1. Why should we avoid var in modern JavaScript?

Answer:  
Because var is function-scoped (not block-scoped), allows redeclaration, and can cause unpredictable bugs due to hoisting.

---

2. What happens if you try to change a const variable?

Answer:  
It throws an error: TypeError: Assignment to constant variable.

---

3. What is the difference between undefined and null?

Answer:  
undefined → Variable declared but not assigned a value  
null → Intentionally assigned empty value  

---

4. Which will you use more: let or const, and why?

Answer:  
Use const by default for safety. Use let only when the value needs to change.

---

5. What will be the output and why?

let x;
console.log(x);

Answer:  
undefined — because the variable is declared but not assigned a value.

---

6. What will this return?

console.log(typeof null);

Answer:  
"object" — due to a historical bug in JavaScript.

---

7. Why is const allowed for objects even if we modify properties?

Answer:  
Because const prevents reassignment of the reference, not mutation of the object’s internal properties.

---

8. What will be the output and why?

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

Answer:  
[1, 2, 3, 4] — arrays can be mutated even when declared with const.

---

9. What will this output?

console.log("5" + 2);

Answer:  
"52" — because + performs string concatenation when one operand is a string.

---

10. What about this?

console.log("5" - 2);

Answer:  
3 — because - forces numeric conversion.

---

11. Why do they behave differently?

Answer:  
Because + prefers string concatenation, while other operators (-, *, /) force numeric conversion.
