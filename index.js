const app = document.getElementById("app");
const submit = document.getElementById("submit");

const deleteUnicorn = async (e) => {
  const user_id = e.target.id;
  try {
    const response = await fetch(
      `https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns/${user_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response;
    console.log("Success:", result);
    render();
  } catch (error) {
    console.error("Error:", error);
  }
};

const render = async () => {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    result.forEach((element) => {
      const div = document.createElement("div");
      div.style.margin = "5%";

      const pName = document.createElement("p");
      pName.innerHTML = `Name: ${element.name}`;
      div.appendChild(pName);

      const pAge = document.createElement("p");
      pAge.innerHTML = `Age: ${element.age}`;
      div.appendChild(pAge);

      const pColour = document.createElement("p");
      pColour.innerHTML = `Colour: ${element.colour}`;
      div.appendChild(pColour);

      const button = document.createElement("button");
      button.innerHTML = "Delete";
      button.id = element._id;
      button.addEventListener("click", deleteUnicorn);
      div.appendChild(button);

      app.appendChild(div);
    });
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

render();

const addUnicorn = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("colour").value;

  const obj = {
    name,
    age,
    colour: color,
  };

  try {
    const response = await fetch("https://crudcrud.com/api/df623ff869b9413aa1ef811855490a55/unicorns", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

submit.addEventListener("click", addUnicorn);
