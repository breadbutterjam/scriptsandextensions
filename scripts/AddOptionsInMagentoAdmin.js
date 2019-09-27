/* store Add Option button in variable */
btn = document.querySelector("#add_new_option_button")

/* 
    create array of options
*/
// a = ["10 mg" , "30 mg" , "50 mg" , "2000 IU" , "5000 IU"]
// strength = ["10 mg" , "30 mg" , "50 mg" , "2000 IU" , "5000 IU"]

// size = ["14 oz Jar" , "29 oz Jar" , "56 oz Jar" , "30 Softgels" , "60 Softgels" , "30mL" , "12.87 oz" , "12.52 oz" , "24.69 oz" , "23.7 oz" , "16 fl oz" , "32 fl oz" , "14.8 oz" , "7 oz" , "14.9 oz" , ".5 oz" , "1 oz" , "4 Bottles" , "12 bars" , "180 softgels" , "9.87 oz" , "19.75 oz" , "0.7 oz" , "30 Capsules" , "2.3 oz" , "120 Gummies" , "60 Vegan Tablets" , "120 Vegan Tablets" , "30 Vegan Tablets" , "30 Servings" , "60 Tablets" , "120 Tablets" , "30 Tablets" , "90 Tablets" , "180 Tablets" , "90 Caplets" , "1.9 oz" , "14.03 oz" , "1.15 oz" , "16.95 oz" , "13.37 oz" , "300 Caplets" , "2.4 oz" , "0.79 oz" , "1 Packet" , "0.34 oz" , "300 g" , "231 g" , "432 g" , "2.7 oz" , "28.4 oz" , "446 g" , "180 Caplets" , "45 Caplets" , "81 g" , "90 Vcaps" , "1.6 oz" , "18.3 oz" , "10 Packets" , "2.8 oz" , "16.7 oz" , "600 g" , "200 g" , "16.3 oz" , "922 g" , "443 g" , "451 g" , "420 g" , "854 g" , "931 g" , "35.9 oz" , "17.4 oz" , "36.6 oz" , "34.2 oz" , "26 oz" , "20 oz" , "20.5 oz" , "3.4 oz" , "611 g" , "651 g" , "548 g" , "31 g" , "0.8 oz" , "0.79 oz" , "120 Caplets" , "672 g" , "150 Caplets" , "240 Vcaps" , "120 Vcaps" , "240 Capsules" , "30 Chewable Tablets" , "60 Chewable Tablets" , "60 Capsules" , "75 Capsules" , "180 Capsules" , "60 Vcaps" , "120 Capsules" , "90 Capsules" , "800 Enteric Coated Tablet" , "200 Enteric Coated Tablet" , "100 Enteric Coated Tablet" , "400 Enteric Coated Tablet"]
// a = ["14 oz Jar" , "29 oz Jar" , "56 oz Jar" , "30 Softgels" , "60 Softgels" , "30mL" , "12.87 oz" , "12.52 oz" , "24.69 oz" , "23.7 oz" , "16 fl oz" , "32 fl oz" , "14.8 oz" , "7 oz" , "14.9 oz" , ".5 oz" , "1 oz" , "4 Bottles" , "12 bars" , "180 softgels" , "9.87 oz" , "19.75 oz" , "0.7 oz" , "30 Capsules" , "2.3 oz" , "120 Gummies" , "60 Vegan Tablets" , "120 Vegan Tablets" , "30 Vegan Tablets" , "30 Servings" , "60 Tablets" , "120 Tablets" , "30 Tablets" , "90 Tablets" , "180 Tablets" , "90 Caplets" , "1.9 oz" , "14.03 oz" , "1.15 oz" , "16.95 oz" , "13.37 oz" , "300 Caplets" , "2.4 oz" , "0.79 oz" , "1 Packet" , "0.34 oz" , "300 g" , "231 g" , "432 g" , "2.7 oz" , "28.4 oz" , "446 g" , "180 Caplets" , "45 Caplets" , "81 g" , "90 Vcaps" , "1.6 oz" , "18.3 oz" , "10 Packets" , "2.8 oz" , "16.7 oz" , "600 g" , "200 g" , "16.3 oz" , "922 g" , "443 g" , "451 g" , "420 g" , "854 g" , "931 g" , "35.9 oz" , "17.4 oz" , "36.6 oz" , "34.2 oz" , "26 oz" , "20 oz" , "20.5 oz" , "3.4 oz" , "611 g" , "651 g" , "548 g" , "31 g" , "0.8 oz" , "0.79 oz" , "120 Caplets" , "672 g" , "150 Caplets" , "240 Vcaps" , "120 Vcaps" , "240 Capsules" , "30 Chewable Tablets" , "60 Chewable Tablets" , "60 Capsules" , "75 Capsules" , "180 Capsules" , "60 Vcaps" , "120 Capsules" , "90 Capsules" , "800 Enteric Coated Tablet" , "200 Enteric Coated Tablet" , "100 Enteric Coated Tablet" , "400 Enteric Coated Tablet"]

//flavour = ["Chocolate Mint" , "Peppermint" , "Chocolate" , "Vanilla" , "Strawberry Banana" , "Watermelon" , "Citrus Flavor" , "Unflavored" , "Orange" , "Raspberry Lemon" , "Eucalyptus" , "Frankincense" , "Geranium" , "Lavender" , "Lemon" , "Lemongrass" , "Rosemary" , "Sweet Orange" , "Tea Tree" , "Starter Kit" , "Chocolate Macadamia Nut" , "Peanut Butter Crunch" , "Blueberry" , "Chocolate Coconut" , "Chocolate Sea Salt" , "Maple Sea Salt" , "Cranberry Pomegranate" , "Strawberry Lemonade" , "Cherry" , "Fruit" , "Chocolate Almond Brownie" , "Chocolate Coconut Almond" , "Chocolate Covered Cherry" , "Chocolate Fudge" , "Peanut Butter" , "Lightly Sweet" , "Lemon Ginger" , "Apple" , "Pomegranate" , "Original" , "Blackberry Cherry" , "Blackberry" , "Peanut Butter Chocolate" , "Sea Salt Caramel" , "Smooth Energy" , "Chocolate Cacao" , "Vanilla Chai" , "Orange Mango" , "Fruit Punch" , "Berry Cherry" , "Watermelon" , "Chocolate"]
a = ["Chocolate Mint" , "Peppermint" , "Chocolate" , "Vanilla" , "Strawberry Banana" , "Watermelon" , "Citrus Flavor" , "Unflavored" , "Orange" , "Raspberry Lemon" , "Eucalyptus" , "Frankincense" , "Geranium" , "Lavender" , "Lemon" , "Lemongrass" , "Rosemary" , "Sweet Orange" , "Tea Tree" , "Starter Kit" , "Chocolate Macadamia Nut" , "Peanut Butter Crunch" , "Blueberry" , "Chocolate Coconut" , "Chocolate Sea Salt" , "Maple Sea Salt" , "Cranberry Pomegranate" , "Strawberry Lemonade" , "Cherry" , "Fruit" , "Chocolate Almond Brownie" , "Chocolate Coconut Almond" , "Chocolate Covered Cherry" , "Chocolate Fudge" , "Peanut Butter" , "Lightly Sweet" , "Lemon Ginger" , "Apple" , "Pomegranate" , "Original" , "Blackberry Cherry" , "Blackberry" , "Peanut Butter Chocolate" , "Sea Salt Caramel" , "Smooth Energy" , "Chocolate Cacao" , "Vanilla Chai" , "Orange Mango" , "Fruit Punch" , "Berry Cherry" , "Watermelon" , "Chocolate"]

function slayIt()
{
    /* 
        trigger click of Add Option button as many times as there are number of options that need to be added.  
    */
    btn = document.querySelector("#add_new_option_button")
    a.forEach(function(){
        btn.click();
    })

}

function slayIt2()
{
    rws = document.querySelectorAll(".new-option")
    /* 
        add text, for now adding same text in both Admin and front end fields. 
    */
    a.forEach(function(elem, ind){
        rws[ind].children[2].children[0].value = a[ind];
        rws[ind].children[3].children[0].value = a[ind];
    })
}