export const getAddError = (event): string => {
  const name = event.target.name;
  let error = "";
  switch (name) {
    case "title":
      if (event.target.value.length < 5) {
        error = "El item debe contener más de 5 letras";
      }
      break;
    case "amount":
      if (event.target.value.length < 1) {
        error = "No se aceptan valores nulos";
      }
  }

  return error;
};
