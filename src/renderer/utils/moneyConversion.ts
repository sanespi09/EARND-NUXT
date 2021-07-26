export const numberToMoney = (num: number): string => {
  const numSplit: string[] = num.toString().split("");
  for (let i = 1; i <= numSplit.length; i++) {
    if (i % 3 === 0 && i !== numSplit.length) {
      numSplit[numSplit.length - i] = "." + numSplit[numSplit.length - i];
    }
  }
  return numSplit.join("");
};
