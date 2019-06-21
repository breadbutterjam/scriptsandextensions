    function removeAllButDiscountedPriceRecords()
    {
        discountedCustomerNames = [];
        rec = document.querySelectorAll('.zebra-striped tr')
        rec.forEach(function (ele, ind)
        {
            if (ele.children[7].textContent.trim() === "$43.95")
            {
                discountedCustomerNames.push(ele.children[2].textContent.trim().split(" "));
                // ele.parentElement.classList.add('discounted');
            }
            else
            {
                // ele.parentElement.classList.add('non-discounted')
                ele.remove();
            }
        });


        localStorage.jam = JSON.stringify({discountedCustomerNames, nIndex:0});
        if (discountedCustomerNames.length > 0)
        {
            discountedCustomerNames.forEach(function(){
                window.open("https://ge142.infusionsoft.com/Reports/searchTemplate.jsp?reportClass=SubscriptionSearch&view=resultsPage")
            })
        }
        else
        {
            console.log("Go home! No discounted customers")
        }
    }

    //run this function on the View Subscription (search) page. 
    function secondaryFunction()
    {

        oData = JSON.parse(localStorage.jam);
        nIndex = oData.nIndex;

        oData.nIndex += 1;

        localStorage.jam = JSON.stringify(oData);

        //fill first name field
        document.querySelector("#FirstName_DATA").value = oData.discountedCustomerNames[nIndex][0];

        //fill last name field
        document.querySelector("#LastName_DATA").value = oData.discountedCustomerNames[nIndex][1];

        //click search button
        document.querySelector("#submitSearchFilters").click();

    }

    function checkNextBillAmount()
    {
        let lastBillDate = document.querySelector("#Last_Bill_Date_data").textContent.trim();
        let nextBillDate = document.querySelector("#chargedOn").textContent.trim().split("C")[0].trim()

        let searchName = document.querySelector("#existing-search-name").textContent.trim()
        let oData = JSON.parse(localStorage.jam);
        let nextPrice = document.querySelector("#nextBillAmtDiv").textContent.trim();
        let statusToAdd;
        if (nextPrice === "$53.95")
        {
            
            statusToAdd = "next amount $53.95 == All OK"
            

        }
        else
        {
            statusToAdd = "next amount " + String(nextPrice) + " == NOT OKAY"
            
        }

        alert(statusToAdd)

        oData.discountedCustomerNames.forEach(function(elem, ind){
            // console.log(elem.join().replace(",", " "))
            if (elem.join().replace(",", " ") === searchName)
            {
                //add status and last billed date with that search name
                elem.push("last bill date:: " + lastBillDate);
                elem.push("next bill date:: " + nextBillDate);
                elem.push(statusToAdd);

            }
        })

        localStorage.jam = JSON.stringify(oData)
    }

    function exportToCSV()
    {
        let nw = new Date().toLocaleString().replace(",", ".")
        discountedCustomerNames = JSON.parse(localStorage.jam).discountedCustomerNames;

        discountedCustomerNames.forEach(function (elem){
            elem.push(nw);
            // finData.push(elem);
        })

        exportArrayParamData(discountedCustomerNames);

    }

    function exportArrayParamData(arrParam)
    {
        let csvContent = "data:text/csv;charset=utf-8,";
        arrParam.forEach(function(rowArray) {
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
        });

        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF

        link.click();
    }
