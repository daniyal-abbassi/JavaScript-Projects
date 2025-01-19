const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}
function isInvaildInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length +1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
addEntryButton.addEventListener('click',addEntry)

function getCaloriesFromInputs(list) {
    let calories = 0;
    for(const item of list) {
        const currVal = item.value;
        const invalidInputMatch = isInvaildInput(currVal);
        if(invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`)
            isError = true;
            return null;
        }
        calories += Number(currVal)
    }
    return calories;
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']")
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']")
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']")
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']")
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if(isError) {
        return
    }
    const cosumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - cosumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Dificit';
    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
        <hr>
        <p>${budgetCalories} Calories Budget</p>
        <p>${cosumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;
    output.classList.remove('hide')
}

calorieCounter.addEventListener('submit',calculateCalories)

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'))
    for(const container of inputContainers) {
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide')
}
clearButton.addEventListener('click', clearForm)