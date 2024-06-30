const Cell = ({ id, cell, go, setGo, cells, setCells, winningMessage }) => {

  const handleClick = () => {
    if (!winningMessage) {
      const taken = cell === "circle" || cell === "cross";

      if (!taken) {
        if (go === "circle") {
          handleCellChange("circle");
          setGo("cross");
        } else if (go === "cross") {
          handleCellChange("cross");
          setGo("circle");
        }
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
