let tips = document.getElementsByClassName('tip');
let toolBoxes = document.getElementsByClassName('toolbox');
let transparentCover = document.getElementById('transparent-cover');

for(let i = 0; i < tips.length; i++){
    tips[i].addEventListener('mouseover', () => {
        transparentCover.style.opacity = "50%";

        toolBoxes[i].classList.add('active');
    })
    tips[i].addEventListener('mouseleave', () => {
        transparentCover.style.opacity = "20%";

        toolBoxes[i].classList.remove('active');
    })
}

let surveyChoiceLabel = document.getElementsByClassName('survey-choice-label');
let surveyIcon = document.getElementsByClassName('survey-choice-state-icon');
let surveyElementCheckbox = document.getElementsByClassName('survey-element-checkbox');

let surveyChoiceValidatorBtn = document.getElementById('to-validate-survey-choice-btn');

let userChoiceCount = 0;

for(let i = 0; i < surveyChoiceLabel.length; i++){
    surveyChoiceLabel[i].addEventListener('click', () => {
        if(surveyElementCheckbox[i].checked){
            surveyChoiceLabel[i].classList.remove('choice-selected');
            surveyIcon[i].className = "survey-choice-state-icon uil uil-plus";

            userChoiceCount--;
            //console.log("L'étiquette " + (i+1) + " de valeur " + surveyChoiceLabel[i].textContent + " vient d'être unchecked");

            surveyElementCheckbox[i].checked = false;
        }else{
            surveyChoiceLabel[i].classList.add('choice-selected');
            surveyIcon[i].className = "survey-choice-state-icon uil uil-check";

            userChoiceCount++;
            //console.log("L'étiquette " + (i+1) + " de valeur " + surveyChoiceLabel[i].textContent + " vient d'être checked");

            surveyElementCheckbox[i].checked = true;
        }

        if(userChoiceCount < 1){
            surveyChoiceValidatorBtn.classList.add('muted');
        }else{
            surveyChoiceValidatorBtn.classList.remove('muted');
        }

        if(userChoiceCount > 2){
            for(let j = 0; j != i; j++){
                if(!surveyElementCheckbox[j].checked){
                    surveyChoiceLabel[j].classList.add('choice-muted');
                }
            }
            for(let k = surveyChoiceLabel.length-1; k != i; k--){
                if(!surveyElementCheckbox[k].checked){
                    surveyChoiceLabel[k].classList.add('choice-muted');
                }
            }
        }else{
            for(let j = 0; j != i; j++){
                surveyChoiceLabel[j].classList.remove('choice-muted');
            }
            for(let k = surveyChoiceLabel.length-1; k != i; k--){
                surveyChoiceLabel[k].classList.remove('choice-muted');
            }
        }
    })
}

let aboutUsColumnRow = document.querySelectorAll('.accordeon-row');

for(let i = 0; i < aboutUsColumnRow.length; i++){
    aboutUsColumnRow[i].addEventListener('click', () => {
        let firstParagTriplet = aboutUsColumnRow[0].querySelectorAll('p');
        let secondParagTriplet = aboutUsColumnRow[1].querySelectorAll('p');
        let thirdParagTriplet = aboutUsColumnRow[2].querySelectorAll('p');
        if(aboutUsColumnRow[i].classList.contains('active')){
            aboutUsColumnRow[i].classList.remove('active');
        }else{
           aboutUsColumnRow[i].classList.add('active');

           for(let k = 0; k != i; k++){
                aboutUsColumnRow[k].classList.remove('active');
            }
            for(let j = aboutUsColumnRow.length-1; j != i; j--){
                aboutUsColumnRow[j].classList.remove('active');
            }
        }
        console.log('colonne ' + (i+1));
    })
}