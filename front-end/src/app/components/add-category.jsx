import React from 'react'

const AddCategory = () => {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default AddCategory
