export const vExample = {
  updated: (el, binding) => {
    console.log(binding.value)
    if (binding.value === "четное") el.style.backgroundColor = "yellow";
    if (binding.value === "нечетное") el.style.backgroundColor = "green";
  }
};