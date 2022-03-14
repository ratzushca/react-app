export default function InputBox({
  handleAddFormChange,
  handleAddFormSubmit,
  addFormData,
}) {
  return (
    <div className='row inputboxes'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddFormSubmit();
        }}>
        <div className='form-inline row'>
          <div className='form-group col-md-4 col-lg-4'>
            <label className='type-label'>Type:</label>
            <select
              className='form-control type-input'
              name='type'
              value={addFormData.type}
              onChange={handleAddFormChange}>
              <option>Cash</option>
              <option>Card</option>
              <option>Crypto</option>
              <option>Other</option>
            </select>
          </div>

          <div className='form-group col-md-4 col-lg-4'>
            <label className='date-options date-label'>Date:</label>
            <input
              type='date'
              className='form-control date-input'
              name='date'
              value={addFormData.date}
              onChange={handleAddFormChange}
            />
          </div>
        </div>

        <div className='form-inline row'>
          <div className='form-group col-md-4 col-lg-4'>
            <label className='name-label'>Name:</label>
            <input
              type='text'
              placeholder='What did you spend on?'
              className='form-control name-input'
              name='name'
              value={addFormData.name}
              onChange={handleAddFormChange}
            />
          </div>

          <div className='form-group col-md-4 col-lg-4'>
            <label className='date-options amount-label'>Amount:</label>
            <input
              type='number'
              placeholder='How much?'
              className='form-control amount-input'
              name='amount'
              value={addFormData.amount}
              onChange={handleAddFormChange}></input>
          </div>
        </div>
        <div className='col text-center add-btn'>
          <button type='submit' className='btn btn-primary' value='Submit'>
            Add a new expense
          </button>
        </div>
      </form>
    </div>
  );
}
