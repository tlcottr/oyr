const shortAddress = (address) => {
  return `0x${address.substring(address.length - 5, address.length)}`;
};

export { shortAddress };
