import TagsList from "./components/TagsList"


const App = () => {
  return (
    <div id="main-container">
      <div id="leftside-menu">
        <div id="topleft-menu">
          <div id="logo-div">
            <h1>Notes</h1>
          </div>
          <button>All Notes<span className="right">&gt;</span></button>
          <button>Archived Notes<span className="right">&gt;</span></button>
        </div>

        <div id="tags-menu">
            <span id="tags-title">Tags</span>

            <TagsList/>
        </div>
      </div>

      <div id="notes-main-menu">
        <div id="header">
          <h2 id="title">All Notes</h2>

          <div>
              <input id="searchbar" type="text" placeholder="Search by title, content or tags..."></input>
              <div>Options</div>
          </div>
        </div>
        <div id="main">
            <div id="notes-menu">
                <button>+ Create New Note</button>
            </div>

            <div id="note">

            </div>

            <div id="note-options">
                <button>Archive Note</button>
                <button>Delete Note</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default App