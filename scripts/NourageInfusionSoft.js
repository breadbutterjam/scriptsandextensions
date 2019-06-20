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
        let searchName = document.querySelector("#existing-search-name").textContent.trim()
        let oData = JSON.parse(localStorage.jam);
        let nextPrice = document.querySelector("#nextBillAmtDiv").textContent.trim();
        let statusToAdd;
        if (nextPrice === "$53.95")
        {
            
            statusToAdd = "All OK"
            

        }
        else
        {
            statusToAdd = "NOT OKAY " + String(nextPrice)
            
        }

        alert(statusToAdd)

        oData.discountedCustomerNames.forEach(function(elem, ind){
            // console.log(elem.join().replace(",", " "))
            if (elem.join().replace(",", " ") === searchName)
            {
                //add status with that search name
                elem.push(statusToAdd)
            }
        })

        localStorage.jam = JSON.stringify(oData)
    }