export const validate = (
  values: { validateName: string; validateValue: string | number }[]
) => {
  const status = ref<boolean>(true);
  const problemValues = ref<string>("");
  for(let i = 0; i < values.length; i++) {
    const vaildateLength = values[i].validateValue.toString().length;
    if(vaildateLength < 1) {
      status.value = false;
      problemValues.value = values[i].validateName.toString();
    }
  }
  return {
    status: status.value,
    problem: problemValues.value
  }
};
