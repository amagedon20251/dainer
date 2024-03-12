const Txcard = () => {
  return (
    <>
      <div className="tx">
        <div className="txCard">
          <div className="txHead">
            <div className="txLeft">
              <p>Recent Transanction</p>
            </div>
            <div className="txRight">
              <p> Time </p>
            </div>
          </div>
          <div className="txBody">
            <div className="txLeft">
              <p> - 0xbfE359218AdD656C13C8DE1088010C8A6f25995A</p>
            </div>

            <div className="txRight">
              <p> Few minutes ago </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Txcard;
