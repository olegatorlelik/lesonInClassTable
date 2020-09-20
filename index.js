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
const btnSortMonny = document.querySelector("#sortMonny");
const btnSortAge = document.querySelector("#sortBerthday");

let arr = [];

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
  resaltSumm.textContent = "";
  const sumElemInInner = getCheckElforSumm();
  resaltSumm.textContent += sumElemInInner;
});

btnSortMonny.addEventListener("click", (event) => {
  sortElemMonny();
});
btnSortAge.addEventListener("click", (event) => {
  sortElemAge();
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
  let result = arr.reduce((acc, elem) => {
    if (elem.check) {
      return acc + elem.monny;
    } else {
      return acc;
    }
  }, 0);

  return result;
};

const sortElemMonny = () => {
  arr = arr.sort((a, b) => {
    return a.monny - b.monny;
  });
  const colectionLine = [...document.querySelectorAll(".table__line")];
  colectionLine.forEach((elem) => {
    elem.remove();
  });
  arr.forEach((elem) => {
    createElemInTable(elem.name, elem.age, elem.date, elem.monny);
  });
};

const sortElemAge = () => {
  arr = arr.sort((a, b) => {
    let startTime = new Date(a.date).getTime();
    let finishTime = new Date(b.date).getTime();
    return startTime - finishTime;
  });
  const colectionLine = [...document.querySelectorAll(".table__line")];
  colectionLine.forEach((elem) => {
    elem.remove();
  });
  arr.forEach((elem) => {
    createElemInTable(elem.name, elem.age, elem.date, elem.monny);
  });
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
