function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");
  const explanation = document.getElementById("explanation");

  output.textContent = "";
  explanation.textContent = "";

  let logs = [];

  // Capture console.log
  const originalLog = console.log;
  console.log = function (...args) {
    logs.push(args.map(arg => String(arg)).join(" "));
  };

  try {
    let result = eval(code);

    // 🔥 FIXED LOGIC
    if (logs.length > 0) {
      output.textContent = logs.join("\n");
    } else if (result !== undefined) {
      output.textContent = result;
    } else if (code.includes("var")) {
      // Special case for var hoisting
      output.textContent = "undefined";
    } else {
      output.textContent = "Code executed successfully";
    }

    // Explanation for var
    if (code.includes("var")) {
      explanation.textContent =
        "ℹ️ var is hoisted to the top and initialized with undefined. It does NOT follow TDZ.";
    } else {
      explanation.textContent = "✅ Code ran successfully!";
    }

  } catch (error) {
    output.textContent = error.message;

    if (error.message.includes("before initialization")) {
      
      if (code.includes("let")) {
        explanation.textContent =
          "⚠️ TDZ Error: You are accessing a variable before initialization. 'let' is hoisted, but stays in the Temporal Dead Zone (TDZ).";
      
      } else if (code.includes("const")) {
        explanation.textContent =
          "⚠️ TDZ Error: You are accessing a variable before initialization. 'const' is hoisted, but stays in the Temporal Dead Zone (TDZ).";
      
      } else {
        explanation.textContent =
          "⚠️ TDZ Error: Variable accessed before initialization.";
      }

    } else if (error.message.includes("not defined")) {
      explanation.textContent =
        "⚠️ Reference Error: Variable is not defined (it was never declared).";
    
    } else {
      explanation.textContent = "⚠️ " + error.message;
    }
  }

  // Restore console.log
  console.log = originalLog;
}