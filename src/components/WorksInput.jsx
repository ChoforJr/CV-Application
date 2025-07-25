export function WorksInput({
  works,
  setWorks,
  selectedWkId,
  setSelectedWkId,
  isActive,
  onShow,
}) {
  const currentWork = works.findIndex((item) => item.id == selectedWkId);

  function handleSelectedWkIdChange(event) {
    setSelectedWkId(event.target.value);
  }

  function handleWkChange(event) {
    const { className, value } = event.target;

    if (!selectedWkId) {
      console.warn("selectedWkId is not defined. Cannot update work.");
      return;
    }

    const updatedworks = works.map((work) => {
      if (work.id === selectedWkId) {
        return {
          ...work,
          [className]: value,
        };
      }
      return work;
    });

    setWorks(updatedworks);
  }

  function addwork() {
    setWorks([
      ...works,
      {
        id: crypto.randomUUID(),
        companyName: "Captain Man Crime Fighter",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function deletework() {
    if (selectedWkId === works[0].id) {
      setSelectedWkId(works[1].id);
    } else {
      setSelectedWkId(works[0].id);
    }
    setWorks((works) => works.filter((work) => work.id !== selectedWkId));
  }
  return (
    <section className="workInputs">
      <div className="workHeader">
        <h2 onClick={onShow}>Work</h2>
        <button onClick={addwork} className="addWk">
          Add work
        </button>
      </div>
      {isActive && (
        <>
          <div className="workNav">
            <label htmlFor="works">Select work Entry: </label>
            <select
              name="works"
              id="workList"
              onChange={handleSelectedWkIdChange}
            >
              {works.map((work) => (
                <option key={"opt" + work.id} value={work.id}>
                  {work.companyName}
                </option>
              ))}
            </select>
            <button
              onClick={deletework}
              disabled={works.length < 2 ? true : false}
              className="deleteWk"
            >
              Delete
            </button>
          </div>
          <WorkInputFields
            currentWork={currentWork}
            onChangeWk={handleWkChange}
            works={works}
          />
        </>
      )}
    </section>
  );
}

function WorkInputFields({ works, currentWork, onChangeWk }) {
  return (
    <div key={works[currentWork].id}>
      <label>
        Company Name{" "}
        <input
          name="companyName"
          className="companyName"
          type="text"
          placeholder="Company Name"
          value={works[currentWork].companyName}
          onChange={onChangeWk}
        />
      </label>
      <label>
        Position Title{" "}
        <input
          name="positionTitle"
          className="positionTitle"
          type="text"
          placeholder="Position Title"
          value={works[currentWork].positionTitle}
          onChange={onChangeWk}
        />
      </label>
      <label>
        Location{" "}
        <input
          name="location"
          className="location"
          type="text"
          placeholder="Location"
          value={works[currentWork].location}
          onChange={onChangeWk}
        />
      </label>
      <label>
        Start Date{" "}
        <input
          name="startDate"
          className="startDate"
          type="text"
          placeholder="Start Date"
          value={works[currentWork].startDate}
          onChange={onChangeWk}
        />
      </label>
      <label>
        End Date{" "}
        <input
          name="endDate"
          className="endDate"
          type="text"
          placeholder="End Date"
          value={works[currentWork].endDate}
          onChange={onChangeWk}
        />
      </label>
      <label>
        Description{" "}
        <textarea
          name="description"
          className="description"
          onChange={onChangeWk}
          placeholder="Description"
          value={works[currentWork].description}
        />
      </label>
    </div>
  );
}
