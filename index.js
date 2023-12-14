const app = document.getElementById("app");
app.style.display = "flex";
app.style.justifyContent = "space-around";
const body = document.getElementsByTagName("body")[0];
body.style.width = "80%";
body.style.margin = "0 auto";
const submit = document.getElementById("submit");

const putCall = async () => {
  data = {
    name: "Marshmallow",
    age: 5,
    colour: "Yellow",
  };
  try {
    const response = await fetch(
      "https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns/6578be40b34d0a03e8f541cf",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

const callApis = async () => {
  //   const response = await fetch(
  //     "https://rickandmortyapi.com/api/character?page=1"
  //   );
  //   const characters = await response.json();
  //   const data = characters.results
  //   console.log(data);
  data = {
    name: "Glimmer",
    age: 1,
    colour: "Ivory",
  };
  try {
    const response = await fetch(
      "https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response;

    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  putCall();
};

const removeChildren = () => {
  while (app.firstChild) {
    app.removeChild(app.lastChild);
  }
};

const deleteItem = async (e) => {
  removeChildren();
  const url = `https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns/${e.target.id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  onload();
};

const onload = async () => {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    result.forEach((element) => {
      const div = document.createElement("div");
      app.appendChild(div);
      const pName = document.createElement("p");
      pName.innerHTML = element.name;
      div.appendChild(pName);
      const pAge = document.createElement("p");
      pAge.innerHTML = element.age;
      div.appendChild(pAge);
      const pColour = document.createElement("p");
      pColour.innerHTML = element.colour;
      div.appendChild(pColour);
      const button = document.createElement("button");
      button.className = "btn btn-success";
      button.id = element._id;
      button.innerHTML = "Click on me";
      button.addEventListener("click", deleteItem);
      div.appendChild(button);
    });
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

onload();

const addUnicorn = async (e) => {
  e.preventDefault();
  removeChildren();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const colour = document.getElementById("colour").value;

  const obj = {
    name,
    age,
    colour,
  };
  try {
    const response = await fetch(
      "https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    const result = await response;

    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  onload();
};
submit.addEventListener("click", addUnicorn);
