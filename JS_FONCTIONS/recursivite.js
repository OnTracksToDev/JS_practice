function recursive(nombre) {
  if (nombre >= 0) {
    console.log(nombre--);
    recursive(nombre);
  }
}
recursive(5);