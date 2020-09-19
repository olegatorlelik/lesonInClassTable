const add = document.querySelector("#add");
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const date = document.querySelector("#date");
const cash = document.querySelector("#cash");
const newLine = document.querySelector("#line");
const table = document.querySelector("#table");
const btnDelet = document.querySelector("#delet");
const checkColection = [...document.querySelectorAll("#check")];
const btnSum = document.querySelector("#summ");
const resaltSumm = document.querySelector("#textSumm");
let arr = [];
let sum = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elemInMass = getValueElem(
    name.value,
    age.value,
    data.value,
    cash.value
  );
  arr.push(elemInMass);
  createElemInTable(
    elemInMass.name,
    elemInMass.age,
    elemInMass.date,
    elemInMass.monny
  );
  console.log(arr);
});

btnDelet.addEventListener("click", (event) => {
  setElCheck();
  getCheckEl();
  console.log(arr);
});

btnSum.addEventListener("click", (event) => {
  const checkColection = [...document.querySelectorAll("#check")];
  checkColection.forEach((elem, index) => {
    if (elem.checked) {
      arr[index].check = true;
    } else if (!elem.checked) {
      arr[index].check = false;
    }
  });
  resaltSumm.innerHTML = "";
  resaltSumm.innerHTML = getCheckElforSumm();
});

const setElCheck = () => {
  const checkColection = [...document.querySelectorAll("#check")];
  checkColection.forEach((elem, index) => {
    if (elem.checked) {
      arr[index].check = true;
      const elemFalse = elem.parentNode;
      elemFalse.parentNode.remove();
    } else if (!elem.checked) {
      arr[index].check = false;
    }
  });
};

const getCheckEl = () => {
  arr = arr.filter((elem) => {
    if (!elem.check) {
      return arr;
    }
  });
};

const getCheckElforSumm = () => {
  return arr.reduce((acc, elem) => {
    if (elem.check) {
      console.log(acc);
      console.log(elem.monny);
      return acc + elem.monny;
    }
  }, 0);
};

const createElemInTable = (
  newLineName,
  newLineAge,
  newLineDate,
  newLineCash
) => {
  return (table.innerHTML += `<tr id="line" class = "table__line">
  <td class="table__box"><input type="checkbox" id="check" /></td>
  <td class="table__box">${newLineName}</td>
  <td class="table__box">${newLineAge}</td>
  <td class="table__box">${newLineDate}</td>
  <td class="table__box">${newLineCash}</td>
</tr>`);
};

const getValueElem = (name1, age1, date1, monny1) => {
  const elem = {
    name: name1,
    age: age1,
    date: date1,
    monny: +monny1,
    check: false,
  };
  return elem;
};
