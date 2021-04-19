import React from 'react'
import '../App.css'

let meetings = []
let name = ''
let people = ''
let meetDate = ''
let startTime = ''
let endTime = ''
let x = 1
function deleteRow() {
  document.getElementById('main-table').deleteRow(this.rowIndex)
}
const addRow = () => {
  let row = document.createElement('tr')

  let column1 = document.createElement('td')
  let column2 = document.createElement('td')
  let column3 = document.createElement('td')
  let column4 = document.createElement('td')
  let column5 = document.createElement('td')
  let column6 = document.createElement('td')
  let column7 = document.createElement('td')
  //create text for the column element
  const column1text = document.createTextNode(`${x}`)

  //appends the text to the column element
  column1.appendChild(column1text)

  const column2text = document.createTextNode(
    document.getElementById('name').value
  )
  column2.appendChild(column2text)

  const column3text = document.createTextNode(
    document.getElementById('people').value
  )
  column3.appendChild(column3text)

  const column4text = document.createTextNode(
    document.getElementById('meetDate').value
  )
  column4.appendChild(column4text)

  const column5text = document.createTextNode(
    document.getElementById('startTime').value
  )
  column5.appendChild(column5text)

  const column6text = document.createTextNode(
    document.getElementById('endTime').value
  )
  column6.appendChild(column6text)
  const colum7btn = document.createElement('BUTTON')
  colum7btn.innerHTML = 'CLICK ME'
  colum7btn.onClick = () => {
    document.getElementById('main-table').deleteRow(this.rowIndex)
  }

  column7.appendChild(colum7btn)
  //appends the first column to the new row
  row.appendChild(column1)

  //appends the second column to the new row
  row.appendChild(column2)
  row.appendChild(column3)
  row.appendChild(column4)
  row.appendChild(column5)
  row.appendChild(column6)
  row.appendChild(column7)
  //appends the row to the table
  document.querySelector('#main-table').appendChild(row)
  x++

  document.getElementById('name').value = ''
  document.getElementById('people').value = ''
  document.getElementById('endTime').value = ''
  document.getElementById('meetDate').value = ''
  document.getElementById('startTime').value = ''

  meetings.push(row)
}

export default function Table() {
  return (
    <>
      <h1 id='meeting'>My Meetings</h1>
      <div className='tableContainer'>
        <div className='filterDiv'></div>
        <div className='tableDiv'>
          <table cellspacing='0' cellpadding='0' id='main-table'>
            <tr className='tableHead'>
              <th>Sl.no</th>
              <th>Meeting name</th>
              <th>No. of People attending</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Actions</th>
            </tr>
          </table>
          <table cellspacing='0' cellpadding='0'>
            <tr>
              <th></th>
              <th>
                <input type='text' id='name'></input>
              </th>
              <th>
                <input type='text' id='people'></input>
              </th>
              <th>
                <input type='date' id='meetDate'></input>
              </th>
              <th>
                <input type='time' id='startTime'></input>
              </th>
              <th>
                <input type='time' id='endTime'></input>
              </th>
              <th>
                <button id='add-row' onClick={addRow}>
                  Add
                </button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
