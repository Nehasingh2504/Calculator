    let expression = "";

    function updateDisplay() {
      document.getElementById("user_action").innerText = expression;
    }

    function append(value) {
      let result = document.getElementById("result").innerText;

      // prevent duplicate decimal
      if (value === "." && expression.includes('.')) return;
    
      // prevent double operator
      if (["+","-","*","/","%"].includes(expression.slice(-1)) && ["+","-","*","/","%"].includes(value)) return;
      
      // expression = 2+3 , value = any of them ["+","-","*","/","%"] then calculate the expression
      array = ["+","-","*","/","%"]
      flag= false
      for (let index = 0; index < array.length; index++) {
        if (expression.includes(array[index])) flag=true 
      }
      if (["+","-","*","/","%"].includes(value) && flag){
        calculate()
        expression += value
        updateDisplay()
        return;
      }

      // print user action
      expression += value;
      document.getElementById("result").innerText = value;
      updateDisplay();
    }

    function clearAll() {
        expression = "";
        document.getElementById("result").innerText = "0";
        updateDisplay();
    }

    function backspace() {
        expression = expression.slice(0, -1);
        document.getElementById("result").innerText = "0";
        updateDisplay();
    }

    function calculate() {
      try {
            expression.replace("÷","/")
            expression.replace("×","*")
            let sol = eval(expression);
            if (!isFinite(sol)) throw "Error";
            document.getElementById("result").innerText = sol;
            expression = sol.toString();
            updateDisplay();
        
      } catch {
        document.getElementById("result").innerText = "Error";
        expression = "";
      }
    }