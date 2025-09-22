const table = document.getElementById("table");
      const getSumBtn = document.createElement("button");
      getSumBtn.append("Get Total Price");
      document.body.appendChild(getSumBtn);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = "Total Price";
      tr.appendChild(td);

      const getSum = () => {
        const priceList = document.querySelectorAll(".price");
        const td = document.createElement("td");
        let total = 0;

        priceList.forEach((price) => {
          total += parseInt(price.textContent, 10);
        });

        td.innerText = total;

        tr.appendChild(td);

        table.appendChild(tr);
        //Add your code here
      };

      getSumBtn.addEventListener("click", getSum);

