function calcScore() {
    var score = 0;
    var q1 = document.getElementById('q1').checked;
    var q2 = document.getElementById('q2').checked;
    var q3 = document.getElementById('q3').checked;
    var q4 = document.getElementById('q4').checked;
    var q5 = document.getElementById('q5').checked;
    if (q1 == true) {
        score += 1;
        document.getElementById('explain1').innerHTML = "<span style='background: #55efc4;'>Correct!</span>"
    }
    else {
        document.getElementById('explain1').innerHTML = "<span style='background: red;'>Starting from 1 Jan 2020, the sale of tobacco products is prohibited to persons under the age of 20.</span>"
    }
    if (q2 == true) {
        score += 1;
        document.getElementById('explain2').innerHTML = "<span style='background: #55efc4;'>Correct!</span>"
    }
    else {
        document.getElementById('explain2').innerHTML = "<span style='background: #d63031;'>In Singapore, the importation and sale of e-cigarettes have always been banned under the blanket prohibition on imitation tobacco products. In 2017, we extended the ban to cover purchase, use and possession.</span>"
    }
    if (q3 == true) {
        score += 1;
        document.getElementById('explain3').innerHTML = "<span style='background: #55efc4;'>Correct!</span>"
    }
    else {
        document.getElementById('explain3').innerHTML = "<span style='background: #d63031;'>Rotating combined text and picture health warnings must cover at least 50 percent of each of the two principal display areas. On smokeless tobacco products, text-only warnings must occupy at least 50 percent of each of the two principal display areas.</span>"
    }
    if (q4 == true) {
        score += 1;
        document.getElementById('explain4').innerHTML = "<span style='background: #55efc4;'>Correct!</span>"
    }
    else {
        document.getElementById('explain4').innerHTML = "<span style='background: #d63031;'>All tobacco products must carry the mandatory health warning labels. Tobacco importers, wholesalers and retailers may refer to the Labelling Regulations for compliance.</span>"
    }
    if (q5 == true) {
        score += 1;
        document.getElementById('explain5').innerHTML = "<span style='background: #55efc4;'>Correct!</span>"
    }
    else {
        document.getElementById('explain5').innerHTML = "<span style='background: #d63031;'>Any advertisements and promotions relating to tobacco products and imitation tobacco products are prohibited under the Singapore law.</span>"
    }
    var total = 5;
    alert("You have scored " + score + " out of " + total + "!")
    if (score < 4) {
        alert("Please checkout our summary page for detailed explaination!")

    }
}