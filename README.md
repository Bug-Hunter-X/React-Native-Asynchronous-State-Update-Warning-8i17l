# React Native Asynchronous State Update Warning

This repository demonstrates a common issue in React Native related to asynchronous operations and state updates.  The problem arises when an asynchronous operation, such as a network request using `fetch`, updates the component's state after the component has already unmounted. This leads to a warning message in the console and potentially unexpected behavior.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file offers a solution using the `AbortController` to cancel requests when the component unmounts.