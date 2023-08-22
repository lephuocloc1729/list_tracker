const Content = ({ data }) => {
  let tablejsx = [];
  data.forEach((datum) => {
    let rowjsx = [];
    Object.keys(datum).forEach((key) => {
      rowjsx.push(<td key={key}>{JSON.stringify(datum[key])}</td>);
    });
    tablejsx.push(<tr>{rowjsx}</tr>);
  });

  return (
    <>
      <table>
        <tbody>{tablejsx}</tbody>
      </table>
    </>
  );
};

export default Content;
