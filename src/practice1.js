const parseData = ({ data, column }) => {

  return data.map(data => (
    Object.assign({}, ...(data.map(
      (value, index) => (
        { [column[index].name]: value }))))));
}
export { parseData };
